import React, { Component } from 'react';
import logo from './images/logo-ejercicio1.png';
import './App.scss';

class App extends Component {
  render() {
  // NOTA: para hacer las contantes, VAMOS DE PEQUEÑO A GRANDE. Tener en cuenta que primero ponemos las que engloban los trozos de código más pequeño y a continuación las de código que engloba el anterior.
    const headerRoot = (
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="title-container">
        <h1 className="App-title">Alex Guerrero</h1>
        <p>Lunes 26 de junio de 2017</p>
      </div>
    </header>
    );
    const mainRoot = (
      <main>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos delectus itaque eum quae voluptatem laboriosam
            nesciunt, accusantium dolorum ipsam neque omnis magnam totam
            doloribus facilis natus quidem, architecto aut hic.
          </p>
        </main>
    );
    const footerRoot = (
      <footer className="footer">
      <p>Leer más...</p>
      <span>
        37
        <i class="fas fa-heart" />
      </span>
    </footer>
    );
    
    const pageRoot = (<div className="App">{headerRoot}{mainRoot}{footerRoot}</div>);

    const appRoot = (
      <div className="main-App">
      {pageRoot}
    </div>
    );
    return appRoot;
  }
}

export default App;
