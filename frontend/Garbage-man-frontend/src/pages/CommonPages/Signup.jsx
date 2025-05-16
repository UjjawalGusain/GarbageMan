import { useForm } from "react-hook-form";
import { useUserAuth } from "../../context/UserAuthContextProvider";
import { getSignedUp } from "../../api/user.api";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signUp } = useUserAuth();

  const onSubmit = async (data) => {
    const { email, password, name, phoneNumber } = data;

    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const location = position.coords;



        try {
    	  const userCredential = await signUp(email, password);
    	  const uid = userCredential.user.uid;

    	  await getSignedUp({ name, email, uid, userCredential, phoneNumber, location });

    	} catch (error) {
    	  console.error("Signup error:", error.message);
    	}
      },
      (error) => {
        console.error("Error fetching location:", error.message);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name: </label>
        <input {...register("name", { required: "Name is required" })} type="text" />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Email: </label>
        <input {...register("email", { required: "Email is required" })} type="email" />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Password: </label>
        <input {...register("password", { required: "Password is required" })} type="password" />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

	  <div>
        <label>Phone Number: </label>
        <input {...register("phoneNumber", { required: "Phone Number is required" })} type="text" />
        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
