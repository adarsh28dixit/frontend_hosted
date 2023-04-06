import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClassContext } from "../Context";


export default function Home() {
  const { user } = useContext(ClassContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if(user){
      navigate('/main')
    }
  },[])
  const signinClick = () => {
    navigate("/signin");
  };

  const registerClick = () => {
    navigate("/register");
  };
  return (
    <>
      <h2>Pls signin to Yellow class!</h2>
      <div className="home-buttons">
        <button type="button" className="btn btn-primary" onClick={signinClick}>
          Login
        </button>
        <button type="button" className="btn btn-secondary" onClick={registerClick}>
          Register
        </button>
      </div>
    </>
  );
}