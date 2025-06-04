import Image from "next/image"

export default function Portfolio() {
  // Array of image placeholders (in a real project, these would be your actual images)
  const images = Array(10).fill("/placeholder.svg?height=200&width=200")

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6b6a9] to-[#dca89a] flex flex-col items-center pt-20">
      <section className="bg-white max-w-5xl w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] p-6 md:p-10">
        <h2 className="text-2xl font-normal text-gray-800 mb-6">Portfólio de Produtos</h2>
        <p className="text-gray-500 mb-10 leading-relaxed">
          Experimente o poder da natureza com nossa seleção premium de óleos essenciais 100% puros. Cuidadosamente
          extraídos de botânicos ao redor do mundo, cada óleo oferece benefícios únicos para a mente, o corpo e o lar.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="aspect-square relative">
              <Image src={src || "/placeholder.svg"} alt={`Produto ${index + 1}`} className="object-cover" fill />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
