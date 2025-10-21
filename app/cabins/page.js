import Counter from "@/app/_components/Counter";
import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";

export const metadata = {
  title: "Cabins",
};

export default async function Page() {
  const cabins = await getCabins();

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

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}
