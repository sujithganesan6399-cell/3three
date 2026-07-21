export default function Profile({ user, goBack }) {
  if (!user){
    return (
      <div style={{ padding: "20px", border: "2px solid red" }}>
        <h2>Error</h2>
        <p>No user data available. Please log in first.</p>
        <button onClick={goBack}>Go Back</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", border: "2px solid green" }}>
      <h2>Welcome, {user.name}!</h2>
      <p><strong>Your registered email is:</strong> {user.email}</p>
      
      <button onClick={goBack}>Log Out & Go Back</button>
    </div>
  );
}