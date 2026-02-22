import { Link } from "react-router";
import Article from "../components/Article";

export default function HomePage() {
  return (
    <div>
      <main>
        <select>
          <h2 className="text-3xl">A World of Flavor in Your Kitche</h2>
          <p>
            Embark on a culinary journey across continents. From the spicy
            street foods of Bangkok to the comforting pasta kitchens of Rome,
            discover flavors that tell a story. Whether you’re looking for a
            15-minute weeknight fix or a slow-cooked Sunday feast, your next
            favorite meal is just a click away.
          </p>
        </select>
        <section>
          <h2 className="text-3xl"> Explore the nature of recipes</h2>
          <p>
            Welcome to our recipe app! Here, you can discover a wide variety of
            delicious recipes from around the world. Whether you're a seasoned
            chef or just starting out in the kitchen, our app has something for
            everyone. Browse through our collection of recipes, find inspiration
            for your next meal, and even share your own culinary creations with
            our community. Happy cooking!
          </p>
          <Link to="/recipes">Explore All Recipes</Link>
        </section>

        <section>
          <h2 className="text-3xl">Home Cook</h2>
          <h3>Vegetarian</h3>
          <p>
            There’s nothing quite like the smell of a home-cooked meal. Our
            collection is curated for real life—messy kitchens, family dinners,
            and 'what's in the fridge?' moments. We believe cooking should be
            joyful, not stressful. Dive into our variety of recipes designed for
            every skill level and every palate
          </p>
          <Link to="/recipes/1">Learn More</Link>
        </section>

        <section className="flex flex-wrap gap-10">
          <Article>
            <p> Healthy & Fresh</p>
            <p className="text-3xl">
              Celebrate the season with recipes that put plants and protein
              center stage. Explore a vibrant variety of vegan delights,
              gluten-free wonders, and wholesome classics. We’ve gathered the
              best of nature’s bounty to help you fuel your body without ever
              sacrificing taste.
            </p>
          </Article>
        </section>

        <section className="mt-10">
          <h2>Did You Know?</h2>
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
          <h2>Add to Our Database</h2>
          <p>
            "Missing a favorite dish? Submit a new recipe and assign it to one
            of our categories. Share your passion for cooking and help us build
            the ultimate digital cookbook
          </p>
          <Link to="/recipes/new">Add a Recipe</Link>
        </section>

        <footer>
          <p>Discovering the nature of global flavors.</p>
          <p>&copy; 2026 RecipeApp Project | All Rights Reserved </p>
        </footer>
      </main>
    </div>
  );
}
