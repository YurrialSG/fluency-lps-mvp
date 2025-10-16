"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Course {
  id: number;
  slug: string;
  cardTitle: string;
  cardDescription: string;
  url: string;
}

export default function CourseSlider({ courses }: { courses: Course[] }) {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative w-full max-w-[1110px]">
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={15}
        slidesPerGroup={1}
        centeredSlides={false}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoHeight={true}
        watchSlidesProgress={true}
        slideToClickedSlide={true}
        grabCursor={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        onInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean" &&
            prevRef.current &&
            nextRef.current
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;

            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        className="z-0 h-full min-h-[360px] w-full !overflow-visible"
      >
        {courses.map((course, key) => (
          <SwiperSlide key={key} className="max-w-[360px]">
            <Link
              href={course?.url || "#"}
              className="flex flex-col p-6 bg-white rounded-md w-full max-w-[360px] min-h-[360px] justify-between gap-4 shadow hover:shadow-md transition-shadow duration-500"
            >
              <div className="flex flex-col gap-2">
                <Image
                  alt="Imagem do curso"
                  src={`https://assets-app.awari.com.br/card-${course.slug}.png`}
                  width={38}
                  height={38}
                  className="w-10 min-w-10 min-h-10 object-contain"
                />
                <p className="text-2xl text-[#0a1d38] font-bold leading-7">
                  {course.cardTitle}
                </p>
                <p className="text-lg text-[#0a1d38] leading-[135%] line-clamp-4">
                  {course.cardDescription}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="default" className="px-8 h-10">
                  Saiba mais
                </Button>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div className="hidden lg:flex w-full gap-4 justify-between mt-4">
          <div
            ref={prevRef}
            className="cursor-pointer swiper-button-prev-courses relative flex items-center justify-center after:hidden w-8 h-8 bg-white rounded-full z-10 pointer-events-auto"
          >
            <ArrowLeft className="w-[24px] h-[24px] text-[#1673fa]" />
          </div>

          <div
            ref={nextRef}
            className="cursor-pointer swiper-button-next-courses relative flex items-center justify-center after:hidden w-8 h-8 bg-white rounded-full z-10 pointer-events-auto"
          >
            <ArrowRight className="w-[24px] h-[24px] text-[#1673fa]" />
          </div>
        </div>
      </Swiper>
    </div>
  );
}
