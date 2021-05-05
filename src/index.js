import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootswatch/dist/cerulean/bootstrap.min.css";
import CadastroProduto from './views/produtos/Cadastro';
import  ConsultaProdutos  from './views/produtos/Consulta';
ReactDOM.render(
  <Router>
    <Route exact path="/cadastro" component={CadastroProduto}/>
    <Route exact path="/" component={App}/>
    <Route exact path="/consulta" component={ConsultaProdutos}/>
  </Router>
    
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
