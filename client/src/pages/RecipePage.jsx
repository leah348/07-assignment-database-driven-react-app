import { useEffect, useState } from "react";
import { useParams } from "react-router";

// single recipe page
export default function RecipePage() {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState("");

  async function fetchRecipe() {
    try {
      const res = await fetch(
        `https://zero7-assignment-database-driven-react.onrender.com/recipes/${id}`,
      );

      const data = await res.json();
      setRecipeDetails(data);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const res = await fetch(
          `https://zero7-assignment-database-driven-react.onrender.com/recipes/${id}`,
        );

        const data = await res.json();
        setRecipeDetails(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipe();
  }, [id]);

  async function handleAddComment(e) {
    e.preventDefault();

    console.log("Sending comment:", newComment);
    console.log("Recipe id:", id);

    try {
      const res = await fetch(
        "https://zero7-assignment-database-driven-react.onrender.com/comments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment: newComment,
            recipe_id: id,
          }),
        },
      );

      if (res.ok) {
        setNewComment("");
        fetchRecipe(); // reload recipe with new comment
      } else {
        console.log("Failed to add comment");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!recipeDetails) {
    return <p>Recipe not found</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">{recipeDetails.dish}</h2>

      <img
        src={recipeDetails.image_url}
        alt={recipeDetails.dish}
        className="w-80 h-60 object-cover rounded-xl mb-4"
      />

      <p className="text-gray-700">Type: {recipeDetails.type}</p>
      <p className="text-gray-700">
        Difficulty: {recipeDetails.difficulty_level}
      </p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Comments</h3>

        {recipeDetails.comments && recipeDetails.comments.length > 0 ? (
          <ul className="mb-4">
            {recipeDetails.comments.map((comment, index) => (
              <li key={index} className="bg-white p-2 rounded mb-2 shadow">
                {comment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 italic border-l-4 border-amber-300 pl-3">
            No comments yet — be the first to add one!
          </p>
        )}

        <form
          onSubmit={handleAddComment}
          className="flex flex-col gap-2 max-w-md"
        >
          <label htmlFor="comment">Add a comment:</label>

          <input
            id="comment"
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
            className="border p-2 rounded bg-white text-black"
            placeholder="Write your comment..."
          />

          <button
            type="submit"
            className="bg-blue-700 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
}
