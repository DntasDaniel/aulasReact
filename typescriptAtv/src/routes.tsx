import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details/Details";
import { Home } from "./pages/Home/Home";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:login" element={<Details />} />
    </Routes>
  );
}
