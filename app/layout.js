import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import "@/app/_styles/globals.css";

export const metadata = {
  title: "タイトルだよ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="bg-blue-200 text-gray-50 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>&copy; 2025 The Wild Oasis</footer>
      </body>
    </html>
  );
}
