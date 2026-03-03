import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const db = new pg.Pool({
  connectionString: process.env.DB_CONN,
});

// --- READ (Get all recipes) ---
app.get("/recipes", async (req, res) => {
  try {
    const result = (await db.query("SELECT * FROM recipes")).rows;
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});
//---get a specific recipes
app.get("/recipes/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const recipe = (
      await db.query("SELECT * from recipes where id = $1", [req.params.id])
    ).rows[0];

    if (!recipe) {
      res.status(404).json({ error: "Recipe not found" });
      return;
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipe" });
  }
});

// --create/post |(add a new recipe) ---
app.post("/recipes", async (req, res) => {
  const { image_url, dish, type, difficulty_level } = req.body;
  try {
    const newRecipe = await db.query(
      "INSERT INTO recipes (image_url, dish, type, difficulty_level) VALUES ($1, $2, $3, $4) RETURNING *",
      [image_url, dish, type, difficulty_level],
    );
    res.status(201).json({ message: "Recipe added" });
  } catch (error) {
    console.error("Error creating recipe:", error);
    res.status(500).json({ error: error.message });
  }
});

app.delete("/recipes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM recipes WHERE id = $1", [id]);
    res.status(200).json({ message: "Recipe deleted" });
  } catch (error) {
    console.error("Error deleting recipe:", error);
    res.status(500).json({ error: "Failed to delete recipe" });
  }
});

// get commnet
app.get(`/comments`, async (req, res) => {
  const comments = (await db.query(`SELECT * FROM comments`)).rows;
  res.status(200).json(comments);
});

app.post(`/recipes/:id/comments/:commentId`, async (req, res) => {
  //for inserteting into our recipes comments table
  const result = (
    await db.query(
      `INSERT INTO recipes_comments(recipe_id, comment_id) VALUES( $1, $2)`,
      [req, params.commentId],
    )
  ).rows;

  res.status(201).json(result);
});

app.listen(8080, () => {
  console.log("Server runnung on http://localhost:8080");
});

//create and read
//("INSERT INTO recipes (image_url, dish, type, difficulty_level) VALUES ($1, $2, $3, $4) RETURNING *");
