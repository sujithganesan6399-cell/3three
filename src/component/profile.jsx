export default function Profile({ user, goBack }) {
  
  if (!user) {
    return (
      <div style={{ minHeight: "100vh", background: "#001621", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <p>Wait, I don't have the data yet!</p>
      </div>
    );
  }


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
    background: "rgba(255, 255, 255, 0.1)",     
    backdropFilter: "blur(12px)",                
    WebkitBackdropFilter: "blur(12px)",          
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
    borderRadius: "20px",                        
    padding: "40px",
    color: "white",
    width: "350px",
    textAlign: "center"
  };

  const imgStyle = {
    width: "130px", 
    height: "130px", 
    borderRadius: "50%", // Makes the image a perfect circle!
    objectFit: "cover",  // Prevents the image from stretching/squishing
    border: "4px solid rgba(255, 255, 255, 0.5)", 
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    marginBottom: "20px"
  };

  const infoBoxStyle = {
    background: "rgba(0, 0, 0, 0.2)", // Darker glass box for the text
    padding: "15px",
    borderRadius: "12px",
    textAlign: "left",
    marginTop: "20px"
  };

  const btnStyle = {
    width: "100%", padding: "12px", background: "rgba(255, 65, 3, 0.6)",
    color: "white", border: "1px solid rgba(255,255,255,0.4)", borderRadius: "8px",
    cursor: "pointer", fontWeight: "bold", fontSize: "16px", marginTop: "20px"
  };

  return (
    <div className="bg">
      <div style={glassBoxStyle}>
        
        <img src={user.image} alt="User Avatar" style={imgStyle} />
        
        <h2 style={{ margin: "0 0 5px 0", fontSize: "28px", fontWeight: "bold" }}>
          {user.name}
        </h2>
        
        <p style={{ margin: 0, opacity: 0.8 }}>Welcome to your dashboard</p>

        <div style={infoBoxStyle}>
          <p style={{ margin: "5px 0", fontSize: "15px" }}>
            <span style={{ opacity: 0.7 }}>Email:</span> <br/>
            <strong>{user.email}</strong>
          </p>
          <hr style={{ borderColor: "rgba(255,255,255,0.1)", margin: "10px 0" }} />
          <p style={{ margin: "5px 0", fontSize: "15px" }}>
            <span style={{ opacity: 0.7 }}>Password:</span> <br/>
            <strong>{user.password}</strong>
          </p>
        </div>

        {goBack && (
          <button onClick={goBack} style={btnStyle}>Log Out</button>
        )}

      </div>
    </div>
  );
}