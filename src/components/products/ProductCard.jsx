// src/components/quality/ProductCard.jsx
export default function ProductCard({ image, name }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-[100px] h-[140px] rounded overflow-hidden shadow-lg bg-white">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <p className="mt-2 text-sm font-medium text-gray-700">{name}</p>
    </div>
  );
}
