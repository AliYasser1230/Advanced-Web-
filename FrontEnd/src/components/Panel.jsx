import React from 'react'
import {useState} from 'react'
import axios from "axios";
import panel from '../css/panel.css'

const Panel = () => {

    const [users,setUsers] = useState([])
    const [email, setEmail] = useState('')
    const [oldEmail, setOldEmail] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    const [info, setInfo] = useState([])

    const getUsers = async (e)=>{
        e.preventDefault();
        try {
          await axios.get("http://localhost:5050/getallusers")
          .then(res=>{let data = setUsers(res.data)})
        }
        
        catch(error)
        {
            console.log(error)
        }
        console.log(users)
    }
    const getUser = ()=>{
        users.map((user)=>{
            
            if(user.email == email)
            {
                console.log("in")
                setInfo(
                    {
                        name: user.name,
                        email: user.email,
                        password: user.password
                    }
                )
                console.log(info);
            }
        })
    }
    const changeEmail = async (e)=>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:5050/updatemail",{oldEmail:oldEmail, newEmail:newEmail})
        }
        catch(error)
        {
            console.log(error);
        }
    }
    const deleteUser = async (e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:5050/deleteuser",{email: email})
        }
        catch(error)
        {
            console.log(error);
        }
    }
    
  return (
    <div>  
        <div>
        <div className='getuser'><button onClick={getUsers} className='getuser-button getuser'>Get Users</button></div>
        <table className='flex-1'>
            <tr className='flex-2'>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
            {
                users.map((user)=>{
                    return(
                    <tr className='flex-3'>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                    </tr>
                    )
                    
                })
            }
        </table>
        </div>
        <div className='form1'>
            <h3>Get User By Email</h3>
            <input type="text" className='form1-data'onChange={e=>setEmail(e.target.value)}/>
            <button onClick={getUser}  className='finduser-button'>Find user</button>
        </div>
        {
            
            <div className='output1'>
                <p>{info.email}</p>
                <p>{info.name}</p>
                <p>{info.password}</p>
            </div>
        }
        <div className='form1'>
            <h3>Change user Email</h3>
            <label>Old Email: <input type="text" className='form1-data' onChange={e=>setOldEmail(e.target.value)}/></label>
            <label>New Email: <input type="text" className='form1-data' onChange={e=>setNewEmail(e.target.value)}/></label>
            <button onClick={changeEmail} className='change-button'>Change!</button>
        </div>
        <div className='form1'>
            <h3>Delete User</h3>
            <label>Email: <input type="text" className='form1-data' onChange={e=>setEmail(e.target.value)}/></label>
            <button onClick={deleteUser}>Delete!</button>
        </div>
       
    </div>
  )
}

export default Panel