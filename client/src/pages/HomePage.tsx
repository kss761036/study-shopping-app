// HomePage.tsx
import { Link } from "react-router-dom";
import { ProductList } from "../components/home";

function HomePage() {
  return (
    <div className="max-w-7xl w-full ml-auto mr-auto">
      <header className="header h-20 fixed top-0 left-0 z-50">
        <Link
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-500 cursor-pointer text-white"
          to="/create">
          +
        </Link>
      </header>

      <ProductList />
    </div>
  );
}

export default HomePage;
