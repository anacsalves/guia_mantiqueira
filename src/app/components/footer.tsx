import coracao from "../../assets/img/coracao.png"
import Image from "next/image";
export default function Footer() {
    return (
      <footer className="w-full h-24 bg-green-regular text-white flex items-center justify-center">
        <h2>Desenvolvido por</h2> 
        <Image src={coracao} alt="" />
        <h2> Ana Clara e Victória</h2>
      </footer>
    );
  }
  