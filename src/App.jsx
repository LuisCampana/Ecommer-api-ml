import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/navbar";
import { Carrito } from "./Pages/Carrito";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
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
