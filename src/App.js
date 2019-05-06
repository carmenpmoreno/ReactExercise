import React, { Component } from 'react';
import logo from './images/logo-ejercicio1.png';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="main-App">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="title-container">
              <h1 className="App-title">Alex Guerrero</h1>
              <p>Lunes 26 de junio de 2017</p>
            </div>
          </header>
          <main>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos delectus itaque eum quae voluptatem laboriosam
              nesciunt, accusantium dolorum ipsam neque omnis magnam totam
              doloribus facilis natus quidem, architecto aut hic.
            </p>
          </main>
          <footer className="footer">
            <p>Leer más...</p>
            <span>
              37
              <i class="fas fa-heart" />
            </span>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
