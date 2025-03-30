"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginInput from "../components/LoginInput";
import LoginOptions from "../components/LoginOptions";
import LoginButton from "../components/LoginButton";
import "../styles/login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    router.push("./home");
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin} className="loginForm">
        <h1 className="loginTitle">Login</h1>

        <div className="loginContent">
          <LoginInput
            type="email"
            label="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <LoginInput
            type={showPassword ? "text" : "password"}
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <LoginOptions email={email} setEmail={setEmail} />

        <LoginButton />
      </form>
    </div>
  );
}
