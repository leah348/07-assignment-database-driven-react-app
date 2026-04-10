// import { useState } from "react";
import RecipeForm from "../components/RecipeForm";

export default function AddRecipePage() {
  return (
    <div>
      <h2 className="text-2xl p-2"> This page is about adding a new recipe</h2>
      <p>
        {" "}
        This is the page about adding a new recipes to our database: you can add
        any comment by selecting from the available Comment.
      </p>

      <RecipeForm />
    </div>
  );
}
