import "./App.css";
import React from "react";
import {MyFirstButton, InputFeild, Block, MySecondButton} from './components/MyButton'
import { TextElement} from './components/NewBlock'
import styled from 'styled-components'


function App() {
  return <div>
    <MyFirstButton myOnClick={(value)=>{alert(value)}}/>
    <p>buttons</p>
    <MyFirstButton/>
    <InputFeild/>
    <Block placeHolder={'Placeholder'} text={'It works'} alertText={'Alert'}> Hello, we are inside 'Block'</Block>
    <TextElement numberOfBlocks={5}/>
    <MySecondButton secondButtonClick={(value1, value2)=>{
        alert(value2)
        alert(value1) }}
        buttonColor={'red'}/>
    
  </div>
}


export default App;
