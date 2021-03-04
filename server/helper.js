const { model } = require("mongoose")

const users=[]

const addUser=({socket_id,name,user_id,room_id})=>{
    const exist=users.find(user => user.room_id === room_id && user.user_id === user_id)
    if(exist){
        return{error:'User already exist in this room'}
    }

    const user={socket_id,name,user_id,room_id}
    users.push(user)
    console.log('user list',users);

    return {user}


}

module.exports={addUser}