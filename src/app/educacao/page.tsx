"use client"

import React, { useState } from "react";
import BaseLayoutTelas from "../components/Generico/BaseLayoutTelas";
import Filtro from "../components/Generico/Filtro";
import Card from "../components/Generico/Card";

export default function Educacao() {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  const categorias = ["Todos", "Educação Infantil", "Ensino Fundamental", "Ensino Médio", "Ensino Superior"];

  return (
    <BaseLayoutTelas
      title="Educação"
      description="Encontre as melhores opções de educação em Itajubá: escolas públicas e privadas, ensino infantil, fundamental e médio. Educação de qualidade para todas as idades."
    >
      {/* Filtro */}
      <Filtro
        categorias={categorias}
        onSearch={setQuery}
        onCategoriaChange={setCategoria}
        buttonText="Anuncie sua escola"
      />

      {/* Conteúdo Filtrado */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Educação Infantil</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            imageSrc="/assets/img/casa.png"
            title="Escola Arca da Noé"
            description="CEP: 00000-000. Rua das Flores, 123."
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Ensino Fundamental</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            imageSrc="/assets/img/casa.png"
            title="Escola São Vicente"
            description="CEP: 00000-000. Rua das Flores, 123."
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Ensino Médio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            imageSrc="/assets/img/casa.png"
            title="E.E. Major João Pereira"
            description="CEP: 00000-000. Rua das Flores, 123."
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Ensino Superior</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            imageSrc="/assets/img/casa.png"
            title="Universidade XYZ"
            description="CEP: 00000-000. Rua das Flores, 123."
          />
        </div>
      </section>
    </BaseLayoutTelas>
  );
}
