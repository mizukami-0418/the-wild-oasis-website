import { Josefin_Sans } from "next/font/google";

// Setting up Google Font
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

const googleFont = josefin.className;

import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
import { Root } from "react-day-picker";

// metadata
export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "ようこそ🤗 / The Wild Oasis",
  },
};

// RootLayout Setup
export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${googleFont} bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
        <footer className="text-center border-t border-primary-900 text-lg py-4">
          &copy; 2025 The Wild Oasis
        </footer>
      </body>
    </html>
  );
}
