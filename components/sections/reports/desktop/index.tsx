import reportsData from "@/public/json/reports.json";
import Image from "next/image";

export default function SectionReportsDesktop() {
  return (
    <div className="block columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-x-2 w-full max-w-[1024px]">
      {reportsData.Default.map((card, key) => {
        return (
          <div
            key={key}
            className="
                      relative p-[2px] rounded-md mb-2 inline-block
                      before:absolute before:inset-0 before:rounded-md
                      before:bg-gradient-to-b before:from-[#0a1d38] before:to-[#1673fa]
                      before:opacity-0 hover:before:opacity-100
                      before:transition-opacity before:duration-500
                      transition-all duration-500
                    "
          >
            <div className="relative z-[1] w-full lg:max-w-[246px] min-h-[254px] bg-[#0a1d38] rounded-md pt-7 pb-5 pr-4 pl-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col w-[40px]">
                    <Image
                      alt="Hero"
                      src={`/imagens/home/reports/${card.image}.png`}
                      width={40}
                      height={40}
                      className="w-[40px] h-[40px] rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xl text-white font-bold">
                      {card.name}
                    </h4>
                    <p className="text-base text-white/50 leading-[137%]">
                      {card.career}
                    </p>
                  </div>
                </div>
                <p className="text-base text-white/90 leading-[145%]">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
