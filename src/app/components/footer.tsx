import coracao from "../../assets/img/coracao.png"
import Image from "next/image";
export default function Footer() {
    return (
      <footer className="w-full h-24 bg-green-regular text-white flex items-center justify-center">
        <h2>Desenvolvido com</h2> 
        <Image className="w-10" src={coracao} alt="" />
        <h2> por Ana Clara e Victória</h2>
      </footer>
    );
  }
  