import propiedades from "../data/propiedades.json";
import Hero from "../components/Hero";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import PropertyCardShow from '@/components/PropertyCardShow';

export default function HomePage() {
  const propiedadesDestacadas = propiedades.slice(0, 3); // Mostramos las 3 primeras como destacadas

  return (
    <div>
      <Hero />
      <h1 className="text-3xl font-bold text-[#003a9e] mt-20 mb-12 text-center">
        Propiedades Destacadas
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl w-full mx-auto items-center">
        {propiedadesDestacadas.map((propiedad) => (
          <Link key={propiedad.id} href={`/propiedades/${propiedad.id}`}>
            <PropertyCardShow key={propiedad.id} propiedad={propiedad} />
          </Link>
        ))}
        <Link href="/propiedades" className='col-span-1 md:col-span-4 flex justify-center'>
          <button
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
            className="mt-10 bg-[#387fFF] text-white px-6 py-3 rounded-lg hover:bg-[#2c5bbf] transition duration-300"
          >
            Ver más
            <span className="ml-2">→</span>
          </button>
        </Link>
      </div>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,128L48,122.7C96,117,192,107,288,96C384,85,480,75,576,90.7C672,107,768,149,864,176C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

      {/* Sección de Beneficios */}
      <section className="bg-[#F3F4F5] pb-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* IMÁGENES A LA IZQUIERDA */}
          <div className="grid grid-cols-2 gap-4 relative">
          <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
                alt="Experiencia"
                width={500}
                height={400}
                className="object-cover w-full h-64"
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
                className="object-cover w-full h-64"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-3 py-1 rounded text-sm font-medium text-gray-800 flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Conocimiento del Mercado Local
              </div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg col-span-1 row-span-2">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Soluciones Personalizadas"
              width={500}
              height={800}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-3 py-1 rounded text-sm font-medium text-gray-800 flex items-center gap-2 mb-2">
              <CheckCircle size={16} className="text-green-500" />
              Soluciones Personalizadas
            </div>
            <div className="absolute bottom-14 left-4 bg-white bg-opacity-80 px-3 py-1 rounded text-sm font-medium text-gray-800 flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Asociaciones Transparentes
            </div>
          </div>
        </div>

          {/* TEXTO A LA DERECHA */}
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">
              Nuestros Beneficios
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Qué nos diferencia en el mercado inmobiliario
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              En Pello Propiedades, no solo te ayudamos a vender, comprar o alquilar, sino que te acompañamos en cada decisión con el compromiso y la dedicación que nos caracteriza. <br /><br />
              Porque sabemos que elegir un hogar es una de las decisiones más importantes, te brindamos la seguridad y el respaldo que merecés en cada paso del camino. <strong>Tu hogar, tu inversión, tu tranquilidad.</strong>
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
        </div>
      </section>
    </div>
  );
}
