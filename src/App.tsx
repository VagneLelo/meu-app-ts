import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
// import About from "./pages/About";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
// import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetail />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
