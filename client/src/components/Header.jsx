import { Link } from "react-router";

export default function Header() {
  return (
    <div>
      <h2 className="text-2xl font-mono text-amber-300">Recipe App</h2>

      <nav>
        <Link to="/"> Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/add">Add Recipe</Link>
      </nav>
    </div>
  );
}
