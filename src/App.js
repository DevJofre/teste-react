import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contatos";
import Empresa from "./pages/Empresa";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/contato" element={<Contato />}></Route>
        <Route path="/empresa" element={<Empresa />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
