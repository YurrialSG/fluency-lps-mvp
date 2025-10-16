import SectionTitle from "./title";
import SectionSubtitle from "./subtitle";

export default function SectionMethodology() {
  return (
    <section className="bg-[#eef1f8] py-10">
      <div className="flex flex-col container">
        <div className="flex flex-col gap-4">
          <SectionTitle className="text-[#1673fa] max-w-[530px]">
            Conheça nossa metodologia inovadora
          </SectionTitle>
          <SectionSubtitle className="text-[#626e80] max-w-[518px]">
            É hora de dar tchau para os velhos métodos de aprendizagem. Nós
            desenvolvemos uma metodologia inovadora para decolar sua carreira
            com cursos flexíveis, temas relevantes e ensino individualizado.
          </SectionSubtitle>
        </div>
      </div>
    </section>
  );
}
