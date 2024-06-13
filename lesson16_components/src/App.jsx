import "./App.css";
import React from "react";
import {MyFirstButton, InputFeild, Block} from './components/MyButton'
import { TextElement} from './components/NewBlock'


function App() {
  return <div>
    <MyFirstButton/>
    <p>buttons</p>
    <MyFirstButton/>
    <InputFeild/>
    <Block placeHolder={'Placeholder'} text={'It works'} alertText={'Alert'}> Hello, we are inside 'Block'</Block>
    <TextElement numberOfBlocks={5}/>
     

  </div>
}


export default App;
