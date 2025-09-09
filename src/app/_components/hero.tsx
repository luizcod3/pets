import { WhatsappLogoIcon} from '@phosphor-icons/react/dist/ssr'
import dogImage from '../../../public/bg-hero.png'
import Image from 'next/image'
import catImage from '../../../public/cat-hero.png'
//estrutura do hero
//a primeira section tem posicao relativa e define a cor de fundo e do texto
//a primeira div tem a propriedade container de tailwind que abriga todos os media queries de tamanho de tela, com margem automatica na linha e posicao relativa para esconder itens iguala foto do cachorro
//o article tem a propriedade grid para agrupa os itens na tela pequena e criada uma coluna com tudo na vertical e em telas grandes separa o texto a esquerda e a foto a direita
//a div abaixo de article apenas da um espacamento entre as linhas do texto de cima e embaixo
//h1 e p tem estilizacoes proprias
//a tag a tem sua estilizacao e usa um import de logo
//a div abaixo dela tem sua estilizacao com texto pequeno e o desconto em negrito com sua propria estilizacao
export function Hero(){
    return(
        <section className="bg-amber-700 text-white relative overflow-hidden">

            <div>
                <Image src={dogImage} alt='foto de fundo do cachorro' fill sizes='100vw' priority className="object-cover opacity-60 lg:hidden"/>
            <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>{/*essa div e apenas para escurecer o fundo para as letras ficarem mais legiveis */}
            </div>{/*essa div e para o doguinho aparecer de fundo em telas pequenas da um efeito interessante em telas grandes se tirar o lg:hidden */}

            <div className="container mx-auto px-5 pt-16 pb-16 md:pb-0 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                    
                    <div className='space-y-6'>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10" data-aos="fade-down">Seu pet merece cuidado, carinho e atenção especial.</h1>{/*leading e o espaçamento entre as linhas*/}
                        <p className="lg:text-lg" data-aos="fade-right">Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas</p>

                    
                            <a href={`https://wa.me/?text=Olá vim pelo site e gostaria de mais informações`} target='_blank' className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 " data-aos="fade-up" data-aos-delay="500"><WhatsappLogoIcon className='w-5 h-5'/>Contato via WhatsApp</a>{/*aqui eu poderia colocar uma div apenas com display flex para o botao ficar no tamanho mas com w-fit tambem resolve isso*/}

                        <div className="mt-8">
                            <p data-aos="fade-right" data-aos-delay="1000" className="text-sm mb-4"><b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.</p>

                            <div className="flex mt-4">
                                <div className='w-32 hidden lg:block'>
                                    <Image src={catImage} alt='imagem de um gatinho andando' quality={100} className='object-fill'/>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="hidden md:block h-full relative">
                        <Image src={dogImage}alt='foto de um cachorrinho' className='object-contain' fill sizes='(max-width: 768px) 0vw, 50vw' quality={100} priority/>  
                    </div>

                </article>
            </div>

        </section>
    )
}