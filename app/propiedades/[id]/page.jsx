import { notFound } from "next/navigation";
import propiedades from "../../../data/propiedades.json";
import PropertyCard from "../../../components/PropertyCard";

export default async function Page({ params }) {
  const { id } = await params;
  const propiedad = propiedades.find((p) => p.id === id);
  if (!propiedad) return notFound();
  return <PropertyCard propiedad={propiedad} />;
}
