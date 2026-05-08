import { Link } from "react-router";

export default function RecipeCard({
  id,
  name,
  image,
  type,
  difficulty_level,
  comment,
}) {
  return (
    <Link to={`/recipes/${id}`}>
      <div className="w-64 border rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
        <img src={image} alt={name} className="w-full h-48 object-cover" />

        <div className="p-3">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{type}</p>
          <p className="text-sm">{difficulty_level}</p>
          <p className="text-sm mt-2">
            <strong>Comment:</strong>{" "}
            {comment || "No comment yet — be the first to add one!"}
          </p>
        </div>
      </div>
    </Link>
  );
}
