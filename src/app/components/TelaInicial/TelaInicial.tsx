import Image from "next/image"
import fundo from "../../assets/img/fundo.png"
import unifei from "../../assets/img/unifei.png"
import casa from "../../assets/img/casa.png"


export default function TelaInicial(){
    return(
        <>
        <Image src={fundo} alt="" className="w-full h-auto"/>

        <div id="hero" className="flex flex-row p-20 space-x-14">
            <div className="flex flex-col">
                <h2 className="text-4xl">Bem-vindo a Itajubá, o coração da Mantiqueira!</h2>
                <p className="text-2xl mt-6">Conhecida por sua hospitalidade, inovação e beleza natural, Itajubá é uma cidade acolhedora e vibrante localizada na Serra da Mantiqueira, em Minas Gerais. Com uma atmosfera universitária dinâmica, é o lar de uma das principais instituições de ensino tecnológico do Brasil, a UNIFEI, além de ser um ponto de encontro entre tradição e modernidade. Aqui você encontra montanhas de tirar o fôlego, uma gastronomia deliciosa e uma comunidade pronta para receber bem turistas, estudantes e novos moradores.
            Seja para morar, estudar ou explorar, Itajubá oferece uma combinação perfeita de cultura, natureza e oportunidades. O Guia da Mantiqueira está aqui para ajudá-lo a aproveitar o melhor que a cidade tem a oferecer!</p>
            </div>
            <Image src={unifei} alt=""className=""/>
        </div>

        <div id="moradia">
            <div>
                <div>
                     <h2>Moradia</h2>
                     <p>Encontre a moradia ideal para você.</p>
                </div>
                
                <div id="card" className="flex  flex-col justify-center items-center text-center">
                    <Image src={casa} alt="" className="flex w-80"/>
                    <h2 className=" flex w-80 py-4 bg-green-light text-center">Casas</h2>
                </div>
            </div>
        </div>

        </>
    )
}