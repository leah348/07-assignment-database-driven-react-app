import { Link } from "react-router";

export default function RecipeCard({
  id,
  name,
  image,
  type,
  difficulty_level,
}) {
  return (
    <Link to={`/recipes/${id}`}>
      <div className="w-64 border rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
        <img src={image} alt={name} className="w-full h-48 object-cover" />

        <div className="p-3">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{type}</p>
          <p className="text-sm">{difficulty_level}</p>
        </div>
      </div>
    </Link>
  );
}
