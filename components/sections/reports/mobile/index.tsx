"use client";

import reportsData from "@/public/json/reports.json";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SectionReportsMobile() {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative w-full max-w-[1110px]">
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        centeredSlides={false}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        speed={800}
        autoHeight={false}
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
        {reportsData.Default.map((card, key) => {
          return (
            <SwiperSlide key={key}>
              <div
                key={key}
                className="
                      relative p-[2px] rounded-md mb-2
                      before:absolute before:inset-0 before:rounded-md
                      before:bg-gradient-to-b before:from-[#0a1d38] before:to-[#1673fa]
                      before:opacity-0 hover:before:opacity-100
                      before:transition-opacity before:duration-700
                      transition-all duration-700
                    "
              >
                <div className="relative z-[1] w-full lg:max-w-[246px] min-h-[320px] bg-[#0a1d38] rounded-md pt-7 pb-5 pr-4 pl-6">
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
            </SwiperSlide>
          );
        })}

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
