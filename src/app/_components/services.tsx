"use client"
import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock} from 'lucide-react'
import { WhatsappLogoIcon } from '@phosphor-icons/react';

const services = [
    {
        title: " Banho & tosa",
        description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada",
        duration: "1h",
        price:"R$:50,00",
        icon: <Scissors />,
        linkText: 'Olá, vi no site sobre banho e tosa e gostaria de mais informações.'
    },
    {
        title: "Consulta Veterinária",
        description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal.",
        duration: "1h",
        price: "R$:39,99",
        icon: <Syringe />,
        linkText: "Olá, vi no site sobre a consulta veterinária e gostaria de mais informações"
    },
    {
        title: "Táxi Pet",
        description: "Serviço de transporte para levar e buscar seu pet, tanto em consultas ou outros locais. Ideal para quem não tem tempo ou transporte adequado para os pets.",
        duration: "2h",
        price: "R$: 80,00",
        icon: <CarTaxiFront />,
        linkText: "Olá, vi no site que vocês tem o serviço de táxi pet e queria saber mais..."
    },
    {
        title: "Hotel Pet",
        description: "Serviço de hospedagem de pets",
        duration: "12h",
        price: "R$: 150,00",
        icon: <Hotel />,
        linkText: "Olá, vi que no site existe o serviço de hotel para o meu pet e queria saber mais..."
    }

]

export function Services (){

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1, breakpoints:{ "(min-width: 768px)": {slidesToScroll: 3}}

    })

    function scrollPrev(){
        emblaApi?.scrollPrev();
    }
    function scrollnext(){
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-16">
            <div className=" container mx-auto px-4">
                
                <h2 className="text-4xl font-bold mb-12" data-aos="fade-right">Serviços</h2>

                <div className="relative">
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>{services.map((item, index)=>(
                                <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3' data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-out-cubic">
                                    <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                        <div className='flex-1 flex items-start justify-between'>

                                            <div className='flex gap-2'>
                                                <span className='text-3xl'>{item.icon}</span>
                                            </div>
                                            <div>
                                                <h3 className='font-bold text-xl mb-1'>{item.title}</h3>
                                                <p className='text-gray-400 text-sm select-none'>{item.description}</p>
                                            </div>

                                        </div>

                                        <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                            <div className='flex items-center gap-2 text-sm'>
                                                <Clock className='w-4 h-4'/><span>{item.duration}</span>
                                            </div>

                                            <a href={`https://wa.me/?text=Olá vim pelo site e gostaria de mais informações sobre ${item.title}`} target='_blank' className="flex items-center justify-center gap-2 hover:bg-red-400 px-4 py-1 rounded-md duration-300"> <WhatsappLogoIcon className='w-5 h-5'/>Entrar em contato</a>

                                        </div>

                                    </article>
                                </div>
                        ))}</div>
                    </div>

                    <button onClick={scrollPrev} className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'><ChevronLeft className='w-6 h-6 text-gray-600'/></button>

                    <button onClick={scrollnext} className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-5 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'><ChevronRight className='w-6 h-6 text-gray-600'/></button>

                </div>
                
            </div>
        </section>
    );
}