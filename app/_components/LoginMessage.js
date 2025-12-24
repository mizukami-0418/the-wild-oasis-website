import Link from "next/link";

// Login Message Component prompting users to log in for reservations
function LoginMessage() {
  return (
    <div className="grid bg-primary-800 ">
      <p className="text-center text-xl py-12 self-center">
        予約をするには、
        <br />
        <Link href="/login" className="underline text-accent-500">
          ログイン
        </Link>{" "}
        をしてください。
      </p>
    </div>
  );
}

export default LoginMessage;
