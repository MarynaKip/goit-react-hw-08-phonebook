import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  return (
    <div className="login">
      <form>
        <input type="email" value={email} onChange={handleChangeEmail} />
        <input
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
