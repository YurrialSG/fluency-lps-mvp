import SectionTitle from "./title";
import SectionSubtitle from "./subtitle";
import { Button } from "./ui/button";
import Link from "next/link";
import SectionMentorsDesktop from "./sections/mentors/desktop";
import SectionMentorsMobile from "./sections/mentors/mobile";

export default function SectionMentors() {
  return (
    <section className="bg-[#f6f8ff] py-10 overflow-clip">
      <div className="flex flex-col container">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <SectionTitle className="text-[#0a1d38] max-w-[467px]">
                Maior time de mentores do mercado brasileiro
              </SectionTitle>
              <SectionSubtitle className="text-[#626e80] max-w-[508px] opacity-80">
                Aprenda com os melhores. Nosso time de mentores conta com
                centenas de profissionais especializados em diversas áreas,
                prontos para orientar a sua jornada de aprendizado e
                desenvolvimento.
              </SectionSubtitle>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild variant="black" className="px-8">
                <Link href="#">Começar Agora</Link>
              </Button>
              <Button asChild variant="gray" className="px-8">
                <Link href="/mentores">Explorar mentores</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <SectionMentorsDesktop />
          </div>
          <div className="block md:hidden">
            <SectionMentorsMobile />
          </div>
        </div>
      </div>
    </section>
  );
}
