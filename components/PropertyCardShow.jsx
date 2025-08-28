'use client'

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from 'next/image';

export default function PropertyCardShow({ propiedad }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  return (
    <div className="border rounded-xl overflow-hidden shadow-md">
      <Swiper
        style={{
          "--swiper-navigation-color": "#387fff",
          "--swiper-pagination-color": "#387fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="flex justify-center items-center align-items-center"
      >
        {propiedad.imagenes.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              width={500}
              height={300}
              src={img}
              alt={`${propiedad.titulo} imagen ${index + 1}`}
              className="cursor-pointer h-80 object-cover"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={0.2}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-4 rounded-md"
      >
        {propiedad.imagenes.map((img, index) => (
          <SwiperSlide key={"thumb-" + index} className="cursor-pointer rounded-md mr-4 ml-2">
            <Image
              src={img}
              width={150}
              height={100}
              alt={`Thumbnail ${index + 1}`}
              className="object-cover rounded-md h-20"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Detalles */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#3680ff]">{propiedad.titulo}</h3>
        <p className="text-gray-600">📍 {propiedad.ubicacion}</p>
        {propiedad.precio ? <p className="text-lg font-bold mt-2">US$ {propiedad.precio}</p> : <p className="text-lg font-bold mt-2"> ARS$ {propiedad.precioPesos}</p>}
      </div>
    </div>
  );
}