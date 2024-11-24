import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAnuncie: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    tipoMoradia: "",
    aluguel: false,
    venda: false,
    cep: "",
    rua: "",
    numero: "",
    precoMinimo: "",
    precoMaximo: "",
    nomeResponsavel: "",
    telefoneResponsavel: "",
    tamanho: "",
    quartos: 0,
    banheiros: 0,
    vagasGaragem: 0,
    condominio: "",
    iptu: "",
    aceitaPets: false,
    portaoEletronico: false,
    descricao: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/anuncie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Enviar os dados como JSON
      });

      if (response.ok) {
        alert("Dados enviados com sucesso!");
        onClose();
        setFormData({
          tipoMoradia: "",
          aluguel: false,
          venda: false,
          cep: "",
          rua: "",
          numero: "",
          precoMinimo: "",
          precoMaximo: "",
          nomeResponsavel: "",
          telefoneResponsavel: "",
          tamanho: "",
          quartos: 0,
          banheiros: 0,
          vagasGaragem: 0,
          condominio: "",
          iptu: "",
          aceitaPets: false,
          portaoEletronico: false,
          descricao: "",
        });
      } else {
        const error = await response.json();
        console.error("Erro no backend:", error.message);
        alert("Erro ao enviar os dados.");
      }
    } catch (error) {
      console.error("Erro ao conectar com a API:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-4xl max-h-[640px] relative overflow-auto">
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 font-bold text-xl"
        >
          ✖
        </button>

        {/* Conteúdo do Modal */}
        <h2 className="font-futuraMedium text-3xl font-semibold text-green-dark text-center mb-2">
          Anuncie sua vaga
        </h2>
        <p className="font-futuraMedium font-medium text-center text-2xl text-gray-600 mb-6">
          Iremos analisar sua solicitação e retornar em até 7 dias
        </p>

        {/* Formulário */}
        <form onSubmit={handleSubmit}>
          {/* Linha 1: Tipo de moradia e opções */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <select
              name="tipoMoradia"
              value={formData.tipoMoradia}
              onChange={handleChange}
              className="col-span-2 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione o tipo de moradia</option>
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
              <option value="Pensões/kitnet">Pensões/kitnet</option>
              <option value="República">República</option>
            </select>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  name="aluguel"
                  checked={formData.aluguel}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span>Aluguel</span>
              </label>
              <label className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  name="venda"
                  checked={formData.venda}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span>Venda</span>
              </label>
            </div>
          </div>

          {/* Linha 2: Endereço */}
          <div className="grid grid-cols-12 gap-4 mb-4">
            <input
              type="text"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              placeholder="Cep"
              className="col-span-3 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="rua"
              value={formData.rua}
              onChange={handleChange}
              placeholder="Rua"
              className="col-span-6 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="numero"
              value={formData.numero}
              onChange={handleChange}
              placeholder="Nº"
              className="col-span-3 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Linha 3: Preços */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="precoMinimo"
              value={formData.precoMinimo}
              onChange={handleChange}
              placeholder="Preço mínimo"
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="precoMaximo"
              value={formData.precoMaximo}
              onChange={handleChange}
              placeholder="Preço máximo"
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Linha 4: Responsável */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="nomeResponsavel"
              value={formData.nomeResponsavel}
              onChange={handleChange}
              placeholder="Nome do responsável"
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="telefoneResponsavel"
              value={formData.telefoneResponsavel}
              onChange={handleChange}
              placeholder="Telefone do responsável"
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Linha 5: Detalhes */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <input
              type="text"
              name="tamanho"
              value={formData.tamanho || ""} // Exibe o placeholder quando o valor for vazio
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  tamanho: e.target.value, // Mantém como string
                }))
              }
              placeholder="Tamanho em m²"
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="quartos"
              value={formData.quartos || ""} // Exibe o placeholder quando o valor for vazio
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  quartos: e.target.value === "" ? 0 : parseInt(e.target.value, 10), // Garante número no estado
                }))
              }
              placeholder="Nº de quartos"
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="banheiros"
              value={formData.banheiros || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  banheiros: e.target.value === "" ? 0 : parseInt(e.target.value, 10), // Garante número no estado
                }))
              }
              placeholder="Nº de banheiros"
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
           <input
            type="number"
            name="vagasGaragem"
            value={formData.vagasGaragem === 0 ? "" : formData.vagasGaragem} // Exibe placeholder quando o valor for 0
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                vagasGaragem: e.target.value === "" ? 0 : parseInt(e.target.value, 10), // Garante número no estado
              }))
            }
            placeholder="Nº vagas de garagem"
            className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          </div>

          {/* Linha 6: Condomínio e IPTU */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="condominio"
              value={formData.condominio}
              onChange={handleChange}
              placeholder="Condomínio"
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="iptu"
              value={formData.iptu}
              onChange={handleChange}
              placeholder="IPTU"
              className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Linha 7: Opções adicionais */}
          <div className="flex items-center space-x-4 mb-4">
            <label className="flex items-center space-x-1">
              <input
                type="checkbox"
                name="aceitaPets"
                checked={formData.aceitaPets}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span>Aceita pets</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="checkbox"
                name="portaoEletronico"
                checked={formData.portaoEletronico}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span>Portão eletrônico</span>
            </label>
          </div>

          {/* Linha 8: Descrição */}
          <textarea
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            placeholder="Descrição"
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4 resize-none"
            rows={3}
            style={{ maxHeight: "100px", minHeight: "80px" }}
          ></textarea>

          {/* Botão de envio */}
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-green-regular text-white rounded-lg hover:bg-green-600 transition"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAnuncie;
