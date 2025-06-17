'use client';
import React from 'react';
import { useForm } from "@formspree/react";
import Link from 'next/link';

export default function ContactoPage() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID_CONTACTO);

  const fontSize = {
    fontSize: "25px",
    lineHeight: '25px',
  }

  if (state.succeeded) {
    return (
      <div className='container mt-80 mx-auto px-4 py-16'>
        <h4 className='text-black text-center font-semibold' style={fontSize}>
          ¡Gracias por contactarnos! <br /> Un miembro de Pello Propiedades se pondrá en contacto con vos a la brevedad.
        </h4>
      </div>
    )
  }

  return (
    <div className="mt-14 container mx-auto px-4 py-16 grid md:grid-cols-2 gap-16 items-start">
      {/* IZQUIERDA: Información de contacto */}
      <div>
        <h2 className="text-3xl font-semibold text-[#003a9e]">¡Contactanos!</h2>
        <p className="mt-6 text-lg text-gray-700">
          Completá el siguiente formulario y un miembro de Pello Propiedades se pondrá en contacto con vos a la brevedad.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-700">Otros canales de contacto</h3>

        <div className="mt-4 space-y-4 text-gray-700 text-[18px] leading-6">
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

        <div className='mt-8'>
          <h3 className="text-xl font-semibold text-gray-700">Nuestra ubicación</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31511.123456789012!2d-58.50000000000001!3d-34.50000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca1234567890%3A0x1234567890abcdef!2sAv.%20Santa%20Fe%202824%2C%20Martinez%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sus!4v1612345678901"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-md mt-4"
          ></iframe>

        </div>
    </div>

  {/* DERECHA: Formulario */}
    <div>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 space-y-6 mt-10">
        <div>
          <label htmlFor="first-name" className="block text-sm font-semibold text-gray-700">Nombre</label>
          <input
            type="text"
            id="first-name"
            name="a-nombre"
            required
            placeholder="Nombre..."
            className="mt-1 block w-full border text-gray-400 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3780FF]"
          />
        </div>

        <div>
          <label htmlFor="last-name" className="block text-sm font-semibold text-gray-700">Apellido</label>
          <input
            type="text"
            id="last-name"
            name="b-apellido"
            required
            placeholder="Apellido..."
            className="mt-1 block w-full border text-gray-400 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3780FF]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="c-email"
            required
            placeholder="Email..."
            className="mt-1 block w-full border text-gray-400 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3780FF]"
          />
        </div>

        <div>
          <label htmlFor="number" className="block text-sm font-semibold text-gray-700">Teléfono</label>
          <input
            type="text"
            id="number"
            name="d-telefono"
            required
            placeholder="Teléfono..."
            className="mt-1 block w-full border text-gray-400 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3780FF]"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Mensaje</label>
          <textarea
            id="message"
            name="e-mensaje"
            required
            rows="5"
            placeholder="Escribinos tu consulta..."
            className="mt-1 block w-full border text-gray-400 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3780FF]"
          />
        </div>

        <button
          type="submit"
          className="bg-[#387fFF] text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors w-30"
        >
          Enviar
        </button>
      </form>
    </div>
  </div>

  );
}
