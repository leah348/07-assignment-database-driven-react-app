import { Routes, Route } from "react-router";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Recipes from "./pages/Recipes";
import RecipePage from "./pages/RecipePage";
import AddRecipePage from "./pages/AddRecipePage";

export default function App() {
  return (
    <div className=" max-w-full mx-auto  ">
      <div className="max-w-full  mb-5 bg-gray-400">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipePage />} />
        <Route path="/add" element={<AddRecipePage />} />
      </Routes>
    </div>
  );
}
