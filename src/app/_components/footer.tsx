import royal from '../../../public/royal.png'
import golden from '../../../public/golden.png'
import primier from '../../../public/primier.png'
import natural from '../../../public/natural.png'
import whiskas from '../../../public/whiskas.png'
import Image from 'next/image'
import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react/dist/ssr'


const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primier", logo: primier },
    { name: "Formula Natural", logo: natural},
    { name: "Whiskas", logo: whiskas},
    { name: "Golden", logo: golden},
]
export function Footer () {
    return(
        <section className="bg-[#E84c3d] py-16 text-white">
            <div className='container mx-auto px-4'>
                <div className='border-b border-white/40 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center' data-aos="fade-up">As melhores marcas</h4>

                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
                        {brands.map((item, index) => (
                            <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'> 
                                <Image src={item.logo} alt={item.name} width={100} height={50} style={{width:"auto", height:"auto"}} className="object-contain" /> 
                            </div>

                        ))}
                    </div>
                </div>

                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'> {/*dentro desse footer vai ter uma grid com 3 colunas em tela grande
                e 2 na media e uma na tela pequena cada div aqui dentro vai ser uma coluna */}
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Pet Shop Dev</h3>
                        <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação</p>
                        <a href={`https://wa.me/?text=Olá vim pelo site e gostaria de mais informações`} target='_blank' className='bg-green-500 px-4 py-2 rounded-md'>Contato via WhatsApp</a>
                    </div>
                        
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                        <p>Email: teste@teste.com</p>
                        <p>Telefone: (XX) 1234-5678</p>
                        <p>Rua quize, centro ,Belo Horizonte | MG</p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Redes Sociais</h3>
                        <div className='flex gap-4'>
                            <a href="#" target='_blank'> <FacebookLogoIcon className='w-8 h-8'/></a>
                            <a href="#" target='_blank'> <InstagramLogoIcon className='w-8 h-8'/></a>
                            <a href="#" target='_blank'> <YoutubeLogoIcon className='w-8 h-8'/></a>

                        </div>
                    </div>

                </footer>

            </div>

        </section>
    )
}