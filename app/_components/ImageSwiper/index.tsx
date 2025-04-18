"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,EffectFade } from "swiper/modules";
import Image from "next/image";

// Swiperのスタイルをインポート
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
type ImageSwiperProps = {
    images: {
        src: string;
        alt: string;
    }[];
};

export default function ImageSwiper({ images }: ImageSwiperProps) {
    return (
        <Swiper
            modules={[ Autoplay, EffectFade ]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            effect="fade"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={image.src}
                        alt={image.alt}
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
