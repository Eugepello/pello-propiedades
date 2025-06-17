"use client";

import { useState } from "react";
import propiedades from "../../data/propiedades.json";
import { motion } from "framer-motion";
import Link from 'next/link';
import PropertyCardShow from '@/components/PropertyCardShow';

export default function PropiedadesPage() {
  const [filtros, setFiltros] = useState({
    operacion: "",
    tipo: "",
    ubicacion: "",
    ambientes: "",
    precioMax: "",
  });

  const handleChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const propiedadesFiltradas = propiedades.filter((p) => {
    const cumpleOperacion = filtros.operacion ? p.operacion === filtros.operacion : true;
    const cumpleTipo = filtros.tipo ? p.tipo === filtros.tipo : true;
    const cumpleUbicacion = filtros.ubicacion ? p.ubicacion.toLowerCase().includes(filtros.ubicacion.toLowerCase()) : true;
    const cumpleAmbientes = filtros.ambientes ? p.ambientes === filtros.ambientes : true;
    const cumplePrecio = filtros.precioMax ? parseInt(p.precio) <= parseInt(filtros.precioMax) : true;
    return cumpleOperacion && cumpleTipo && cumpleUbicacion && cumpleAmbientes && cumplePrecio;
  });

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
      className="p-24 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-[#003a9e] m-10 text-center">Todas las Propiedades</h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <select name="operacion" onChange={handleChange} className="p-2 border rounded-md text-gray-500">
          <option value="">Operación</option>
          <option value="Venta">Venta</option>
          <option value="Alquiler">Alquiler</option>
        </select>

        <select name="tipo" onChange={handleChange} className="p-2 border rounded-md text-gray-500">
          <option value="">Tipo</option>
          <option value="Casa">Casa</option>
          <option value="Departamento">Departamento</option>
          <option value="PH">PH</option>
          <option value="Local">Local</option>
          <option value="Terreno">Terreno</option>
          <option value="Oficina">Oficina</option>
          <option value="Cochera">Cochera</option>
          <option value="Campo">Campo</option>
        </select>

        <input
          name="ubicacion"
          type="text"
          placeholder="Ubicación"
          onChange={handleChange}
          className="p-2 border rounded-md text-gray-600"
        />

        <select name="ambientes" onChange={handleChange} className="p-2 border rounded-md text-gray-500">
          <option value="">Ambientes</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5+</option>
        </select>

        <input
          name="precioMax"
          type="number"
          placeholder="Precio máx"
          onChange={handleChange}
          className="p-2 border rounded-md text-gray-600"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {propiedadesFiltradas.map((propiedad) => (
          <Link key={propiedad.id} href={`/propiedades/${propiedad.id}`}>
            <PropertyCardShow key={propiedad.id} propiedad={propiedad} />
          </Link>
        ))}
      </div>

      {propiedadesFiltradas.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No se encontraron propiedades con esos filtros.</p>
      )}
    </motion.div>
  );
}
