import { Routes, Route } from "react-router-dom";

import Roulette from "./Components/Roulette/Roulette";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Roulette />}></Route>
        <Route path="/roulette" element={<Roulette />}></Route>
      </Routes>
    </>
  );
}

export default App;
