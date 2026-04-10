import { Routes, Route } from "react-router";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Recipes from "./pages/Recipes";
import RecipePage from "./pages/RecipePage";
import AddRecipePage from "./pages/AddRecipePage";
import Footer from "./components/Footer";

export default function App() {
  return (
    // <div className=" max-w-full mx-auto  ">
    <div className=" min-h-screen flex flex-col">
      <header className="mb-5 bg-mist-400 ">
        <Header />
      </header>
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipePage />} />
          <Route path="/add" element={<AddRecipePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
