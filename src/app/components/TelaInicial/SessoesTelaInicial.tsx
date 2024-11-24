import React from "react";
import CardsInicio from "./CardsInicio";
import casa from "../../../assets/img/casa.png"; // Caminho correto para imagens no Next.js

export default function SessoesTelaInicial() {
  return (
    <>
      <section className="py-8">
        {/* Título da Sessão */}
        <h1 className="font-futuraMedium font-medium text-green-dark text-3xl mb-2">
          Moradia
        </h1>
        <p className="text-gray-dark mb-4 text-xl">
          Encontre a moradia ideal para você.
        </p>
        {/* Componente de Cards */}
        <CardsInicio imageSrc={casa} title={"Casas"} />
      </section>

      <section className="py-8">
        {/* Título da Sessão */}
        <h1 className="font-futuraMedium font-medium text-green-dark text-3xl mb-2">
          Alimentação
        </h1>
        <p className="text-gray-dark mb-4 text-xl">
          Explore os melhores restaurantes e cafés de Itajubá.{" "}
        </p>
        {/* Componente de Cards */}
        <CardsInicio imageSrc={casa} title={"Casas"} />
      </section>

      <section className="py-8">
        {/* Título da Sessão */}
        <h1 className="font-futuraMedium font-medium text-green-dark text-3xl mb-2">
          Educação e Saúde
        </h1>
        <p className="text-gray-dark mb-4 text-xl">
          Veja as melhores escolas e hospitais da região.
        </p>
        {/* Componente de Cards */}
        <CardsInicio imageSrc={casa} title={"Casas"} />
      </section>
    </>
  );
}
