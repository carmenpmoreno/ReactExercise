import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import MediaCard from './MediaCard';
import * as serviceWorker from './serviceWorker';
import logo from './images/logo-ejercicio1.png'; //hay que importar la imagen desde mediacard para que la encuentre

ReactDOM.render(
  <MediaCard
    name="Carmen"
    date="12/02/1990"
    image="CCC"
    description="fffff"
    likes="GGG"
    heart="ffff"
  />,
  document.getElementById('root')
); //lo que hay despues de MediaCard son los props que se pasan a MediaCard.js, en MediaCard.js no le pasamos ningun parámetro, react hace que estos parámetros se pasen solos

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
