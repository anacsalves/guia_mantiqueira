import React from "react";

interface FiltroProps {
  categorias: string[]; // Lista de categorias para o filtro (ex.: "Casas", "Pousadas")
  subCategorias?: string[]; // Lista opcional de subcategorias (ex.: "Aluguel", "Venda")
  onSearch: (query: string) => void; // Callback para buscar
  onCategoriaChange: (categoria: string) => void; // Callback para selecionar categoria
  onSubCategoriaChange?: (subCategoria: string) => void; // Callback para subcategoria (opcional)
  buttonText: string; // Texto do botão
  onButtonClick?: () => void; // Função que será chamada ao clicar no botão
}

export default function Filtro({
  categorias,
  subCategorias,
  onSearch,
  onCategoriaChange,
  onSubCategoriaChange,
  buttonText,
  onButtonClick, // Recebendo a função para abrir o modal
}: FiltroProps) {
  return (
    <div className="flex flex-wrap items-center justify-between mb-8 p-4 shadow-sm">
      {/* Filtro por Categoria */}
      <div className="flex space-x-4">
        <select
          className="border rounded-2xl px-4 py-2 text-gray-600"
          onChange={(e) => onCategoriaChange(e.target.value)}
        >
          <option value="Todos">Todos</option> {/* Adiciona a opção 'Todos' */}
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>

        {/* Filtro por SubCategoria */}
        {subCategorias && (
          <select
            className="border rounded-2xl px-4 py-2 text-gray-600"
            onChange={(e) => onSubCategoriaChange?.(e.target.value)}
          >
            <option value="Todos">Todos</option> {/* Adiciona a opção 'Todos' */}
            {subCategorias.map((subCategoria) => (
              <option key={subCategoria} value={subCategoria}>
                {subCategoria}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Barra de Pesquisa */}
      <div className="flex-grow mx-4">
        <input
          type="text"
          placeholder="Busque por rua, bairro..."
          className="w-full border rounded-2xl px-4 py-2"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* Botão Principal */}
      <button className="bg-green-regular text-white px-6 py-2 rounded-2xl hover:bg-green-dark">
        {buttonText}
      </button>
    </div>
  );
}

