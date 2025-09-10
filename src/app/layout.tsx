import type { Metadata } from "next";
import "./globals.css";
import { AosInit } from "./_components/aos-init";
import ScrollToTop from "./_components/scrollToTop";

export const metadata: Metadata = {
  title: "Pets",
  description: "cuide do seu pet da melhor forma seja, gato, cachorro ou qualquer outro",
  authors: [{name: 'Luiz antônio', url: 'https://github.com/luizcod3'}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <ScrollToTop />
        <AosInit/>
        {children}
       
      </body>
    </html>
  );
}
