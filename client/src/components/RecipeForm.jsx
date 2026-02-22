

import { useState } from "react";

export default function RecipeForm() {
    // 1. Create a single state object for the whole form
    const [formData, setFormData] = useState({
        image_url: "",
        dish: "",
        type: "",
        difficulty_level: "Easy" // Default value
    });

    // 2. Handle input changes dynamically
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
                setFormData({ image_url: "", dish: "", type: "", difficulty_level: "Easy" });
            }
        } catch (error) {
            console.error("Error saving recipe:", error);
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
    <label htmlFor="image_url">Image URL:</label>
    <input 
        type="text" 
        id="image_url" 
        name="image_url" 
        value={formData.image_url} // Added this
        onChange={handleChange} 
        required 
        className="bg-white text-black border p-1"  <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
    <label htmlFor="image_url">Image URL:</label>
    <input 
        type="text" 
        id="image_url" 
        name="image_url" 
        value={formData.image_url} // Added this
        onChange={handleChange} 
        required 
        className="bg-white text-black border p-1"  
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

    <button type="submit" className="bg-blue-500 text-white p-2 mt-4 rounded hover:bg-blue-600 transition">
        Submit new Recipe
    </button>
</form>
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

    <button type="submit" className="bg-blue-500 text-white p-2 mt-4 rounded hover:bg-blue-600 transition">
        Submit new Recipe
    </button>
</form>
        </div>
    );
}