import React from "react";
import "../styles/style.css"
import { Link, useNavigate } from 'react-router-dom';
import img from "../assets/Logo_front-removebg.png" 

const Home = () => {
  const navigate = useNavigate();

  return (
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid container fs-4 mt-3">
            <a class="navbar-brand" href="#"></a>
            <img src={img} alt="Bootstrap" width="100" height="100"></img>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="nav nav-underline ms-auto" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                <li class="nav-item mx-3">
                <a class="nav-link " href="#">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Experience</a>
                </li>
                <li class="nav-item mx-3">
                <a class="nav-link" href="#">Projects</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>
            </div>
        </div>    
        </nav>
        <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col">
                    One of three columns
                    </div>
                    <div class="col">
                    One of three columns
                    </div>
                    <div class="col">
                    One of three columns
                    </div>
                </div>
            </div>

        </>
  );
};

export default Home;