import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="cabins">キャビン</Link>
      </li>
      <li>
        <Link href="about">アバウト</Link>
      </li>
      <li>
        <Link href="account">アカウント</Link>
      </li>
    </ul>
  );
}
