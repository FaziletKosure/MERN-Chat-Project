import React,{useContext,useEffect,useState} from 'react'

import {Link,useParams} from 'react-router-dom'

import {UserContext} from '../../UserContext'

import io from 'socket.io-client';
let socket;
const Chat = () => {
    const ENDPT = 'localhost:5000';
   
    const {user,setUser}=useContext(UserContext)

    let {room_id,room_name}=useParams()

    const [message,setMessage]=useState('')

    useEffect(() => {
        socket = io(ENDPT,{ transport : ['websocket','polling', 'flashsocket'] });
        return () => {
            socket.emit('join',{name:user.name,room_id,user_id:user.id});
            socket.off();
        }
    }, [ENDPT])

    const sendMessage=event=>{
        event.preventDefault();
        if(message){
            console.log(message);
            socket.emit('senMessage',message,room_id,()=>{
                setMessage('')
            })
        }
    }

    return (
        <div>
            <div>{room_id} {room_name}</div>
            <h1>Chat {JSON.stringify(user)}</h1> 
            {/* <Link to={'/'}>
               <button>go to home</button>
           </Link> */}

           <form action="" onSubmit={sendMessage}>
               <input type="text" 
               value={message}
               onChange={event=>setMessage(event.target.value)}
               onKeyPress={event=>event.key==='Enter'? sendMessage(event) : null}/>

               <button>
                   send Message
               </button>

           </form>
            
        </div>
    )
}

export default Chat
