"use client";

import mentorsData from "@/public/json/mentors.json";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SectionMentorsMobile() {
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
        {mentorsData.Default.map((card, key) => {
          return (
            <SwiperSlide key={key}>
              <div
                key={key}
                className="inline-block w-full lg:max-w-[260px] justify-start items-start min-h-[320px] border border-white hover:border-[#dfe1f0] bg-white pt-7 pb-5 pr-4 pl-6 rounded-md mb-2 transition-all duration-500"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col relative w-[70px]">
                      <Image
                        alt="Hero"
                        src={`/imagens/home/mentors/${card.image}.png`}
                        width={70}
                        height={70}
                        className=" w-[70px] min-w-[70px] h-[70px] min-h-[70px] rounded-full"
                      />
                      <div className="border absolute -bottom-1 rounded-full -right-1 border-white/10 shadow">
                        <Image
                          alt="Hero"
                          src={`/imagens/home/mentors/${card.company}.png`}
                          width={30}
                          height={30}
                          className=" w-[30px] min-w-[30px] h-[30px] min-h-[30px] rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-xl text-[#0a1d38] font-medium">
                        {card.name}
                      </h4>
                      <p className="text-sm text-[#0a1d38] leading-[137%]">
                        {card.job}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[#0a1d38]/60 leading-[145%]">
                    {card.description}
                  </p>
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
