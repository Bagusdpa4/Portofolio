import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import { Homepage } from "../pages/Homepage";
import { Contact } from "../pages/contact/Contact";
import { Portofolio } from "../pages/portofolio/Portofolio";
import { Error404 } from "../pages/errors/Error404";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="/project/:id" element={<Portofolio />} />

        {/* Error */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
