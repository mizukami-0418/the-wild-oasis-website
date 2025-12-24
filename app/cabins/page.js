import { Suspense } from "react";
import CabinList from "@/app/_components/CabinList";
import Spinner from "@/app/_components/Spinner";
import Filter from "../_components/Filter";

export const revalidate = 3600;

export const metadata = {
  title: "Cabins",
};

// Cabin List Page with Filter and Suspense
export default async function Page({ searchParams }) {
  const sp = await searchParams;
  const filter = sp?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        しあわせなキャビンでの休暇
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        イタリアのドロミテ山脈の中心に位置する、居心地が良く、それでいて贅沢なキャビン。
        美しい山々の景色を眺めながら目覚め、周囲の深い森を探検したり、夜には星空の下でプライベートな温泉に浸かってリラックスしたり。
        まるで「もうひとつの我が家」で自然の美しさを満喫できます。
        静かで穏やかな休暇を過ごすのにぴったりの場所。 ようこそ、楽園へ。
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
