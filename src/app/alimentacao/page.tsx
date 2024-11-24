"use client";

import React, { useState, useEffect } from "react";
import BaseLayoutTelas from "../components/Generico/BaseLayoutTelas";
import Filtro from "../components/Generico/Filtro";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa o CSS base do Swiper
import "swiper/css/navigation"; // Importa o CSS para navegação
import "swiper/css/pagination"; // Importa o CSS para paginação
import { Navigation, Pagination } from "swiper/modules";

export default function Alimentacao() {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [alimentacaoData, setAlimentacaoData] = useState<any>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Buscar dados da API ao carregar a página
  useEffect(() => {
    fetch(`${apiUrl}/api/alimentacao`)
      .then((res) => res.json())
      .then((data) => setAlimentacaoData(data));
  }, []);

  if (!alimentacaoData) {
    return <p>Carregando...</p>;
  }

  // Filtrar os itens com base no filtro aplicado
  const itensFiltrados = alimentacaoData.itens.filter((item: any) => {
    const categoriaMatch =
      categoria === "Todos" || item.categoria === categoria;
    const queryMatch =
      query === "" ||
      item.nome.toLowerCase().includes(query.toLowerCase()) ||
      item.descricao.toLowerCase().includes(query.toLowerCase());

    return categoriaMatch && queryMatch;
  });

  // Determinar as categorias a serem exibidas com base nos itens filtrados
  const categoriasExibidas = alimentacaoData.categoria.filter((categoria: string) =>
    itensFiltrados.some((item: any) => item.categoria === categoria)
  );

  return (
    <BaseLayoutTelas
      title="Alimentação"
      description="Descubra os melhores restaurantes, bares e cafés de Itajubá. Desde a tradicional comida mineira até pratos internacionais, escolha o lugar certo para suas refeições."
    >
      <Filtro
        categorias={alimentacaoData.categoria}
        onSearch={setQuery}
        onCategoriaChange={setCategoria}
        buttonText={"Anuncie seu negócio"} onButtonClick={function (): void {
          throw new Error("Function not implemented.");
        } }      />

      {/* Listar os itens filtrados */}
      {categoriasExibidas.map((categoriaExibida: string) => (
        <section key={categoriaExibida} className="mb-8">
          <h2 className="text-xl font-bold mb-4">{categoriaExibida}</h2>
          <Swiper
            spaceBetween={20} // Espaço entre os slides
            slidesPerView={1} // Slides visíveis por vez
            navigation // Ativa os botões de navegação
            pagination={{ clickable: true }} // Ativa a paginação clicável
            breakpoints={{
              640: {
                slidesPerView: 2, // Exibe 2 slides em telas maiores que 640px
              },
              1024: {
                slidesPerView: 3, // Exibe 3 slides em telas maiores que 1024px
              },
            }}
            modules={[Navigation, Pagination]} // Ativa os módulos do Swiper
          >
            {itensFiltrados
              .filter((item: any) => item.categoria === categoriaExibida)
              .map((item: any) => (
                <SwiperSlide key={item.id}>
                  <div className="shadow-lg rounded-lg overflow-hidden">
                    <img
                      src={item.imagem}
                      alt={item.nome}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 bg-green-light">
                      <h3 className="text-lg font-bold">{item.nome}</h3>
                      <p className="text-sm text-gray-600">{item.descricao}</p>
                      {item.preco && (
                        <p className="text-green-dark font-bold">{item.preco}</p>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
      ))}
    </BaseLayoutTelas>
  );
}
