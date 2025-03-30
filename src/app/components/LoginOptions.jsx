import { useState, useEffect } from "react";

export default function LoginOptions({ email, setEmail }) {
  const [rememberMe, setRememberMe] = useState(false);
 
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedRememberMe = localStorage.getItem("rememberMe") === "true";

    if (savedRememberMe) {
      setEmail(savedEmail || "");
      setRememberMe(savedRememberMe);
    }
  }, []);

  const handleRememberMe = (e) => {
    const isChecked = e.target.checked;
    setRememberMe(isChecked);

    if (isChecked) {
      localStorage.setItem("email", email);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("email");
      localStorage.setItem("rememberMe", "false");
    }
  };

  return (
    <div className="loginOptions">
      <label className="loginRemember">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={handleRememberMe}
        />
        Remember Me
      </label>
    </div>
  );
}
