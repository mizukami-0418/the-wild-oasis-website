import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["japanese"],
  display: "swap",
});

const googleFont = josefin.className;

import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "ようこそ🤗 / The Wild Oasis",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${googleFont} bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
        {/* <footer>&copy; 2025 The Wild Oasis</footer> */}
      </body>
    </html>
  );
}
