"use client";

import React, { useState, useEffect } from "react";
import BaseLayoutTelas from "../components/Generico/BaseLayoutTelas";
import Filtro from "../components/Generico/Filtro";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa o CSS do Swiper
import "swiper/css/navigation"; // CSS para os botões de navegação
import "swiper/css/pagination"; // CSS para paginação
import { Navigation, Pagination } from "swiper/modules";


export default function Moradia() {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [subCategoria, setSubCategoria] = useState("Todos");
  const [moradiaData, setMoradiaData] = useState<any>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Buscar dados da API ao carregar a página
  useEffect(() => {
    fetch(`${apiUrl}/api/moradia`)
      .then((res) => res.json())
      .then((data) => setMoradiaData(data));
  }, []);

  if (!moradiaData) {
    return <p>Carregando...</p>;
  }

  // Filtrar os itens com base no filtro aplicado
  const itensFiltrados = moradiaData.itens.filter((item: any) => {
    const categoriaMatch = categoria === "Todos" || item.categoria === categoria;
    const subCategoriaMatch =
      subCategoria === "Todos" || item.subCategoria === subCategoria;
    const queryMatch =
      query === "" ||
      item.nome.toLowerCase().includes(query.toLowerCase()) ||
      item.descricao.toLowerCase().includes(query.toLowerCase());

    return categoriaMatch && subCategoriaMatch && queryMatch;
  });

  // Determinar as categorias a serem exibidas com base nos itens filtrados
  const categoriasExibidas = categoria === "Todos"
    ? moradiaData.categoria
    : moradiaData.categoria.filter((cat: string) =>
        itensFiltrados.some((item: any) => item.categoria === cat)
      );

  return (
    <BaseLayoutTelas
      title="Moradia"
      description="Repúblicas, apartamentos, kitnets e pensões — opções para estudantes, famílias e turistas. Escolha o lar que combina com seu estilo de vida e sua necessidade."
    >
      {/* Passando o botão "Anuncie sua vaga" que ao ser clicado abre o modal */}
      <Filtro
        categorias={moradiaData.categoria}
        subCategorias={moradiaData.subCategoria}
        onSearch={setQuery}
        onCategoriaChange={(cat) => {
          setCategoria(cat);
          setSubCategoria("Todos");
        }}
        onSubCategoriaChange={setSubCategoria}
        buttonText={"Anuncie sua vaga"}
      />

      {/* Listar os itens filtrados */}
      {categoriasExibidas.map((categoriaExibida: string) => (
        <section key={categoriaExibida} className="mb-8">
          <h2 className="text-xl font-bold mb-4">{categoriaExibida}</h2>
          <Swiper
            spaceBetween={20} // Espaço entre os slides
            slidesPerView={1} // Quantos slides aparecem por vez
            navigation // Botões de navegação
            pagination={{ clickable: true }} // Paginação clicável
            breakpoints={{
              640: {
                slidesPerView: 2, // Exibe 2 slides em telas maiores que 640px
              },
              1024: {
                slidesPerView: 3, // Exibe 3 slides em telas maiores que 1024px
              },
            }}
            modules={[Navigation, Pagination]} // Ativa os módulos de navegação/paginação
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
                      <p className="text-green-dark font-bold">{item.preco}</p>
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
