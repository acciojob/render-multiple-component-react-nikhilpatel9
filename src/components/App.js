import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main" className="ns-wrapper">
      <h1 data-ns-test="project-name">name</h1>
      <h6 data-ns-test="project-description">description</h6>
      <h1 data-ns-test="project-name">name1</h1>
      <h6 data-ns-test="project-description">description1</h6>
    </div>
  )
}


export default App;
