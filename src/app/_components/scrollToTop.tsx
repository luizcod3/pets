//este e um componente para quando a pagina receber um refresh volte ao topo como se fosse uma page comum
'use client'

import { useEffect } from "react";

export default function ScrollToTop() {
    useEffect(() => {
        window.scrollTo(0,0);
    },[]);

    return null;
}