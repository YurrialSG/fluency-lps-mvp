import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function SectionHero({
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="bg-hero-home bg-no-repeat bg-size-[100%_100%] rounded-b-4xl w-full min-w-full">
      <div className="flex flex-col container">
        <div className="flex">
          <div className="flex flex-col gap-6 pt-24 pb-20 md:py-28 justify-center">
            <div className="flex flex-col gap-3">
              <h1 className="text-[42px]/10 md:text-[62px] md:leading-14 max-w-[666px] text-white italic">
                A melhor plataforma <br className="flex sm:hidden" />
                <span className="text-5xl/12 md:text-[80px] md:leading-19 font-bold not-italic">
                  para aprender tecnologia no Brasil
                </span>
              </h1>
              <h2 className="text-lg leading-6 text-white max-w-[429px]">
                {subtitle}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild variant="white" className="px-8">
                <Link href="https://app.awari.com.br/candidatura">
                  Começar Agora
                </Link>
              </Button>
              <Button asChild variant="blue-light" className="px-8">
                <Link href="/cursos">Explorar cursos</Link>
              </Button>
            </div>
          </div>
          <div className="flex-col justify-end hidden md:flex">
            <Image
              alt="Hero"
              src="/imagens/home/hero.png"
              width={472}
              height={650}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
