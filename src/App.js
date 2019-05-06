import React, { Component } from "react";
import logo from "./images/logo-ejercicio1.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Alex Guerrero</h1>
          <p>Lunes 26 de junio de 2017</p>
        </header>
        <main>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus itaque eum quae voluptatem laboriosam nesciunt, accusantium dolorum ipsam neque omnis magnam totam doloribus facilis natus quidem, architecto aut hic.</p>
        </main>
        <footer>
          <p>Leer más...</p>
          <span>37<i class="fas fa-heart"></i></span>
        </footer>
      </div>
    );
  }
}

export default App;