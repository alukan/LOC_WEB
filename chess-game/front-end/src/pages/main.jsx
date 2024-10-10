import React from 'react';
import {useNavigate} from 'react-router-dom';

function Main(){
    const navigate = useNavigate()

    function CreateRoom(){
        // navigate("/game/1") Example
        fetch(process.env.REACT_APP_BACKEND_URL + "/create-room", {
            method: 'POST'
        })
        .then((response)=>response.json())
        // .then(data => console.log(data))
        // '123' + 'qwe' ='123qwe'
        .then(data => navigate(`/game/`+data.id))
    }

    return <div>
        <header style={{alignItems: "center"}}>
        <h1 >Chess Game</h1>
        </header>
        <button onClick={CreateRoom}>Create Room</button>
    </div>
    
}

export default Main;