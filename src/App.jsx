import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { About } from "./About";
import { Contact } from "./Contact";
import { Nav } from "./Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Nav />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
