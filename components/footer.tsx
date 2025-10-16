import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

import coursesData from "@/public/json/courses.json";

export default function SectionFooter() {
  return (
    <footer className="pt-12 pb-24 bg-[#f7f9fb]">
      <div className="flex flex-col container">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-[#0a1d38] font-medium">Cursos Online</p>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              {coursesData.map((course, key) => {
                return (
                  <div key={key} className="flex flex-col gap-1">
                    <p className="text-sm text-[#0a1d38] font-medium leading-[170%]">
                      {course.category}
                    </p>

                    {course?.courses?.map((link, key) => {
                      return (
                        <div key={key} className="flex flex-col gap-1">
                          <Link
                            href="#"
                            className="text-[13px] text-[#0a1d38]/80 leading-[170%] hover:underline"
                          >
                            {link.name}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-12">
              {[
                {
                  category: "Para Empresas",
                  courses: [
                    { name: "Educação Corporativa" },
                    { name: "Treinamentos Personalizados" },
                    { name: "Clientes" },
                  ],
                },
                {
                  category: "Comunidade",
                  courses: [
                    { name: "Histórias de Sucesso" },
                    { name: "Mentores" },
                    { name: "Clientes" },
                  ],
                },
                {
                  category: "Institucional",
                  courses: [
                    { name: "Fale Conosco" },
                    { name: "Blog" },
                    { name: "Sobre Nós" },
                  ],
                },
              ].map((course, key) => {
                return (
                  <div key={key} className="flex flex-col gap-1">
                    <p className="text-base text-[#0a1d38] font-medium leading-[170%]">
                      {course.category}
                    </p>

                    {course?.courses?.map((link, key) => {
                      return (
                        <div key={key} className="flex flex-col gap-1">
                          <Link
                            href="#"
                            className="text-[13px] text-[#0a1d38]/80 leading-[170%] hover:underline"
                          >
                            {link.name}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <hr className="border-[#0a1d380d]" />
          <div className="flex justify-between flex-wrap gap-8">
            <div className="flex flex-col flex-wrap gap-8">
              <div className="flex flex-col">
                <Link href="https://fluency.io/br/?utm_source=awari&utm_medium=organic&utm_content=awari-logo-footer-site&utm_term=fluency-io">
                  <p className="text-xs text-[#788498] leading-[140%]">By</p>
                  <Image
                    alt="Hero"
                    src={`/fluency-logo.svg`}
                    width={120}
                    height={40}
                    className="min-w-[120px] w-[120px] min-h-[40px] h-[40px]"
                  />
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-[#8493ac] leading-[115%]">
                  © {dayjs().year()} Awari Atividades de Ensino LTDA.
                </p>
                <p className="text-sm text-[#8493ac] leading-[115%]">
                  Todos os direitos reservados.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/termos-de-uso"
                    className="text-sm text-[#8493ac] leading-[115%] underline underline-offset-3"
                  >
                    Termos de Uso
                  </Link>
                  <Link
                    href="/politica-de-privacidade"
                    className="text-sm text-[#8493ac] leading-[115%] underline underline-offset-3"
                  >
                    Política de Privacidade
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/school/awari/">
                <Image
                  alt="Linkedin"
                  src={`/linkedin.svg`}
                  width={16}
                  height={16}
                  className="min-w-[16px] w-[16px] min-h-[16px] h-[16px]"
                />
              </Link>
              <Link href="https://www.instagram.com/awaribrasil/">
                <Image
                  alt="Instagram"
                  src={`/instagram.svg`}
                  width={18}
                  height={17}
                  className="min-w-[18px] w-[18px] min-h-[17px] h-[17px]"
                />
              </Link>
              <Link href="https://www.tiktok.com/@awaribrasil">
                <Image
                  alt="Tiktok"
                  src={`/tiktok.svg`}
                  width={16}
                  height={16}
                  className="min-w-[16px] w-[16px] min-h-[16px] h-[16px]"
                />
              </Link>
              <Link href="https://www.youtube.com/channel/UCAR9slmG1S94SWCY68A0lFg">
                <Image
                  alt="Youtube"
                  src={`/youtube.svg`}
                  width={25}
                  height={16}
                  className="min-w-[25px] w-[25px] min-h-[16px] h-[16px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
