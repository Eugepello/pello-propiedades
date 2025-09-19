"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { motion } from "framer-motion";
import { useForm } from '@formspree/react';
import {
  BedDouble,
  Bath,
  Car,
  Ruler,
  Home,
  Snowflake,
  Sun,
  Wifi,
  Building2,
  DoorOpen,
  HelpCircle,
  Scan,
  Leaf,
  WavesLadder,
  Clock,
  HouseIcon,
  
} from "lucide-react";

const iconosCaracteristicas = {
  dormitorios: BedDouble,
  baños: Bath,
  cochera: Car,
  superficie: Ruler,
  superficieCubierta: Scan,
  jardin: Leaf,
  piscina: WavesLadder,
  quincho: Home,
  tipo: Home,
  aire: Snowflake,
  calefacción: Sun,
  wifi: Wifi,
  edificio: Building2,
  ambientesSeparados: DoorOpen,
  default: HelpCircle,
  antiguedad: Clock,
  ambientes: HouseIcon
};


export default function PropertyCard({ propiedad }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID_CONTACTO);


  if (!propiedad || !propiedad.imagenes || propiedad.imagenes.length === 0) {
    return notFound();
  }

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentIndex(null);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? propiedad.imagenes.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === propiedad.imagenes.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className="border rounded-xl overflow-hidden shadow-md pt-35">

      {/* Swiper principal con altura fija y diseño uniforme */}
      <div className="max-w-2xl mx-auto h-[350px] md:h-[500px] relative overflow-hidden rounded-xl">
        <Swiper
          style={{
            "--swiper-navigation-color": "#387fff",
            "--swiper-pagination-color": "#387fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full h-full bg-gray-100"
        >
          {propiedad.imagenes.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                width={750}
                height={400}
                alt={`${propiedad.titulo} imagen ${index + 1}`}
                className="w-full h-full object-contain cursor-pointer rounded-md"
                loading="lazy"
                onClick={() => openModal(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      {/* Thumbnails */}
      <div className="w-full max-w-4xl mx-auto mt-8">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={6}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper p-2 rounded-md"
        >
          {propiedad.imagenes.map((img, index) => (
            <SwiperSlide key={"thumb-" + index} className="cursor-pointer rounded-md">
              <Image
                src={img}
                width={200}
                height={200}
                alt={`Thumbnail ${index + 1}`}
                className="object-cover rounded-md w-full h-15 md:h-26"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal con navegación */}
      {modalOpen && currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <Image
              src={propiedad.imagenes[currentIndex]}
              width={800}
              height={300}
              alt="Imagen expandida"
              className="max-w-[90vw] max-h-[100vh] rounded-lg shadow-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white text-black rounded-full px-3 py-1 text-sm shadow-md hover:bg-gray-200"
            >
              ✕
            </button>

            {/* Botón anterior */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-black px-3 py-2 rounded-full shadow"
            >
              ←
            </button>

            {/* Botón siguiente */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-black px-3 py-2 rounded-full shadow"
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* Detalles y formulario */}
      <div className="p-6 md:p-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Detalles de la propiedad */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold text-[#3680ff]">{propiedad.titulo}</h3>
          <p className="text-gray-600 mt-1">
            📍
            {propiedad.ubicacion}
          </p>
          <p className="text-lg font-bold mt-2">US$ {propiedad.precio}</p>

          {/* Características visuales */}
          <div className="mt-6 mb-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-200">
            {propiedad.caracteristicas?.map((caracteristica, i) => {
              const Icon = iconosCaracteristicas[caracteristica.tipo] || iconosCaracteristicas["default"];
              return (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  <Icon className="w-5 h-5 text-[#3680ff]" />
                  <span className="text-sm">{caracteristica.nombre}</span>
                </div>
              );
            })}
          </div>

          <p className='mt-8 leading-7'>{propiedad.descripcion}</p>

          <hr className='mt-6' />

          <div className='mt-8'>
            <h3 className="text-lg font-semibold text-gray-700">Ubicación de la propiedad</h3>
            <iframe
              src={propiedad.mapa}
              title="Ubicación de la propiedad"
              width="100%"
              height="350"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-md mt-4 md:w-150"
            ></iframe>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="p-6 rounded-xl shadow-md border border-gray-200 h-120">
          <div className="flex items-center gap-4 mb-4">
            <Image
              alt="avatar"
              src="https://res.cloudinary.com/eugepello/image/upload/v1744387533/LANDING%20ASSETS/favicon_qs9zjg.png"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h6 className="text-lg font-semibold text-gray-700 mb-0.5">Pello Propiedades</h6>
              <p className="text-sm text-gray-600 mb-0.5">1128722662</p>
              <p className="text-sm text-gray-600">pellopropiedades@gmail.com</p>
            </div>
          </div>

          {state.succeeded ? (
            <div className="text-green-600 font-medium bg-green-100 border border-green-200 rounded p-4 text-md animate-fade-in">
              ✅ ¡Gracias por tu consulta! Te responderemos a la brevedad.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nombre"
                required
                placeholder="Nombre y apellido..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3680ff]"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3680ff]"
              />
              <input
                type="text"
                name="telefono"
                required
                placeholder="Teléfono..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3680ff]"
              />
              <textarea
                name="mensaje"
                rows={4}
                placeholder="Mensaje..."
                required
                className="w-full px-4 py-2 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3680ff]"
                defaultValue={`Hola, me interesa la propiedad "${propiedad.titulo}" en ${propiedad.ubicacion}.`}
              />
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-[#3680ff] text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                {state.submitting ? "Enviando..." : "Enviar consulta"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Nota paraguas */}
      <div className="max-w-6xl mx-auto px-6 py-4 bg-gray-50 rounded-xl shadow-md mt-6 mb-16">
        <h3 className='italic bold text-black text-lg font-bold'>Nota:</h3>
        <p>
          La información gráfica y textual de esta propiedad es meramente informativa y no constituye una oferta contractual. Las medidas, superficies, precios y demás datos son aproximados y pueden estar sujetos a modificaciones sin previo aviso. Se recomienda verificar la información con la inmobiliaria antes de tomar cualquier decisión.
        </p>
      </div>
    </motion.div>
  );
}
