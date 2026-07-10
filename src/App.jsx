import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "../components/NavigationBar";
import ViewProduct from "../components/ViewProduct";
import AddProduct from "../components/AddProduct";
import DeleteProduct from "../components/DeleteProduct";
import SearchProduct from "../components/SearchProduct";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<AddProduct />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/deleteproduct" element={<DeleteProduct />} />
        <Route path="/searchproduct" element={<SearchProduct />} />
        <Route path="/viewproducts" element={<ViewProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;