import React, { useState, useEffect } from "react";
import { Chat } from "./Components/Chat";
import { Auth } from "./Components/Auth.js";
import { AppWrapper } from "./Components/AppWrapper";
import Cookies from "universal-cookie";
import "./App.css";


const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");

  if (!isAuth) {
    return (
      <AppWrapper
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        setIsInChat={setIsInChat}
      >
        <Auth setIsAuth={setIsAuth} />
      </AppWrapper>
    );
  }

  return (
         
             <AppWrapper 
                 isAuth={isAuth} 
                 setIsAuth={setIsAuth} 
                 setIsInChat={setIsInChat}>
                   {!isInChat ? (
                     <div className="room">
                       <label> Type room name: </label>
                       <input onChange={(e) => setRoom(e.target.value)} />
                       <button
                         onClick={() => {
                           setIsInChat(true);
                         }}
                       >
                         Enter Chat
                       </button>
                     </div>
                   ) : (
                     <Chat room={room} />
                   )}
                 </AppWrapper>
           
  );
}

export default App;