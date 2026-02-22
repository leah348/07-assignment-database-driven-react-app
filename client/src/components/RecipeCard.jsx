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
      <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{type}</p>
        <p>{difficulty_level}</p>
      </div>
    </Link>
  );
}
