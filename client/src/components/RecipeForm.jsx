import { useEffect, useState } from "react";

export default function RecipeForm() {
  const [comments, setComments] = useState([]);
  const [selectComment, setSelectComments] = useState("");

  console.log(comments);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8080/comments`);
      // const data = await response.json();
      setComments(await response.json());
    }
    fetchData();
  }, []);

  // 1. Create a single state object for the whole form
  const [formData, setFormData] = useState({
    image_url: "",
    dish: "",
    type: "",
    difficulty_level: "", // Default value
    comments: "",
  });

  // 2. Handle input changes dynamically
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  // 3. Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Recipe added successfully!");
        // Clear form
        setFormData({
          image_url: "",
          dish: "",
          type: "",
          difficulty_level: "",
          comments: "",
        });
      }
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-2 max-w-[100vw]"
      >
        <label htmlFor="image_url">Image URL:</label>
        <input
          type="text"
          id="image_url"
          name="image_url"
          value={formData.image_url} // Added this
          onChange={handleChange}
          required
          className="bg-white text-black border p-1"
          onSubmit={handleSubmit}
        />

        <label htmlFor="dish">Dish:</label>
        <input
          type="text"
          id="dish"
          name="dish"
          value={formData.dish} // Added this
          onChange={handleChange}
          required
          className="bg-white text-black border p-1"
        />

        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          name="type"
          value={formData.type} // Added this
          onChange={handleChange}
          required
          className="bg-white text-black border p-1"
        />

        <label htmlFor="difficulty_level">Difficulty Level:</label>
        <select
          name="difficulty_level"
          value={formData.difficulty_level} // Added this
          onChange={handleChange}
          required // Fixed the spacing here
          className="border p-1 bg-white text-black"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <label htmlFor="type">Comment:</label>

        <select
          className="w-50 bg-white border p-1 "
          onChange={(e) => setSelectComments(e.target.value)}
        >
          {" "}
          {comments.map((comment) => {
            <option key={comment.id} value={comment.id}>
              {comment.type}
            </option>;
          })}
        </select>

        {/* <input
          type="text"
          id="type"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          required
          className="bg-white text-black border p-1"
        /> */}

        <button
          type="submit"
          className="bg-blue-500 text-black  border-4 w-[200px]p-4 rounded hover:bg-blue-600 transition"
        >
          Submit new Recipe
        </button>
      </form>
    </div>
  );
}
