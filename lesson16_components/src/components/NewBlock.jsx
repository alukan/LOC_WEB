import React from "react";
import {Block} from "./MyButton";

function TextElement({numberOfBlocks=3}){
    let arr = [<Block>5</Block>, <Block>5</Block>]
    if(numberOfBlocks => 3){
        let counter = 3
        while (numberOfBlocks > arr.length){
            arr.push(<Block>{counter}</Block>)
            counter+=1
        }
    }
    
    return <p> it is huge component
        {arr}
    </p>
}      

export{TextElement};

