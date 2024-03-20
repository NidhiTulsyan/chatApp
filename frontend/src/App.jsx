import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home from './pages/Home';
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/chat:chatId" element={<Chat />}></Route>
        <Route path="/groups" element={<Groups />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
