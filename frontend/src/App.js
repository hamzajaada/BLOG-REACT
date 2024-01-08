import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import des comp :
import Home from "./Components/2-Home/Home";
import AddForm from "./Components/4-AddForm/AddForm";
import Login from "./Components/3-LoginForm/LoginForm";
import Header from "./Components/1-Header/Header";
import UpdateForm from "./Components/5-UpdateForm/UpdateForm";
import ViewForm from "./Components/6-ViewForm/ViewForm";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Add-Post" element={<AddForm />} />
          <Route path="/view-post/:id" element={<ViewForm />} />
          <Route path="/update-post/:id" element={<UpdateForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
