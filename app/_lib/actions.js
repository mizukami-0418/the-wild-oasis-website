"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

// Update guest profile information
export async function updateGuest(formData) {
  const session = await auth();
  if (!session) {
    throw new Error("ログインしてね 😄");
  }

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
    throw new Error(
      "有効な国民ID番号を入力してください (6〜12文字の英数字) 😄"
    );
  }

  const updateData = { nationalID, nationality, countryFlag };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    throw new Error("プロフィールを更新できませんでした 😄");
  }

  revalidatePath("/account/profile");
}

// Create a new booking
export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session) {
    throw new Error("ログインしてね 😄");
  }

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 500),
    extraPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };
  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) {
    throw new Error("予約を作成できませんでした 😄");
  }

  revalidatePath(`/cabins/${bookingData.cabinId}`);

  redirect("/cabins/thankyou");
}

// Delete a booking by id
export async function deleteBooking(bookingId) {
  const session = await auth();
  if (!session) {
    throw new Error("ログインしてね 😄");
  }

  const guestBookings = await getBookings(session.user.guestId);

  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("この予約を削除する権限がありません 😄");
  }

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    throw new Error("予約を削除できませんでした 😄");
  }
  revalidatePath("/account/reservations");
}

// Update a booking by form data
export async function updateBooking(formdata) {
  const bookingId = Number(formdata.get("bookingId"));

  // Check authentication
  const session = await auth();
  if (!session) {
    throw new Error("ログインしてね 😄");
  }
  // Check authorization
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("この予約を更新する権限がありません 😄");
  }
  // Prepare update data
  const updateData = {
    numGuests: Number(formdata.get("numGuests")),
    observations: formdata.get("observations").slice(0, 500),
  };

  // Database update
  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  // Error handling
  if (error) {
    throw new Error("予約を更新できませんでした 😄");
  }

  // Revalidate path
  revalidatePath(`/account/reservations/edit/${bookingId}`);

  // Redirect to reservations page
  redirect("/account/reservations");
}

// Sign in action
export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

// Sign out action
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
