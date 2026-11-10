import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SearchPage } from './pages/SearchPage';
import { ScrollToTop } from './components/ScrollToTop';
import { AuthProvider } from './context/AuthContext';
import { LoginPage } from './pages/LoginPage';
import { CartProvider } from './context/CartContext';
import { CartPage } from './pages/CartPage';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="App pb-5">
            <ScrollToTop />
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/search" element={<SearchPage />}></Route>
              <Route path="/product/:id" element={<ProductPage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/cart" element={<CartPage />}></Route>
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
