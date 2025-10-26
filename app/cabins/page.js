import { Suspense } from "react";
import CabinList from "@/app/_components/CabinList";
import Spinner from "@/app/_components/Spinner";

export const metadata = {
  title: "Cabins",
};

// export const revalidate = 3600; // 1 hour

export default async function Page() {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        イタリアのドロミテ山脈の中心に位置する、居心地が良く、それでいて贅沢なキャビン。
        美しい山々の景色を眺めながら目覚め、周囲の深い森を探検したり、夜には星空の下でプライベートな温泉に浸かってリラックスしたり。
        まるで「もうひとつの我が家」で自然の美しさを満喫できます。
        静かで穏やかな休暇を過ごすのにぴったりの場所。 ようこそ、楽園へ。
      </p>
      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
