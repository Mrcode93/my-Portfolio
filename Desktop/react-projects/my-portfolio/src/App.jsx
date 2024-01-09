import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/main";
import Services from "./components/services";
import Projects from "./components/projects";
import Skills from "./components/Skills";
// import Blog from "./components/blog";

function App() {
  return (
    <>
      <Header />
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
