import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Lexend } from "next/font/google";

const lexend = Lexend ({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Pello Propiedades",
  description: "El hogar que merecés, con el respaldo que necesitás.",
  favicon: "./favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${lexend.variable}`}>
      <body cz-shortcut-listen="true">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
