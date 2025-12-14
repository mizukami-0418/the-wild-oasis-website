"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

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

export async function deleteReservation(bookingId) {
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

export async function updateBooking(formdata) {
  const bookingId = Number(formdata.get("bookingId"));

  // 認証の確認
  const session = await auth();
  if (!session) {
    throw new Error("ログインしてね 😄");
  }
  // 認可の確認
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("この予約を更新する権限がありません 😄");
  }
  // 更新データの準備
  const updateData = {
    numGuests: Number(formdata.get("numGuests")),
    observations: formdata.get("observations").slice(0, 500),
  };

  // データベースの更新
  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  // エラー処理
  if (error) {
    throw new Error("予約を更新できませんでした 😄");
  }

  // キャッシュの再検証
  revalidatePath(`/account/reservations/edit/${bookingId}`);

  // 処理後のリダイレクト
  redirect("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
