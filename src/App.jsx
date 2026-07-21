import Profile from './component/profile';
import { useState } from 'react';
import Errormgs from './component/useref';

export default function App() {
  const [activeScreen, setActiveScreen] = useState("home");
  const [userData, setUserData] = useState(null);

const backgroundStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #001621 10%, #ff4103 100%)", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0
  };

  const glassBoxStyle = {
    background: "rgba(255, 255, 255, 0.15)",     
    backdropFilter: "blur(12px)",                
    WebkitBackdropFilter: "blur(12px)",          
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
    borderRadius: "20px",                        
    padding: "40px",
    color: "white",
    width: "350px",
    textAlign: "center"
  };

  const btnStyle = {
    padding: "12px", background: "rgba(255, 255, 255, 0.25)",
    color: "white", border: "1px solid rgba(255,255,255,0.5)", borderRadius: "8px",
    cursor: "pointer", fontWeight: "bold", fontSize: "16px", marginTop: "15px"
  };

  function handleLoginSuccess(data) {
    setUserData(data);             
    setActiveScreen("profile");    
  }

  if (activeScreen === "Errormgs") {
    return (
      <div className="App" style={backgroundStyle}>
        <Errormgs moveToProfile={handleLoginSuccess} />
        
        <button onClick={() => setActiveScreen("home")} style={btnStyle}>Go Back Home</button>
      </div>
    );
  }


  else if (activeScreen === "home") {
    return (
      <div className="App" style={backgroundStyle}>
        <h1 style={{marginBottom:"10px",color:'white'}} >Welcome to the App</h1>
        <button onClick={() => setActiveScreen("Errormgs")}style={btnStyle}>Sign In</button>
      </div>
    );
  }

  else if (activeScreen === "profile") {
    return (
      <div className="App" style={backgroundStyle}>
        <Profile user={userData} goBack={() => setActiveScreen("home")} />
      </div>
    );
  }

  
}