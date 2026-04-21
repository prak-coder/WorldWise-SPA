import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import TestPage from "./pages/TestPage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
function App() {
  return (
    <>
      <h1>React Router</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />} />

          <Route path="test" element={<TestPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
