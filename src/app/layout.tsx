import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Manejador de ingresos / egresos",
  description: "Manejador de ingresos / egresos",
};

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="es">
      <body className={nunitoSans.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
