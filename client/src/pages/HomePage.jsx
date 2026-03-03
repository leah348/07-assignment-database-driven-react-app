import { Link } from "react-router";
import Article from "../components/Article";

export default function HomePage() {
  return (
    <div>
      <main>
        <h2 className="text-3xl p-2">A World of Flavor in Your Kitche</h2>
        <p>
          Embark on a culinary journey across continents. From the spicy street
          foods of Bangkok to the comforting pasta kitchens of Rome, discover
          flavors that tell a story. Whether you're looking for a 15-minute
          weeknight fix or a slow-cooked Sunday feast, your next favorite meal
          is just a click away.
        </p>

        <h2 className="text-3xl p-2"> Explore the nature of recipes</h2>
        <p>
          Welcome to our recipe app! Here, you can discover a wide variety of
          delicious recipes from around the world. Whether you're a seasoned
          chef or just starting out in the kitchen, our app has something for
          everyone. Browse through our collection of recipes, find inspiration
          for your next meal, and even share your own culinary creations with
          our community. Happy cooking!
        </p>

        <p className="text-3xl">Home Cook</p>

        <section className="flex flex-wrap gap-10">
          <Article>
            <p className="text-amber-300"> Healthy & Fresh</p>
            <p className="text-2xl">
              Celebrate the season with recipes that put plants and protein
              center stage. Explore a vibrant variety of vegan delights,
              gluten-free wonders, and wholesome classics. We’ve gathered the
              best of nature’s bounty to help you fuel your body without ever
              sacrificing taste.
            </p>
          </Article>

          <Article>
            <p className="text-amber-300">Food for life</p>
            <p className="text-2xl">
              There's nothing quite like the smell of a home-cooked meal. Our
              collection is curated for real life—messy kitchens, family
              dinners, and 'what's in the fridge?' moments. We believe cooking
              should be joyful, not stressful. Dive into our variety of recipes
              designed for every skill level and every palate
            </p>
          </Article>
          <Article>
            <p className="text-amber-300">Delicious Home-Cooked Food</p>
            <p className="text-2xl">
              Home-cooked food brings comfort, warmth, and a true sense of
              togetherness to every table. Prepared with fresh ingredients and
              simple, time-honored recipes, each meal is made with care and
              love. From hearty soups and slow-cooked stews to freshly baked
              bread and classic family favorites, home cooking celebrates
              authentic flavors and wholesome goodne
            </p>
          </Article>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl p-2">Did You Know?</h2>
          <ul>
            <li>
              There are over 10,000 varieties of tomatoes, ranging from tiny
              cherries to huge beefsteaks.
            </li>
            <li>
              Honey is the only food that never spoils; archeologists have found
              edible honey in 3,000-year-old Egyptian tombs!
            </li>
            <li>
              The world's most expensive spice is Saffron, which must be
              harvested by hand from crocus flowers
            </li>
            <li>
              Contrary to popular belief, "French Fries" actually originated in
              Belgium, not France.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl p-2">Add to Our Database</h2>
          <p>
            "Missing a favorite dish? Submit a new recipe and assign it to one
            of our categories. Share your passion for cooking and help us build
            the ultimate digital cookbook
          </p>
        </section>

        <footer className="bg-gray-400">
          <p>Discovering the nature of global flavors.</p>
          <p>&copy; 2026 RecipeApp Project | All Rights Reserved </p>
        </footer>
      </main>
    </div>
  );
}
