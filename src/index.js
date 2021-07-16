import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store";
import App from "./App";
//import "./assets/css/global.css";
import { createGlobalStyle } from "styled-components";
// import $ from "jquery";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = Store();

const GlobalStyle = createGlobalStyle`
  /* resetando o css tirando tudo que vem de padrão*/

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  html, body, #root {
    background-color: #1f1f1f00;
    background-size: cover;
    background-blend-mode: multiply;
    min-height: 100%;
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased!important; /*deixa a fonte mais detalhada*/
    margin: 0;
    padding: 0;
    font-family: sans-serif;

  }

  body, input, button {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// $(document).bind("DOMNodeRemoved", function (e) {
//   // console.log("Removed: " + e.target.nodeName);
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


export { store };
