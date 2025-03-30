export default function LoginInput({ type, icon, label, value, onChange }) {
  return (
    <div className="loginBox">
      <i className={`loginIcon ${icon}`}></i>
      <div className="login__box-input">
        <input
          type={type}
          required
          className="loginInput"
          value={value}
          onChange={onChange}
        />
        <label className="loginLabel">{label}</label>
      </div>
    </div>
  );
}
