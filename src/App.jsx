import { Route, Routes } from "react-router-dom";
import { Mlogo } from "./Components/Logo";
import { Navbar } from "./Components/navbar";
import { Carrito } from "./Pages/Carrito";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <div>
        <Mlogo />
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <Routes>
        <Route>
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
