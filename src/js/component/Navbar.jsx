import React from "react";  





//create your first component
const Navbar = () => { 
    
    return (
        
        <div className="Nav">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
  <a class="navbar-brand text-white" href="#">Start Bootstrap</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div class="navbar-nav ms-auto">   
      <a class="nav-item nav-link active text-white" href="#">Home <span class="sr-only"></span></a>
      <a class="nav-item nav-link text-white" href="#">About</a>
      <a class="nav-item nav-link text-white" href="#">Services</a>
      <a class="nav-item nav-link disabled text-white" href="#">Contact</a>
    </div>
  </div>
</nav>
            
        </div>
    );
};

export default Navbar;
