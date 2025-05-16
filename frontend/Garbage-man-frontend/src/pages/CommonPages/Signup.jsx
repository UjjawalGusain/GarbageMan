import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useUserAuth } from '../../context/UserAuthContextProvider';

const Signup = () => {

	const {register, handleSubmit} = useForm();

	const {signUp} = useUserAuth();

  return (
    <form>
			
			<div>
				<label>Name: </label>
				<input {...register("name", { required: "Name is required" })} type='text' />
				{errors.name && <p>{errors.name.message}</p>}
			</div>

			<div>
				<label>Age: </label>
				<input {...register("age")} type='number' />
				{errors.age && <p>{errors.age.message}</p>}
			</div>

			<div>
				<label>Email: </label>
				<input {...register("email", { required: "Email is required" })} type='email' />
				{errors.email && <p>{errors.email.message}</p>}
			</div>

			<div>
				<label>Password: </label>
				<input {...register("password", { required: "Password is required" })} type='password' />
				{errors.password && <p>{errors.password.message}</p>}
			</div>

		</form>
  )
}

export default Signup