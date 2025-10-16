import { Button } from "@/components/ui/button";
import { APP_LINKS } from "@/constants/app-links";
import { redis } from "@/lib/redis";
import Link from "next/link";
import coursesDataJson from "@/public/json/courses.json";
import CourseSlider from "./_components/course-slider";
import SectionTitle from "../../title";
import SectionSubtitle from "../../subtitle";

interface Course {
  alias: number;
  title: string;
  courses: Array<{
    id: number;
    verticalId: number;
    description: string;
    slug: string;
    alias: string;
    level: string;
    duration: number;
    releaseAt: Date;
    free: boolean;
    contentType: string;
    cardTitle: string;
    cardDescription: string;
    url: string;
    blocked: boolean;
  }>;
}

type CourseJson = {
  id?: number;
  name: string;
  description: string;
};

type CategoryJson = {
  category: string;
  icon: string;
  courses: CourseJson[];
};

export default async function SectionCourses() {
  const data = await redis.get("courses:all");
  const courses: Course[] = data ? JSON.parse(data) : [];

  const coursesData = coursesDataJson as CategoryJson[];

  const courseIds = coursesData.flatMap((category) =>
    category.courses
      .filter(
        (course): course is CourseJson & { id: number } =>
          course.id !== undefined
      )
      .map((course) => course.id)
  );

  const coursesById = new Map<number, Course["courses"][0]>();
  courses.forEach((category) => {
    category.courses.forEach((course) => {
      coursesById.set(course.id, course);
    });
  });

  const selectedCourses = courseIds
    .map((id) => coursesById.get(id))
    .filter(Boolean) as Course["courses"][0][];

  return (
    <section className="bg-[#ecf1f7] py-10 overflow-clip">
      <div className="flex flex-col container">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <SectionTitle className="text-[#0a1d38] max-w-[741px]">
                Cursos mais procurados
              </SectionTitle>
              <SectionSubtitle className="text-[#626e80] max-w-[521px] opacity-80">
                Confira os preferidos dos nossos alunos e não perca a chance de
                se desenvolver nas habilidades mais requisitadas pelo mercado.
                Invista no seu futuro e impulsione a sua carreira.
              </SectionSubtitle>
            </div>
            <div className="flex gap-2">
              <Button asChild variant="black" className="px-8">
                <Link href={APP_LINKS.COMECAR_AGORA}>Começar Agora</Link>
              </Button>
              <Button asChild variant="gray" className="px-8">
                <Link href="/cursos">Ver todos os cursos</Link>
              </Button>
            </div>
          </div>

          <CourseSlider courses={selectedCourses} />
        </div>
      </div>
    </section>
  );
}
