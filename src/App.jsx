import Profile from './component/profile';
import { useState } from 'react';
import Errormgs from './component/useref';

export default function App() {
  const [activeScreen, setActiveScreen] = useState("home");
  const [userData, setUserData] = useState(null);

  function handleLoginSuccess(data) {
    setUserData(data);             
    setActiveScreen("profile");    
  }

  if (activeScreen === "Errormgs") {
    return (
      <div className="App">
        <Errormgs moveToProfile={handleLoginSuccess} />
        
        <button onClick={() => setActiveScreen("home")}>Go Back Home</button>
      </div>
    );
  }


  else if (activeScreen === "home") {
    return (
      <div className="App">
        <h1>Welcome to the App</h1>
        <button onClick={() => setActiveScreen("Errormgs")}>Sign In</button>
      </div>
    );
  }

  else if (activeScreen === "profile") {
    return (
      <div className="App">
        <Profile user={userData} goBack={() => setActiveScreen("home")} />
      </div>
    );
  }

}