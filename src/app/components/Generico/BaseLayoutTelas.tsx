import React from "react";

interface BaseLayoutTelasProps {
  title: string; // Título da página
  description: string; // Descrição abaixo do título
  children: React.ReactNode; // Conteúdo específico da tela
}

export default function BaseLayoutTelas({
  title,
  description,
  children,
}: BaseLayoutTelasProps) {
  return (
    <div className="px-4 lg:px-8 py-6 mt-28">
      {/* Cabeçalho */}
      <header className="mb-6 text-center">
        <h1 className="font-futuraMedium font-medium text-4xl text-green-dark">{title}</h1>
        <p className="text-gray-dark mt-2">{description}</p>
      </header>

      {/* Conteúdo */}
      <main>{children}</main>
    </div>
  );
}
