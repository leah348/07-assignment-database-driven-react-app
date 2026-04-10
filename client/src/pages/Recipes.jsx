import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://zero7-assignment-database-driven-react.onrender.com/recipes",
        );
        const data = await res.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Recipes</h2>

      {/* <div className="flex flex-row flex-wrap gap-10"> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id} // ✅ THIS IS CRITICAL FOR LINKING TO THE RECIPE PAGE
              name={recipe.dish}
              image={recipe.image_url}
              type={recipe.type}
              difficulty_level={recipe.difficulty_level}
            />
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
  );
}
