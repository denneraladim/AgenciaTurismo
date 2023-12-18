import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Contatos from "./pages/Contato";
import Sobre from "./pages/Sobre";
import Passagens from './pages/Passagens'
import PaginaBase from './pages/PaginaBase'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase/>}>
            <Route index element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/passagens" element={<Passagens />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
