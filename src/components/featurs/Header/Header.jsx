import "./Header.css";
import React from "react";
import{Link} from "react-router-dom"
import { useRef } from "react";

export const pages = ['Layers','Parents','Teachers']

function Header() {


  return (
    <div className="header d-flex justify-content-center ">
     <nav class="pt-3 w-50 d-flex justify-content-center justify-content-around ">

     <Link to="/"> <button>Home</button>   </Link>
     
    
     {pages.map((page)=>
     <Link to={page}> <button>{page}</button></Link>
    
     )}
    
     <Link to="ContactUs"> <button>Contact Us</button>   </Link>
      </nav>


     


    </div>
  );
};

export default Header;


