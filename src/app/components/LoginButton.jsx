export default function LoginButton() {
  return (
    <>
      <button type="submit" className="loginButton">
        Login
      </button>
      <p className="loginRegister">
        Don't have an account? <a href="../register">Register</a>
      </p>
    </>
  );
}
