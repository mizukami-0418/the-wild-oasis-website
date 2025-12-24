import Image from "next/image";
import { signInAction } from "../_lib/actions";

// Sign in Button Component for Google Authentication
function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium cursor-pointer hover:bg-primary-700 transition rounded-xl">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Googleでログイン 😄</span>
      </button>
    </form>
  );
}

export default SignInButton;
