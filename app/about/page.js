import Image from "next/image";
import about1 from "@/public/about-1.jpg";
import about2 from "@/public/about-2.jpg";
import Link from "next/link";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400; // 1 hour

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-8">
          <p>
            自然の美しさと快適な暮らしが見事に調和する場所。
            イタリアのドロミテ山脈の中心にひっそりと佇む、まさに「もうひとつの楽園」です。
            しかし、魅力は豪華なキャビンだけではありません。
            自然と再びつながり、家族とともにシンプルな喜びを味わう——その体験こそが、この場所の本当の贅沢なのです。
          </p>
          <p>
            {cabins.length}
            棟のラグジュアリーキャビンは、快適にお過ごしいただける居心地のよい拠点をご用意しています。
            しかし、本当の自由と安らぎは、その周囲に広がる山々の中にあります。
            緑豊かな森を歩き、新鮮な空気を胸いっぱいに吸い込み、
            焚き火や温泉の湯船から見上げる満天の星をゆったりとお楽しみください。
          </p>
          <p>
            ここは、自然の美しさに包まれながら、心に残る思い出が生まれる場所です。
            ゆっくりと時を過ごし、リラックスしながら、美しい環境の中で「共に過ごす喜び」を感じていただけます。
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={about1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src={about2}
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          <p>
            1962年の創業以来、「The Wild
            Oasis」は家族経営の大切な隠れ家として愛されてきました。
            祖父母の代に始まり、この安らぎの場所は愛情と心配りを込めて育まれ、
            温かく迎える空間づくりへの私たちの情熱を示す証として、代々受け継がれています。
          </p>
          <p>
            長年にわたり、私たちは「The Wild Oasis」の本質を守り続けてきました。
            それは、山々の永遠の美しさと、家族経営ならではの温かいおもてなしを融合させたものです。
            ここでは、お客様は単なる宿泊客ではなく、私たちの大きな家族の一員です。
            ぜひ「The Wild Oasis」にお越しください。
            伝統と静けさが調和する場所で、訪れるたびに「帰ってきた」と感じていただけるはずです。
          </p>

          <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
