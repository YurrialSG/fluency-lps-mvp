import mentorsData from "@/public/json/mentors.json";
import Image from "next/image";

export default function SectionMentorsDesktop() {
  return (
    <div className="block columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-x-2 w-full max-w-[1064px]">
      {mentorsData.Default.map((card, key) => {
        return (
          <div
            key={key}
            className="inline-block w-full lg:max-w-[260px] justify-start items-start min-h-[254px] border border-white hover:border-[#dfe1f0] bg-white pt-7 pb-5 pr-4 pl-6 rounded-md mb-2 transition-all duration-500"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col relative w-[70px]">
                <Image
                  alt="Hero"
                  src={`/imagens/home/mentors/${card.image}.png`}
                  width={70}
                  height={70}
                  className=" w-[70px] min-w-[70px] h-[70px] min-h-[70px] rounded-full"
                />
                <div className="border absolute -bottom-1 rounded-full -right-1 border-white/10 shadow">
                  <Image
                    alt="Hero"
                    src={`/imagens/home/mentors/${card.company}.png`}
                    width={30}
                    height={30}
                    className=" w-[30px] min-w-[30px] h-[30px] min-h-[30px] rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="text-xl text-[#0a1d38] font-medium">
                  {card.name}
                </h4>
                <p className="text-sm text-[#0a1d38] leading-[137%]">
                  {card.job}
                </p>
              </div>
            </div>
            <p className="text-sm text-[#0a1d38]/60 leading-[145%]">
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
