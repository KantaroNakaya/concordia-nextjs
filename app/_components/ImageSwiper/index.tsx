"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import type { Room } from "@/app/_libs/microcms";

// Swiperのスタイルをインポート
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

type ImageSwiperProps = {
    rooms: Room[];
};

export default function ImageSwiper({ rooms }: ImageSwiperProps) {
    return (
        <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            effect="fade"
        >
            {rooms.map((room, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={room.image.url}
                        alt={room.name}
                        style={{ width: "100%", height: "auto" }}
                        width={500}
                        height={281}
                        loading="lazy"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
