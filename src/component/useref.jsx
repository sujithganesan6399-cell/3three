import { useRef, useState } from 'react';
import {context} from 'react';
import Profile from './profile';

export default function CheckoutForm() {
  const inputRef = useRef([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [useProfile,setUseProfile] = useState("home");

const fileds = [
    { label: 'Name', name: 'name' },
    { label: 'Email', name: 'email' },
    { label: 'Password', name: 'password' },
  ];

  function moveToProfile() {
        setUseProfile("profile");
        return;
    }
    
  function handleSubmit() {
    const profileFunc=moveToProfile;
    if (profileFunc === true) {
    for (let i = 0; i < fileds.length; i++) {
      
      const currentBox = inputRef.current[i];
      
      if (currentBox.value === "") {
        
        setErrorMessage(`⚠️ Please enter your ${fileds[i].label}!`);
        
        currentBox.focus();
        
               return; 
      }
    }
}
    setErrorMessage(""); 
    alert("Success! All fields are filled out.");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      {fileds.map((field, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <label style={{ display: "block" }}>{field.label}:</label>
          <input 
            ref={(el) => inputRef.current[index] = el} 
            name={field.name} 
          />
        </div>
      ))}
      
      <p style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</p>
      
      <button onClick={moveToProfile}>Submit Order</button>
    </div>
  );
}