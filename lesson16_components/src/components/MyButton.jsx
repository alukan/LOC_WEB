import React from "react";
//    '../App.jsx', '../example/file.jsx'
function MyFirstButton({ buttonText = 'default', buttonAlert = 'text'}){

    return <button onClick={(() =>
        alert(buttonAlert) // here use buttonAlert variable
    )}> {buttonText}  </button>
}

function InputFeild({placeholdertext='default'}){
    return <input type="text" placeholder={placeholdertext}/>
}

function Block({ children, text, alertText, placeHolder }){// Text is create inside App.jsx -> Block -> MyFirstButton
    return <div>
        {children}
        <MyFirstButton buttonText={text} buttonAlert={alertText}  />
        <InputFeild placeholdertext={placeHolder}/>
    </div>
}

export {MyFirstButton, InputFeild, Block};

