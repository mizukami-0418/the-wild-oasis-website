"use client";

import Link from "next/link";

export default function Error() {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">何かエラーが発生しました! 😭</h1>
      <p className="text-lg">もう一度お試しください!</p>

      {/* <button
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        // onClick={reset}
      >
        Try again
      </button> */}
      <Link
        href="/"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        // onClick={reset}
      >
        ホームに戻る 🏠
      </Link>
    </main>
  );
}
