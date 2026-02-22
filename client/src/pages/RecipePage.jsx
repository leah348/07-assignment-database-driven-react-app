import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function RecipePage() {
  const { id } = useParams(); // get id from URL
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`http://localhost:8080/recipes/${id}`);
        const data = await res.json();
        setRecipeDetails(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    }

    fetchData();
  }, [id]); // dependency should include id

  return (
    <div>
      <h2>Recipe Page</h2>

      {recipeDetails ? (
        <div>
          <p>{recipeDetails.dish}</p>
          <p>{recipeDetails.type}</p>
          <p>{recipeDetails.difficulty_level}</p>
          <img
            src={recipeDetails.image_url}
            alt={recipeDetails.dish}
            width="300"
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
