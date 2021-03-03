import React,{useContext} from 'react'

import {Link,useParams} from 'react-router-dom'

import {UserContext} from '../../UserContext'

const Chat = () => {
    const {user,setUser}=useContext(UserContext)
    let {room_id,room_name}=useParams()
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
