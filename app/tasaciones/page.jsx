'use client';

import { useForm } from '@formspree/react';
import Link from 'next/link';

export default function TasacionesPage() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID_TASACION);

  if (state.succeeded) {
    return (
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mt-50 mb-5 italic">¡Gracias por tu solicitud!</h2>
        <p className="text-xl text-gray-700">
          Un miembro de <strong>Pello Propiedades</strong> se pondrá en contacto con vos a la brevedad.
        </p>
      </section>
    );
  }

  return (
    <main className="mt-20 container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-start">
      {/* Información de contacto */}
      <section>
        <h1 className="text-3xl font-semibold text-[#003a9e] mb-6">Solicitá tu tasación</h1>
        <p className="text-lg text-gray-700 mt-10">
          ¿Querés vender o alquilar? Completá el siguiente formulario y nuestro equipo se pondrá en contacto con vos a la brevedad.
        </p>

        <div className="mt-14 space-y-4 text-gray-700 text-[18px] leading-6">
          <p className="flex items-start mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin mr-3 text-[#387fFF]"><path d="M12 22s8-6.5 8-11a8 8 0 1 0-16 0c0 4.5 8 11 8 11z"/><circle cx="12" cy="11" r="3"/></svg>
            Av. Santa Fe 2824, Martinez.
          </p>

          <p className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-icon lucide-message-circle mr-3 mt-1 text-[#387fFF]"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            <Link href="https://wa.link/11c0l7" target="_blank" rel="noopener noreferrer" className="hover:text-[#387fFF] mt-1">11-2872-2662</Link>
          </p>

          <p className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-4 mt-1 text-[#387fFF] lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
            <Link className="mt-1 hover:text-[#387fFF]" href="mailto:pellopropiedades@gmail.com">pellopropiedades@gmail.com</Link>
          </p>

          <p className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 mt-1 text-[#387fFF] lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            <Link href="https://www.instagram.com/pellopropiedades/" target="_blank" rel="noopener noreferrer" className="hover:text-[#387fFF] mt-1">@PelloPropiedades</Link>
          </p>
        </div>
      </section>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 space-y-6">
        <div>
          <label className="block font-medium">Tipo de Operación</label>
          <select name="a-tipoDeOperacion" required className="mt-1 block w-full border text-gray-400 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3780FF]">
            <option value="">Seleccione...</option>
            <option value="Venta">Venta</option>
            <option value="Alquiler">Alquiler</option>
            <option value="Alquiler temporario">Alquiler temporario</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Tipo de Propiedad</label>
          <select name="b-tipoDePropiedad" required className="mt-1 block w-full border text-gray-400 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3780FF]">
            <option value="">Seleccione...</option>
            <option value="Departamento">Departamento</option>
            <option value="Casa">Casa</option>
            <option value="PH">PH</option>
            <option value="Oficina">Oficina</option>
            <option value="Local">Local</option>
            <option value="Terreno">Terreno o Lote</option>
            <option value="Cochera">Cochera</option>
            <option value="Quinta">Quinta</option>
            <option value="Galpon">Galpón</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Cantidad de Dormitorios</label>
          <select name="c-dormitorios" required className="mt-1 block w-full border text-gray-400 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3780FF]">
            <option value="">Seleccione...</option>
            {[1, 2, 3, 4, 5].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
            <option value="6+">6 o más</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Ubicación - Dirección</label>
          <input type="text" name="d-direccion" placeholder="Dirección..." required className="mt-1 block w-full border text-gray-400 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3780FF]" />
        </div>

        <div>
          <label className="block font-medium">Nombre</label>
          <input type="text" name="e-nombre" placeholder="Nombre..." required className="mt-1 block w-full border text-gray-400 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3780FF]" />
        </div>

        <div>
          <label className="block font-medium">Apellido</label>
          <input type="text" name="f-apellido" placeholder="Apellido..." required className="mt-1 block w-full border text-gray-400 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3780FF]" />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input type="email" name="g-email" placeholder="Email..." required className="mt-1 block w-full border text-gray-400 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3780FF]" />
        </div>

        <div>
          <label className="block font-medium">Teléfono</label>
          <input type="text" name="h-telefono" placeholder="Teléfono..." required className="mt-1 block w-full border text-gray-400 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3780FF]" />
        </div>

        <button type="submit" className="bg-[#387fFF] text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors w-30">
          Enviar
        </button>
      </form>
    </main>
  );
}
