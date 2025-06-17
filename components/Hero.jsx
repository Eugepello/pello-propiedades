'use client'
import { ContainerTextFlip } from "../components/ContainerTextFlip";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <div>
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
        style={{
          height: "100vh",
          width: "100%",
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('https://res.cloudinary.com/eugepello/image/upload/v1748386857/LANDING%20ASSETS/living-room-scandinavian-interior-design_1_tcqiso.jpg')",
          backgroundSize: "cover",
          backgroundPosition: '50% 75%',
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className='text-5xl text-center font-bold text-white'>Encontrá el hogar <ContainerTextFlip words={["ideal", "perfecto", "soñado"]} />,<br /> con el respaldo que necesitás.</h1>
      </motion.div>

      
    </div>
  );
}