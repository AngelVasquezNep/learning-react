import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * React component (JXS)
 * class, function or const
 * return
 *  - null
 *  - string
 *  - number
 *  - Otro componente de React
 *  - HTML
 *  - Array de cualquiera de los elementos anteriores
 * 
 * JXS -> Vanilla JS + HTML
 */

function Hi(props) {
  return <h1>Hola</h1>
}

function SayHi(props) {
  return <h2 title={props.name}>
      Di mi nombre...{props.name} {props.home}
  </h2>
}

function Nav() {
  return <nav>NAVEGADOR</nav>
}

function Footer() {
  return <footer>FOOTER</footer>
}

function Container() {
  return (
    <main>
      <Nav />
      <Hi />
      <Hi />
      <Hi />

      <SayHi
        name="Angelito"
        home="México"
      />
      <SayHi name="Angelito Fake" />
      <SayHi name="Angelito Panadero" />

      <Footer />
    </main>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
