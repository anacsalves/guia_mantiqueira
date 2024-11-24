import Image from "next/image";

interface CardProps {
  imageSrc: string; // Caminho para a imagem
  title: string; // Título
  description: string; // Descrição
  price?: string; // Preço (opcional)
}

export default function Card({ imageSrc, title, description, price }: CardProps) {
  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="w-full h-40 relative">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col bg-green-light p-4 gap-2">
        <div className="flex justify-between">
            <h3 className="text-lg font-bold text-gray-700">{title}</h3>
            {price && <p className="text-green-dark font-bold">{price}</p>}
        </div>
        <p className="text-sm text-gray-600">{description}</p>
        
      </div>
    </div>
  );
}
