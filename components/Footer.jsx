import {
  MapPin,
  Mail,
  Phone,
  Instagram
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-t-slate-400 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-600">
        
        {/* Logo y descripción */}
        <div>
          <h2 className="text-2xl font-bold text-[#3780FF] mb-2">Pello Propiedades</h2>
          <p>El hogar que merecés, con el respaldo que necesitás.</p>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">Enlaces</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[#3780FF]">Inicio</Link></li>
            <li><Link href="/propiedades" className="hover:text-[#3780FF]">Propiedades</Link></li>
            <li><Link href="/tasaciones" className="hover:text-[#3780FF]">Tasaciones</Link></li>
            <li><Link href="/nosotros" className="hover:text-[#3780FF]">Nosotros</Link></li>
            <li><Link href="/contacto" className="hover:text-[#3780FF]">Contacto</Link></li>
          </ul>
        </div>

        {/* Información de contacto */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">Contacto</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1 text-[#3780FF]" />
              <span>Av. Sta Fe 2824, Martínez, Buenos Aires, Argentina</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-1 text-[#3780FF]" />
              <span>pellopropiedades@gmail.com</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-1 text-[#3780FF]" />
              <span>+54 9 11 2872-2662</span>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">Seguinos</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              {/* <WhatsApp className="w-5 h-5 text-[#3780FF] hover:scale-110 transition" /> */}
            </a>
            <a href="https://www.instagram.com/pellopropiedades/" target="_blank" rel="noreferrer">
              <Instagram className="w-5 h-5 text-[#3780FF] hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-4 border-t">
        © {new Date().getFullYear()} Pello Propiedades. Todos los derechos reservados.
      </div>
    </footer>
  );
}
