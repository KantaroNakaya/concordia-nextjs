"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import Image from "next/image";

// Swiperのスタイルをインポート
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

type ImageSwiperProps = {
    images: {
        src: string;
        alt: string;
    }[];
};

export default function ImageSwiper({ images }: ImageSwiperProps) {
    return (
        <Swiper
            modules={[Navigation, Scrollbar]}
            navigation
            scrollbar={{ draggable: true }}
            spaceBetween={30}
            slidesPerView={1}
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
