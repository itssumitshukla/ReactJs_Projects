const SignUpForm = () => {
  return (
    <div>
      <h1>Sign up with your Email and Password</h1>
      <form onSubmit={() =? {

      }}>
        <label>Display Name</label>
        <input type="text" required />
        <label>Email</label>
        <input type="email" required />
        <label>Password</label>
        <input type="password" required />
        <label>Confirm Password</label>
        <input required />
        <button type="submit"></button>
      </form>
    </div>
  );
};
