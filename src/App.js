import React from 'react';
import Login from './Paginas/Login/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Registro from './Paginas/Registro/Registro';
import Test from './componentes/test/test.js'
import MainPage from './Paginas/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Login />}/>
     <Route path="/register" element={<Registro/>}/>
     <Route path="/mainpage" element={<MainPage/>}/>     
     <Route path="/test" element={<Test/>}/>
    </Routes>
   </BrowserRouter>
  )
}
export default App;
