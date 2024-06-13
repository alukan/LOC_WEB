import React from "react";
import {MyFirstButton, InputFeild, Block, MySecondButton} from '../components/MyComponents'
import { TextElement} from '../components/NewBlock'
import styled from 'styled-components'
import {StyledInput} from '../styled/myStyles'
import { Outlet, Link } from "react-router-dom";

function Page1() {
  return <div>
    <MyFirstButton myOnClick={(value)=>{alert(value)}}/>
    <p>buttons</p>
    <Outlet/>
    <Link to="/base/page3">Page 3</Link>
    <Link to="https://en.wikipedia.org/wiki/Wikipedia">Wiki</Link>  
    <Link to="/base/page2">Page 2</Link>
    <MyFirstButton/>
    <InputFeild/>
    <Block placeHolder={'Placeholder'} text={'It works'} alertText={'Alert'}> Hello, we are inside 'Block'</Block>
    <TextElement numberOfBlocks={5}/>
    <MySecondButton secondButtonClick={(value1, value2)=>{
        alert(value2)
        alert(value1) }}
        buttonColor={'red'}/>
    <StyledInput />
    <Outlet/>

  </div>
}


export default Page1;