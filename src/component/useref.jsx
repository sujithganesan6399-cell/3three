import { useRef, useState } from 'react';

export const fileds = [
  { label: 'Name', name: 'name' },
  { label: 'Email', name: 'email' },
];
export default function CheckoutForm({ moveToProfile }) {
    const passRef = useRef(null)
    const imgRef = useRef(null)
  const inputRef = useRef([]);
  const [errorMessage, setErrorMessage] = useState("");

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
        currentBox.focus();
        return; 
    }
    const imageUplode = imgRef.current.files[0]
    let imgUrl
    if(imageUplode){
        imgUrl=URL.createObjectURL(imageUplode)
    }
    else{
        <p>uplode a image </p>
    }
   
    setErrorMessage(""); 

    const userDetails = {
      name: inputRef.current[0].value,
      email: inputRef.current[1].value,
      password:passRef.current.value,
      image:imgUrl
    
    };
   moveToProfile(userDetails);
    
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <input
      type='file'
      ref={imgRef}
      accept='image/*'
      style={{
        width: "100px", 
        height:"100px"
        }}/>
      

      {fileds.map((field, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <label style={{ display: "block" }}>{field.label}:</label>
          <input 
            ref={(el) => inputRef.current[index] = el} 
            name={field.name} 
          />
        </div>
      ))}
      <label>Password</label>
      <input type="password" label="password" className='pass' ref={passRef}/>
      <p style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</p>
      
      <button onClick={handleSubmit}>Submit Order</button>
    </div>
  );
}