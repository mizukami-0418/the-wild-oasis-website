import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

// Cabin component to display detailed information about a cabin
export default function Cabin({ cabin }) {
  const { name, maxCapacity, image, description } = cabin;
  return (
    <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
      <div className="relative scale-[1.15] -translate-x-3">
        <Image
          src={image}
          fill
          className="object-cover"
          alt={`Cabin ${name}`}
        />
      </div>

      <div>
        <h2 className="text-accent-100 font-black text-4xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
          The Wild Oasis <br />
          {name}
        </h2>

        <p className="text-lg text-primary-300 mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              <span className="font-bold">{maxCapacity}</span> 名様まで宿泊可能
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              <span className="font-bold">中央アルプス</span>{" "}
              (日本)の中心部に位置しています。
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              プライバシーは<span className="font-bold">100%</span> 保証
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
