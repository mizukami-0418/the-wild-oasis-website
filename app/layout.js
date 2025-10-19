import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["japanese"],
  display: "swap",
});

const googleFont = josefin.className;

import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "ようこそ🤗 / The Wild Oasis",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${googleFont} bg-blue-200 text-gray-50 min-h-screen"`}>
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
