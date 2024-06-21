import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import BusinessPage from "./pages/BusinessPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDestriptionPage from "./pages/ProductDestriptionPage";
import CartDetailsPage from "./pages/CartDetailsPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/businesspage":
        title = "";
        metaDescription = "";
        break;
      case "/productspage":
        title = "";
        metaDescription = "";
        break;
      case "/productdestriptionpage":
        title = "";
        metaDescription = "";
        break;
      case "/cartdetailspage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/businesspage" element={<BusinessPage />} />
      <Route path="/productspage" element={<ProductsPage />} />
      <Route
        path="/productdestriptionpage"
        element={<ProductDestriptionPage />}
      />
      <Route path="/cartdetailspage" element={<CartDetailsPage />} />
    </Routes>
  );
}
export default App;
