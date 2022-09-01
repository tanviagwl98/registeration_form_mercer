import React from "react";
import Header from "./Components/Header/Header.js";
//import "./Components/Header/Header.css";
import RegisterationForm from "./Components/RegisterationForm/RegisterationForm.js";
import Content from "./Components/Content/Content.js";
import "./App.css";
import Divider from './Components/Divider/Divider.js';

function App() {
  return (
    <div className="">
      <Header />
      <div className="row">
        <div class="first">
          <Content />
        </div>
        <div class="middle">
        <Divider />
        </div>
        <div class="third">
          <RegisterationForm />
        </div>
      </div>
    </div>
  );
}

export default App;
