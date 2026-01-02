import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Buy from "./pages/Buy";
import Success from "./pages/Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/buy/:id" element={<Buy />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
