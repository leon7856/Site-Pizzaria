import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Historia from './components/Historia';
import Cardapio from './components/Cardapio';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header />
          <Home />
          <Historia />
          <Cardapio />
          <Footer />
        </>
      } />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
