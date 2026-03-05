// import { useState } from "react";
import RecipeForm from "../components/RecipeForm";

export default function AddRecipePage() {
  // const [dish, setDish] = useState("");
  // const [type, setType] = useState("");
  // const [difficulty_level, setDifficultyLevel] = useState("");
  // const [image_url, setImageUrl] = useState("");

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   const recipeData = {
  //     dish,
  //     type,
  //     difficulty_level,
  //     image_url,
  //   };

  //   try {
  //     const res = await fetch(
  //       "https://zero7-assignment-database-driven-react.onrender.com/recipes",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(recipeData),
  //       },
  //     );

  //     if (res.ok) {
  //       alert("Recipe added!");
  //       setDish("");
  //       setType("");
  //       setDifficultyLevel("");
  //       setImageUrl("");
  //     } else {
  //       alert("Failed to add recipe");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }

  return (
    <div>
      <h2 className="text-2xl p-2"> This page is about adding a new recipe</h2>
      <p>
        {" "}
        This is the page about adding a new animal to our database: you can
        select from the available Comment if you want
      </p>

      <RecipeForm />
    </div>
  );
}
