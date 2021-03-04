import React,{useContext,useEffect} from 'react'

import {Link,useParams} from 'react-router-dom'

import {UserContext} from '../../UserContext'

import io from 'socket.io-client';
let socket;
const Chat = () => {
    const ENDPT = 'localhost:5000';
   
    const {user,setUser}=useContext(UserContext)
    let {room_id,room_name}=useParams()
    useEffect(() => {
        socket = io(ENDPT,{ transport : ['websocket','polling', 'flashsocket'] });
        return () => {
            socket.emit('join',{name:user.name,room_id,user_id:user.id});
            socket.off();
        }
    }, [ENDPT])
    return (
        <div>
            <div>{room_id} {room_name}</div>
            <h1>Chat {JSON.stringify(user)}</h1> 
            <Link to={'/'}>
               <button>go to home</button>
           </Link>
            
        </div>
    )
}

export default Chat
