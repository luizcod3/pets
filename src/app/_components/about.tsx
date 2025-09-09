import Image from "next/image";
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";


export function About (){
    return (
        <section className="bg-amber-50 py-16">
        <div className="container px-4 mx-auto ">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> 

                <div className="relative" data-aos="fade-up">
                    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                        <Image src={about1Img} alt="foto de um gato e um cachorro" fill quality={100} priority className="object-cover hover:scale-110 duration-300"/>
                    </div>

                    <div className="absolute w-40 h-40 right-4 bottom-0 rounded-lg border-4 overflow-hidden ">
                        <Image src={about2Img} alt="foto de um gatinho laranja" fill quality={100} priority />
                    </div>
                </div>

                <div className="space-y-6 mt-10" data-aos="fade-right">

                    <h2 className="text-4xl font-bold">SOBRE</h2>

                    <p> 
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Ipsum quibusdam tempora corrupti eveniet ab ratione odit 
                        quasi illum magnam, assumenda harum quas dicta officiis 
                        incidunt rerum deserunt repellendus quos magni!
                    </p>

                    <ul className="space-y-4">
                        {/*flex items-center centraliza os itens deixando um do lado do outro*/}
                        <li className="flex items-center gap-2"><Check className="text-red-600"/>Aberto desde 2006</li>
                        <li className="flex items-center gap-2"><Check className="text-red-600"/>Equipe com mais de 10 veterinários</li>
                        <li className="flex items-center gap-2"><Check className="text-red-600"/>Qualidade é nossa prioridade</li>
                    </ul>

                <div className="flex gap-2" data-aos="fade-up" data-aos-delay="800">

                    <a href={`https://wa.me/?text=Olá vim pelo site e gostaria de mais informações`} target='_blank' className="bg-amber-600 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                        <WhatsappLogoIcon className="w-5 h-5 text-white"/>
                        Contato via WhatsApp
                    </a>

                    <a href="#" className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                        <MapPin className="w-5 h-5 text-black" />
                        Endereço da loja
                    </a>
                </div>

                </div>

            </div>
        </div>
        </section>
    );
}