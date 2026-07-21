import { useRef, useState } from 'react';

export const fileds = [
  { label: 'Name', name: 'name' },
  { label: 'Email', name: 'email' },
];

export default function CheckoutForm({ moveToProfile }) {
  const passRef = useRef(null);
  const imgRef = useRef(null);
  const inputRef = useRef([]);
  
  const [errorMessage, setErrorMessage] = useState("");
  const [imgPreview, setImgPreview] = useState(null);

  function imgHandle(e) {
    const imageUplode = e.target.files[0]; // Grab it from the event
    if (imageUplode) {
    setImgPreview(URL.createObjectURL(imageUplode));
    } else {
      setImgPreview(null);
    }
  }

  function handleSubmit() {
    for (let i = 0; i < fileds.length; i++) {
      const currentBox = inputRef.current[i];
      if (currentBox.value === "") {
        setErrorMessage(`⚠️ Please enter your ${fileds[i].label}!`);
        currentBox.focus();
        return; 
      }
    }
    
    if (passRef.current.value === ""){
      setErrorMessage(`⚠️ Please enter your Password!`);
      passRef.current.focus(); 
      return; 
    }

    if (!imgPreview) {
      setErrorMessage(`⚠️ Please upload a profile image!`);
      return;
    }
    
    setErrorMessage(""); 

    const userDetails = {
      name: inputRef.current[0].value,
      email: inputRef.current[1].value,
      password: passRef.current.value,
      image: imgPreview 
    };
    
    moveToProfile(userDetails);
  }

  
  const backgroundStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #001621 10%, #ff4103 100%)", 
    display:"flex",
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

  const inputStyle = {
    width: "90%", padding: "8px", background: "rgba(255, 255, 255, 0.1)",
    border: "none", borderBottom: "2px solid white", color: "white",
    outline: "none", marginBottom: "15px"
  };

  const btnStyle = {
    width: "100%", padding: "12px", background: "rgba(255, 255, 255, 0.25)",
    color: "white", border: "1px solid rgba(255,255,255,0.5)", borderRadius: "8px",
    cursor: "pointer", fontWeight: "bold", fontSize: "16px", marginTop: "15px"
  };

  return (
    <div className='bg'>
    
      <div style={glassBoxStyle}>
        <h2>Login</h2>

        <div style={{ textAlign: "left", marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Profile Picture:</label>
          <input
            type='file'
            ref={imgRef}
            accept='image/*'
            onChange={imgHandle}
          />
          
          {imgPreview && (
            <div style={{ marginTop: "10px", textAlign: "center" }}>
              <img 
                src={imgPreview} 
                alt="Live Preview" 
                style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", border: "2px solid white" }}
              />
            </div>
          )}
        </div>

        {fileds.map((field, index) => (
          <div key={index} style={{ textAlign: "left" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>{field.label}:</label>
            <input 
              ref={(el) => inputRef.current[index] = el} 
              name={field.name} 
              style={inputStyle}
            />
          </div>
        ))}

        <div style={{ textAlign: "left" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Password:</label>
          <input type="password" ref={passRef} style={inputStyle} />
        </div>
        
        <p style={{ color: "#ffcccc", fontWeight: "bold", minHeight: "20px" }}>{errorMessage}</p>
        
        <button onClick={handleSubmit} style={btnStyle}>Submit Order</button>
      </div>
    </div>
  );
}