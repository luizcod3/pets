"use client"

import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

export function AosInit() {
    useEffect(() => {
    // Aguarda a hidratação terminar e mais 100ms antes de iniciar o AOS
    const timeout = setTimeout(() => {
      Aos.init({
        once: true, // anima só na primeira vez
        duration: 800, // duração padrão
        easing: "ease-out-cubic",
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
