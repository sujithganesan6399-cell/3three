import { useRef, useState } from 'react';

export default function CheckoutForm() {
  const inputRef = useRef([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fileds = [
    { label: 'Name', name: 'name' },
    { label: 'Email', name: 'email' },
    { label: 'Password', name: 'password' },
  ];

  function handleSubmit() {
    for (let i = 0; i < fileds.length; i++) {
      
      const currentBox = inputRef.current[i];
      
      if (currentBox.value === "") {
        
        setErrorMessage(`⚠️ Please enter your ${fileds[i].label}!`);
        
        currentBox.focus();
        
               return; 
      }
    }

    setErrorMessage(""); 
    alert("Success! All fields are filled out.");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Complete Your Order</h2>
      
      {fileds.map((field, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <label style={{ display: "block" }}>{field.label}:</label>
          
          {/* We push each HTML input directly into our array of refs */}
          <input 
            ref={(el) => inputRef.current[index] = el} 
            name={field.name} 
          />
        </div>
      ))}
      
      {/* This is where the error message will show up */}
      <p style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</p>
      
      <button onClick={handleSubmit}>Submit Order</button>
    </div>
  );
}