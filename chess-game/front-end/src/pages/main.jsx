import React from 'react';

function Main(){
    function CreateRoom(){
        fetch("http://localhost:3001/create-room", {
            method: 'POST'
        })
        .then((response)=>response.json())
        .then(data => console.log(data))
    }

    return <div>
        <header style={{alignItems: "center"}}>
        <h1 >Chess Game</h1>
        </header>
        <button onClick={CreateRoom}>Create Room</button>
    </div>
    
}

export default Main;