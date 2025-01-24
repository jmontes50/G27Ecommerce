import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ui/ProtectedRoute";
import Navbar from "./components/ui/Navbar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route
              path="/checkout"
              element={
                
                  <CheckoutPage />
                
              }
            />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <ToastContainer />
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
