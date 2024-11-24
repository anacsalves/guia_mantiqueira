import Image from "next/image";
import Header from "./components/header";
import home from "../assets/img/homeimg.png"
import Footer from "./components/footer";
import TelaInicial from "./components/tela-inicial";


export default function Home() {
  return (
   <>
    <Header />
    <TelaInicial/>
    <Footer />
   </>
  );
}
