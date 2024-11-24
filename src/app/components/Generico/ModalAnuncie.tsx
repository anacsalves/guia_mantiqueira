import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAnuncie: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-4xl relative">
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 font-bold text-xl"
        >
          ✖
        </button>

        {/* Conteúdo do Modal */}
        <h2 className="font-futuraMedium font-medium  text-3xl font-semibold text-green-dark text-center mb-2">
          Anuncie sua vaga
        </h2>
        <p className="font-futuraMedium font-medium  text-center text-2xl text-gray-600 mb-6">
          Iremos analisar sua solicitação e retornar em até 7 dias
        </p>

        {/* Formulário */}
        <form>
          {/* Linha 1: Tipo de moradia e opções */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <select
              className="col-span-2 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option>Selecione o tipo de moradia</option>
              <option>Casa</option>
              <option>Apartamento</option>
              <option>Pensões/kitnet</option>
              <option>República</option>

            </select>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-1">
                <input type="checkbox" className="form-checkbox" />
                <span>Aluguel</span>
              </label>
              <label className="flex items-center space-x-1">
                <input type="checkbox" className="form-checkbox" />
                <span>Venda</span>
              </label>
            </div>
          </div>

          {/* Linha 2: Endereço */}
          <div className="grid grid-cols-12 gap-4 mb-4">
            <input
              type="text"
              placeholder="Cep"
              className="col-span-3 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Rua"
              className="col-span-6 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Nº"
              className="col-span-3 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Linha 3: Preços */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Preço mínimo"
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Preço máximo"
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Linha 4: Responsável */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Nome do responsável"
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Telefone do responsável"
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Linha 5: Detalhes */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <input
              type="text"
              placeholder="Tamanho em m²"
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Nº de quartos"
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Nº de banheiros"
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Nº vagas de garagem"
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Linha 6: Condomínio e IPTU */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Condomínio"
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="IPTU"
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Linha 7: Opções adicionais */}
          <div className="flex items-center space-x-4 mb-4">
            <label className="flex items-center space-x-1">
              <input type="checkbox" className="form-checkbox" />
              <span>Aceita pets</span>
            </label>
            <label className="flex items-center space-x-1">
              <input type="checkbox" className="form-checkbox" />
              <span>Portão eletrônico</span>
            </label>
          </div>

          {/* Linha 8: Descrição */}
            <textarea
            placeholder="Descrição"
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4 resize-none"
            rows={3}
            style={{ maxHeight: "100px", minHeight: "80px" }}
            ></textarea>


          {/* Botão de envio */}
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Próximo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAnuncie;
