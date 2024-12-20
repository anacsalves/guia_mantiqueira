"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import fundo from "../../assets/img/fundo.png";
import unifei from "../../assets/img/unifei.png";
import logoTexto from "../../assets/img/logo-logo.png";

const ContactForm = () => {};

export default function TelaInicial() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setStatus("Enviando...");
      const result = await emailjs.send(
        "service_9qi0uii",
        "template_u2q40u5",
        formData,
        "A82MhFSiB0ZILG59g"
      );
      if (result.text === "OK") {
        setStatus("Mensagem enviada com sucesso!");
        setFormData({ nome: "", email: "", mensagem: "" });
      }
    } catch (error) {
      console.error(error);
      setStatus("Erro ao enviar. Tente novamente.");
    }
  };
  return (
    <>
      <div className="relative h-screen flex items-center justify-center mt-20">
        {/* Imagem de Fundo */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={fundo}
            alt="Imagem de Fundo"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>

        {/* Overlay para escurecer a imagem de fundo */}
        <div className="absolute inset-0 bg-black bg-opacity-50 -z-10"></div>

        {/* Card Transparente */}
        <div className="relative px-12 my-12 md:px-24 md:my-24 bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg flex flex-col items-center justify-center">
          {/* Imagem no Card */}
          <Image
            src={logoTexto}
            alt="Imagem no Card"
            width={400}
            height={250}
            className="rounded-lg mb-4"
          />
          <p className="text-gray-700 text-center text-2xl md:text-3xl mb-4">
            Seu ponto de encontro para morar <br /> e viver bem em Itajubá.
          </p>
        </div>
      </div>

      <div id="hero" className="flex flex-col md:flex-row p-20 gap-10">
        <div className="flex flex-col md:w-1/2">
          <h2 className="font-futuraMedium text-3xl text-green-dark">
            Bem-vindo a Itajubá, o coração da Mantiqueira!
          </h2>
          <p className="text-xl mt-6 text-justify text-gray-dark">
            Conhecida por sua hospitalidade, inovação e beleza natural, Itajubá
            é uma cidade acolhedora e vibrante localizada na Serra da
            Mantiqueira, em Minas Gerais. Com uma atmosfera universitária
            dinâmica, é o lar de uma das principais instituições de ensino
            tecnológico do Brasil, a UNIFEI, além de ser um ponto de encontro
            entre tradição e modernidade. Aqui você encontra montanhas de tirar
            o fôlego, uma gastronomia deliciosa e uma comunidade pronta para
            receber bem turistas, estudantes e novos moradores. Seja para morar,
            estudar ou explorar, Itajubá oferece uma combinação perfeita de
            cultura, natureza e oportunidades. O Guia da Mantiqueira está aqui
            para ajudá-lo a aproveitar o melhor que a cidade tem a oferecer!
          </p>
        </div>
        <div>
          <Image src={unifei} alt="" />
        </div>
      </div>

      <section>
        <div className="flex flex-col w-full bg-green-light px-14 pb-10">
          <p className="font-futuraMedium text-3xl py-8">Deixe sua sugestão</p>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="p-3 rounded-lg"
            />

            <input
              type="text"
              id="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg"
            />

            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Deixa sua sugestão de restaurantes, escolas, clínicas..."
              value={formData.mensagem}
              onChange={handleChange}
              required
              className="p-3 h-80 rounded-lg text-start"
            />

            <button
              type="submit"
              className=" py-2 bg-green-dark text-white rounded-lg"
            >
              Enviar
            </button>
            {status && <p className="text-center text-sm mt-4">{status}</p>}
          </form>
        </div>
      </section>
    </>
  );
}
