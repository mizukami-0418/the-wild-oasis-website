import { auth } from "../_lib/auth";

export const metadata = {
  title: "Lounge",
};

// Lounge Page showing Welcome Message！
export default async function Page() {
  const session = await auth();

  const firstName = session.user.name.split(" ")[0];
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      ようこそ！{firstName}さん😃
    </h2>
  );
}
