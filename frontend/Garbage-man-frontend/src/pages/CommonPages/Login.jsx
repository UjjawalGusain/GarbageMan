import { useForm } from "react-hook-form";
import { useUserAuth } from "../../context/UserAuthContextProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { logIn } = useUserAuth(); 
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      await logIn(email, password);
      navigate("/"); 
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setLoginError("No user found with this email.");
      } else if (error.code === "auth/wrong-password") {
        setLoginError("Incorrect password.");
      } else {
        setLoginError("Login failed. Please try again.");
      }
      console.error("Login error:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email: </label>
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Password: </label>
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      {loginError && <p style={{ color: "red" }}>{loginError}</p>}

      <button type="submit">Sign In</button>
    </form>
  );
};

export default Login;
