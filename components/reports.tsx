import SectionTitle from "./title";
import SectionSubtitle from "./subtitle";
import { Button } from "./ui/button";
import Link from "next/link";
import SectionReportsDesktop from "./sections/reports/desktop";
import SectionReportsMobile from "./sections/reports/mobile";

export default function SectionReports() {
  return (
    <section className="bg-[#253c5e] py-10 overflow-clip">
      <div className="flex flex-col container">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <SectionTitle className="text-white max-w-[645px]">
                Confira relatos de quem já decolou sua carreira com a Awari
              </SectionTitle>
              <SectionSubtitle className="text-white max-w-[521px] opacity-80">
                Inspire-se com nossas histórias de sucesso. Tenha acesso a uma
                rede de profissionais de destaque no mercado e eventos
                exclusivos, onde você pode se desenvolver, fazer networking e
                expandir seus conhecimentos.
              </SectionSubtitle>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild variant="white-black" className="px-8">
                <Link href="#">Começar Agora</Link>
              </Button>
              <Button asChild variant="blue-light" className="px-8">
                <Link href="/historias-de-sucesso">Explorar depoimentos</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <SectionReportsDesktop />
          </div>
          <div className="block md:hidden">
            <SectionReportsMobile />
          </div>
        </div>
      </div>
    </section>
  );
}
