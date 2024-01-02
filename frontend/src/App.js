import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/2-Home/Home";
import AddForm from "./Components/4-AddForm/AddForm";
import Login from "./Components/3-LoginForm/LoginForm";
import Header from "./Components/1-Header/Header";
import UpdateForm from "./Components/5-UpdateForm/UpdateForm";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Add-Post" element={<AddForm />} />
          
          <Route path="/update-post/:id" element={<UpdateForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
