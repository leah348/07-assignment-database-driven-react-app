import { useState } from "react";

export default function RecipeForm() {
  const [dish, setDish] = useState("");
  const [type, setType] = useState("");
  const [difficulty_level, setDifficultyLevel] = useState("");
  const [image_url, setImageUrl] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const recipeData = {
      dish,
      type,
      difficulty_level,
      image_url,
    };

    try {
      const res = await fetch("http://localhost:8080/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeData),
      });

      if (res.ok) {
        alert("Recipe added!");
        setDish("");
        setType("");
        setDifficultyLevel("");
        setImageUrl("");
      } else {
        alert("Failed to add recipe");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Dish name"
        value={dish}
        onChange={(e) => setDish(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Difficulty"
        value={difficulty_level}
        onChange={(e) => setDifficultyLevel(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Image URL"
        value={image_url}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <button type="submit">Add Recipe</button>
    </form>
  );
}
