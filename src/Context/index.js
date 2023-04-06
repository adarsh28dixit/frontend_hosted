import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ClassContext = createContext();

export const ContextProvider = (props) => {
    const navigate = useNavigate();
    const[user, setUser] = useState();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    
        setUser(userInfo);
    
        // if (!userInfo) {
        //   navigate("/");
        // }
      }, [navigate]);
  return (
    <ClassContext.Provider value={{user, setUser}}>
      {props.children}
    </ClassContext.Provider>
  );
};
