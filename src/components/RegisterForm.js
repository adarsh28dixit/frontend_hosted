import React, { useState } from 'react'
import '../App.css';
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export const RegisterForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleRegister = async () => {
        console.log(email, password)
        if (!email || !password) {
            alert("pls fill valid credentials")
        }

        let response = await axios.post('https://firsthostedbackend-production.up.railway.app/users/createUser', { email, password })
        if (response) {
            alert('user registered successfully')
            navigate("/signin");
        } else {
            alert('something went wrong')
        }
    }
    return (
        // <div>

        //         <input type="E-mail" placeholder="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        //         <input type="password" placeholder="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        //         <button type="submit" className="btn" onClick={handleRegister}>
        //             Register
        //         </button>

        // </div>
        <>
            <h3>Create Account</h3>
           
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
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
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleRegister}>
                    Submit
                </button>
           
        </>
    )
}
