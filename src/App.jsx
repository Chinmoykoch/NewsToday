import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Feed from "./Components/Feed/Feed";
import Dashboard from "./Components/Dashboard/Dashboard";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <>
              <Navbar />
              <Feed />
            </>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
