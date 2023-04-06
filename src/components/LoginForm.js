import React, { useContext, useEffect, useState } from 'react'
import '../App.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ClassContext } from '../Context';

export const LoginForm = () => {
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    
    const handleLogin = async() => {
        if(!email || !password){
            alert('Pls fill valid credentials')
        }

        let response = await axios.post('https://firsthostedbackend-production.up.railway.app/users/signinUser', { email, password })
        if (response) {
            console.log(response,'frgthyjui')
             localStorage.setItem("userInfo", JSON.stringify(response.data));
            alert('user loggedin successfully')
            navigate("/main");
        } else {
            alert('something went wrong')
        }
    }
    return (
        // <div>
            
        //     <input type="E-mail" placeholder="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        //         <input type="password" placeholder="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        //         <button type="submit" className="btn" onClick={handleLogin}>
        //             Login
        //         </button>
               
           
        // </div>
        <>
      <h3>Login</h3>
      
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Enter Email</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Enter Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Submit
        </button>
     
    </>
    )
}
