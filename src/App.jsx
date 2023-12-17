import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Pokemons from "./views/Pokemons";
import PokeDetails from "./views/PokeDetails";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

const App = () => {
  

  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/pokemons"
          element={<Pokemons />}
        />
         <Route
          path="/pokemons/:name"
          element={<PokeDetails />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
};
export default App;
