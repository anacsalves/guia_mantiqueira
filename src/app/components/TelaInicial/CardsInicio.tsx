import Image, { StaticImageData } from "next/image";

interface CardsInicioProps {
  imageSrc: string | StaticImageData;
  title: string; 
}

export default function CardsInicio({ imageSrc, title }: CardsInicioProps) {
  return (
    <div className="w-72 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Imagem */}
      <div className="w-full h-40 relative">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      {/* Título */}
      <div className="bg-green-light text-center py-3">
        <h3 className="text-lg font-semibold text-green-dark">{title}</h3>
      </div>
    </div>
  );
}
