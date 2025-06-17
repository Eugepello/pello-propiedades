"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function NosotrosPage() {
  return (
    <>
      <section className="pt-24 pb-12 flat-section bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#003a9e] mb-6 mt-10">
              Nuestra Historia
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Somos <strong>Pello Propiedades</strong>, una empresa familiar con más de 25 años de
              trayectoria y una profunda vocación en el rubro inmobiliario. Desde nuestra fundación, hemos crecido con el compromiso de brindar un asesoramiento cercano, profesional y personalizado a cada cliente. Creemos en la importancia de la confianza y el trato humano en cada operación, acompañando a quienes confían en nosotros en cada paso de su camino.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Nos especializamos en servicios inmobiliarios en Zona Norte, siempre en la búsqueda de la excelencia, innovando y mejorando nuestros procesos para ofrecerte la mejor experiencia.
            </p>
            <Link
              href="/contacto"
              className="inline-block mt-4 px-8 py-3 bg-[#3780FF] text-white rounded-full shadow-md hover:bg-[#2e6ede] transition"
            >
              Contactanos
            </Link>
          </motion.div>

          {/* Imagen principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="https://res.cloudinary.com/eugepello/image/upload/v1744673431/LANDING%20ASSETS/colgante-puerta-logo_alrv2l.png"
              alt="Oficina inmobiliaria"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
            {/* Imagen secundaria superpuesta */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 w-40 h-40 rounded-xl overflow-hidden shadow-xl hidden md:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1722487631997-cf1e0f92c2c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Llaves en mano"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Firma y datos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-gray-700 mb-1">Walter Esteban Pello</p>
          <p className="text-sm text-gray-500">Fundador y Martillero Público</p>
        </motion.div>
      </section>

      {/* SECCIÓN DE BENEFICIOS */}

      <section className="py-20 bg-white ">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* TEXTO A LA DERECHA */}
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-wide">
              Nuestros Beneficios
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Qué nos diferencia en el mercado inmobiliario
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              En Pello Propiedades sabemos que elegir un hogar es una de las decisiones más importantes, te brindamos la seguridad y el respaldo que merecés en cada paso del camino. <strong>Tu hogar, tu inversión, tu tranquilidad.</strong><br />
              Por eso, ofrecemos una amplia gama de servicios para que tu experiencia sea completa y satisfactoria:
              <br /><br />
              Redes Sociales (<strong>Instagram, Facebook, Tik Tok, Whatsapp</strong>);
              Campañas en portales Inmobiliarios líderes (<strong>ZonaProp, ArgenProp, Mercado Libre inmuebles, etc.</strong>);
              Tasaciones <strong>precisas y actualizadas</strong>;
              Publicidad <strong>efectiva y profesional</strong> de tu propiedad;
              Publicaciones en <strong>nuestro sitio web</strong>, personalizadas para cada propiedad;
              <strong>Google Ads;
              Renderizado 3d;
              Videos Promocionales;
              Fotografía Profesional</strong>; entre otros servicios.
            </p>

            <div className="space-y-6">
              {/* Beneficio 1 */}
              <Link href="/propiedades" className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-blue-50 rounded-xl shadow transition">
                <div className="text-blue-600 text-3xl">🏠</div>
                <div>
                  <h4 className="text-lg font-semibold">Comprá una Propiedad</h4>
                  <p className="text-sm text-gray-600">
                    Explorá una amplia variedad de inmuebles con asesoramiento experto para una compra segura y eficiente.
                  </p>
                </div>
              </Link>

              {/* Beneficio 2 */}
              <Link href="/propiedades" className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-blue-50 rounded-xl shadow transition">
                <div className="text-blue-600 text-3xl">🔑</div>
                <div>
                  <h4 className="text-lg font-semibold">Alquilá una Propiedad</h4>
                  <p className="text-sm text-gray-600">
                    Encontrá opciones que se adapten a tu estilo de vida con la seguridad de profesionales del sector.
                  </p>
                </div>
              </Link>

              {/* Beneficio 3 */}
              <Link href="/tasaciones" className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-blue-50 rounded-xl shadow transition">
                <div className="text-blue-600 text-3xl">📈</div>
                <div>
                  <h4 className="text-lg font-semibold">Vendé tu Propiedad</h4>
                  <p className="text-sm text-gray-600">
                    Destacamos los mejores atributos de tu propiedad para lograr una venta rápida y efectiva.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* IMÁGENES A LA IZQUIERDA */}
          <div className="grid md:grid-cols-2 gap-4 relative">
            <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden shadow-md">
                <Image
                  src="https://res.cloudinary.com/eugepello/image/upload/v1748978851/LANDING%20ASSETS/AI_Designer-Real_scene_hotel_and_B_B_door_handle_sign_vi_logo_mockup_renderings_mxh04r.png"
                  alt="Experiencia"
                  width={500}
                  height={400}
                  className="object-cover w-full h-63"
                />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-3 py-1 rounded text-sm font-medium text-gray-800 flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  Experiencia Comprobada
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Conocimiento Local"
                  width={500}
                  height={400}
                  className="object-cover w-full h-63"
                />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-3 py-1 rounded text-sm font-medium text-gray-800 flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  Conocimiento del Mercado Local
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Conocimiento Local"
                  width={500}
                  height={400}
                  className="object-cover w-full h-63"
                />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-3 py-1 rounded text-sm font-medium text-gray-800 flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  Asesoramiento Personalizado
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg col-span-1 row-span-2">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Soluciones Personalizadas"
                width={500}
                height={800}
                className="object-cover w-full md:h-full"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-3 py-1 rounded text-sm font-medium text-gray-800 flex items-center gap-2 mb-2">
                <CheckCircle size={16} className="text-green-500" />
                Soluciones Prácticas
              </div>
              <div className="absolute bottom-14 left-4 bg-white bg-opacity-80 px-3 py-1 rounded text-sm font-medium text-gray-800 flex items-center gap-2 sm:mt-10">
                <CheckCircle size={16} className="text-green-500" />
                Asociaciones Transparentes
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
