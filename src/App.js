import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SearchPage } from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App pb-5">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
