import Link from "next/link";

// Thank You Page after Cabin Reservation
export default function Page() {
  return (
    <div className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">ご予約ありがとうございます！</h1>
      <Link
        href="/account/reservations"
        className="underline text-xl text-accent-500 inline-block"
      >
        予約管理画面へ &rarr;
      </Link>
    </div>
  );
}
