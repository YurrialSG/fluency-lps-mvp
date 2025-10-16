import { cn } from "@/lib/utils";
import Image from "next/image";

export default function SectionLogos() {
  return (
    <section className="bg-white py-10">
      <div className="flex flex-col container">
        <div className="flex flex-col gap-6">
          <h3 className="text-[19px] text-[#8493accc] max-w-[824px]">
            Aprenda com os melhores: mentores e professores das mais renomadas
            empresas do Brasil
          </h3>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-10 gap-y-6 md:gap-15">
            {[
              {
                name: "sumup-small.png",
                alt: "Company 01",
                width: 97,
                height: 30,
                icon: "w-[77px] h-[22px] md:w-[97px] md:h-[30px]",
              },
              {
                name: "nubank-small.png",
                alt: "Company 02",
                width: 50,
                height: 28,
                icon: "w-[38px] h-[22px] md:w-[50px] md:h-[28px]",
              },
              {
                name: "bradesco-small.png",
                alt: "Company 03",
                width: 124,
                height: 28,
                icon: "w-[100px] h-[22px] md:w-[124px] md:h-[28px]",
              },
              {
                name: "google-small.png",
                alt: "Company 04",
                width: 45,
                height: 45,
                icon: "w-[36px] h-[36px] md:w-[45px] md:h-[45px]",
              },
              {
                name: "magalu-small.png",
                alt: "Company 05",
                width: 100,
                height: 22,
                icon: "w-[80px] h-[18px] md:w-[100px] md:h-[22px]",
              },
              {
                name: "itau-small.png",
                alt: "Company 06",
                width: 50,
                height: 50,
                icon: "w-[40px] h-[40px] md:w-[50px] md:h-[50px]",
              },
              {
                name: "ambev-small.png",
                alt: "Company 07",
                width: 90,
                height: 22,
                icon: "w-[90px] h-[22px] md:w-[90px] md:h-[22px]",
              },
              {
                name: "aws-small.png",
                alt: "Company 07",
                width: 78,
                height: 47,
                icon: "w-[70px] h-[40px] md:w-[78px] md:h-[47px]",
              },
            ].map((image, key) => {
              return (
                <Image
                  key={key}
                  alt={image.alt}
                  src={`/imagens/home/companies/${image.name}`}
                  width={image.width}
                  height={image.height}
                  className={cn(image.icon, {
                    "hidden md:block": key > 5,
                  })}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
