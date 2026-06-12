import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <h1 className=" text-red-500 underline">Welcome to My React App!</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
