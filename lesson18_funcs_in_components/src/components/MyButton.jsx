import React from "react";
//    '../App.jsx', '../example/file.jsx'
function MyFirstButton({ buttonText = 'default', buttonAlert = 'text', myOnClick}){

    return <button onClick={()=>{
        myOnClick('button clicked')
    }}> {buttonText}  </button>
}

// my second button
function MySecondButton({secondButtonClick, buttonColor}){
    return <button style={{ backgroundColor: buttonColor, width: 100}} onClick ={()=>{
        secondButtonClick('second button', 'some text')
    }}>text</button>
}

function InputFeild({placeholdertext='default'}){
    return <input type="text" placeholder={placeholdertext}/>
}

function Block({ children, text, alertText, placeHolder }){// Text is create inside App.jsx -> Block -> MyFirstButton
    return <div style={{display:'flex', alignItems:'center', justifyContent: 'center'}}>
        {children}
        <MyFirstButton buttonText={text} buttonAlert={alertText}  />
        <InputFeild placeholdertext={placeHolder}/>
    </div>
}

export {MyFirstButton, InputFeild, Block, MySecondButton};

