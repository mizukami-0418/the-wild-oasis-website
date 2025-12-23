import Link from "next/link";

// Cabin Not Found Page
function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        キャビンが見つかりませんでした 😭:
      </h1>
      <Link
        href="/cabins"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        キャビン一覧に戻る 🏕️
      </Link>
    </main>
  );
}

export default NotFound;
