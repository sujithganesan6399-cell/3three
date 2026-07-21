
export default function Profile({ user }) {
  
  if (!user) {
    return <p>Wait, I don't have the data yet!</p>;
  }

  return (
    <div>
        <img
        src={user.image}
        />
      <h1>Name: {user.name}</h1>
      <h1>Email: {user.email}</h1>
    </div>
  );
}