import { Link } from "react-router";

export default function Header() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-mono">Recipes App</h2>
      <div className="flex justify-center">
        <nav className="flex flex-row   gap-16 text items-center">
          <Link to="/"> Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/add">Add a new Recipe</Link>
          {/* <Link to="/recipes/1">Learn More</Link> */}
        </nav>
      </div>
    </div>
  );
}

//<div className="w-full mx-32 mt-5">
// <h2 className="text-2xl font-mono text-red-300 mt-5">Recipes App</h2>
