import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://zero7-assignment-database-driven-react.onrender.com/recipes",
        );

        console.log("response:", res);

        const data = await res.json();
        console.log("recipes data:", data);

        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading recipes...</p>;

  return (
    <div>
      <h2>Recipes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              name={recipe.dish}
              image={recipe.image_url}
              type={recipe.type}
              difficulty_level={recipe.difficulty_level}
              comment={recipe.comments?.[0]}
            />
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
  );
}
