import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import AuthContextProvider from "./Components/Context/AuthContext/AuthContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthContextProvider>
      <ToastContainer />
      <Header />
      <Outlet />
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
