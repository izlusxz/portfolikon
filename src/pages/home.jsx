import React from "react";
import "../styles/style.css"
import { Link, useNavigate } from 'react-router-dom';
import img from "../assets/Logo_front-removebg.png" 
import { Download, Email, GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";

const Home = () => {
  const navigate = useNavigate();

  return (
        <><div className="overlay">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid container fs-4 mt-3">
            <a class="navbar-brand " href="#"></a>
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
                <div class="row align-items-center"style={{ fontFamily: 'Fredoka, sans-serif' }}>
                    <div class="col-1 mtx">
                    <div class="d-grid gap-2 d-md-block my-2">
                    <button type="button" class="btn bg-branco"><GitHub></GitHub></button>
                    </div>  
                    <div class="d-grid gap-2 d-md-block">
                    <button type="button" class="btn btn bg-branco"><LinkedIn></LinkedIn></button>
                    </div>
                    <div class="d-grid gap-2 d-md-block my-2">
                    <button type="button" class="btn btn bg-branco"><Email></Email></button>
                    </div>
                    </div>
                    <div class="col-6 bg-branco mtx text-start">
                        <h4 className=" "></h4>
                        <h1 className="display-1"><strong>Luiz Lascoski</strong></h1>
                        <h4 className="text-start ">Software Developer</h4>
                        <div className="my-4">
                        <a class="btn btn-secondary" href="#" role="button"><WhatsApp></WhatsApp> Contact</a>
                        <a class="btn btn-secondary mx-2" href="#" role="button"><Download></Download> Download CV</a>
                        </div>
                    </div>
                    <div class="col-4">
                    <div className="white-box mx-5"></div>
                    </div>
                </div>
            </div>
            </div>

        </>
  );
};

export default Home;