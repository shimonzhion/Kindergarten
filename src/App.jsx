import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import  Router  from "./Router";
import { Link, BrowserRouter } from "react-router-dom";
import Header from "./components/featurs/Header/Header";
import Footer from "./components/featurs/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Router />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
