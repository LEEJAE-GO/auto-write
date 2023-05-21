import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Maker from "../pages/Maker";
import BookStore from "../pages/BookStore";
import NotFound from "../pages/NotFound";

export default function Main() {
  return (
    <main className="h-full custom-min-height bg-white">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Maker" element={<Maker />} />
        <Route exact path="/BookStore" element={<BookStore />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
