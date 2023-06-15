import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import OneProduct from "./components/OneProduct";
import Update from "./components/Update";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Main />} path="/" default />
          <Route element={<OneProduct />} path="products/:id" />
          <Route element={<Update />} path="products/edit/:id"/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;