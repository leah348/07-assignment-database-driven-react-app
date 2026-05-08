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
    const result = await db.query(`
      SELECT recipes.*,
      COALESCE(
        array_agg(comments.comment) FILTER (WHERE comments.comment IS NOT NULL),
        '{}'
      ) AS comments
      FROM recipes
      LEFT JOIN comments
      ON recipes.id = comments.recipe_id
      GROUP BY recipes.id
      ORDER BY recipes.id;
    `);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

// --- Get one recipe with comments ---
app.get("/recipes/:id", async (req, res) => {
  try {
    const result = await db.query(
      `
      SELECT 
        recipes.id,
        recipes.image_url,
        recipes.dish,
        recipes.type,
        recipes.difficulty_level,
        COALESCE(
          ARRAY_AGG(comments.comment) FILTER (WHERE comments.comment IS NOT NULL),
          ARRAY[]::TEXT[]
        ) AS comments
      FROM recipes
      LEFT JOIN comments
      ON recipes.id = comments.recipe_id
      WHERE recipes.id = $1
      GROUP BY 
        recipes.id,
        recipes.image_url,
        recipes.dish,
        recipes.type,
        recipes.difficulty_level;
      `,
      [req.params.id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching recipe:", error);
    res.status(500).json({ error: "Failed to fetch recipe" });
  }
});

// --- Create recipe ---
app.post("/recipes", async (req, res) => {
  const { image_url, dish, type, difficulty_level } = req.body;

  try {
    const newRecipe = await db.query(
      "INSERT INTO recipes (image_url, dish, type, difficulty_level) VALUES ($1, $2, $3, $4) RETURNING *",
      [image_url, dish, type, difficulty_level],
    );

    res.status(201).json(newRecipe.rows[0]);
  } catch (error) {
    console.error("Error creating recipe:", error);
    res.status(500).json({ error: error.message });
  }
});

// --- Delete recipe ---
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

// --- Get comments ---
app.get("/comments", async (req, res) => {
  try {
    const comments = (await db.query("SELECT * FROM comments")).rows;
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// --- Add comment ---
app.post("/comments", async (req, res) => {
  const { comment, recipe_id } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO comments (comment, recipe_id) VALUES ($1, $2) RETURNING *",
      [comment, recipe_id],
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({ error: "Failed to create comment" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
