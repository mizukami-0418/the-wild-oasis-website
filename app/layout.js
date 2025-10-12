import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "タイトルだよ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
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
