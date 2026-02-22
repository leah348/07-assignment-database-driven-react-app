import { Routes, Route } from "react-router";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Recipes from "./pages/Recipes";
import RecipePage from "./pages/RecipePage";
import AddRecipePage from "./pages/AddRecipePage";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipePage />} />
        <Route path="/add" element={<AddRecipePage />} />
      </Routes>
    </>
  );
}
