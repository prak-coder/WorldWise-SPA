import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import TestPage from "./pages/TestPage";
function App() {
  return (
    <>
      <h1>React Router</h1>

      <BrowserRouter>
        <Link to={"/"} style={{ textDecoration: "none", marginRight: "10px" }}>
          Home
        </Link>
        <Link
          to={"/product"}
          style={{ textDecoration: "none", marginRight: "10px" }}
        >
          Product
        </Link>
        <Link to={"/pricing"} style={{ textDecoration: "none" }}>
          Pricing
        </Link>{" "}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
