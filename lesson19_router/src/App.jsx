import "./App.css";
import React from "react";
import {MyFirstButton, InputFeild, Block, MySecondButton} from './components/MyComponents'
import { TextElement} from './components/NewBlock'
import styled from 'styled-components'
import {StyledInput} from './styled/myStyles'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Page1 from './pages/page1'
import SecondPage from './pages/page2'
import ThirdPage from './pages/page3'


function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/base/" element={<Page1/>}>
        <Route path="page2" element={<SecondPage/>}/>
        <Route path="page3" element={<ThirdPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}


export default App;
