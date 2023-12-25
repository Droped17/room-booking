import { useRef } from "react";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import axios from "axios";

export default function RegisterPage() {
  const inputRefs = {
    firstName: useRef(),
    lastName: useRef(),
    email: useRef(),
    password: useRef(),
    confirmPassword: useRef(),
    phone: useRef(),
  };
  
  const handleRegister = async (e) => {
    e.preventDefault();
    const inputData = {
      firstName: inputRefs.firstName.current.value,
      lastName: inputRefs.lastName.current.value,
      email: inputRefs.email.current.value,
      password: inputRefs.password.current.value,
      confirmPassword: inputRefs.confirmPassword.current.value,
      phone: inputRefs.phone.current.value,
    };
    console.log("DATA:", inputData);
    const res = await axios.post("http://localhost:1112/authen/register",inputData)
    // console.log(res);
  };

  return (
    <div className="md:flex md:h-[100vh] sm:h-[100%] md:flex-row sm:flex-col items-center">
      <section className="flex-1 flex flex-col justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </section>
      <section className="flex-1 flex flex-col justify-center border p-5">
        <form action="" className="px-5">
          <div className="mb-6 flex flex-col gap-3">
            <MyInput
              text={`FirstName`}
              type={`text`}
              inputref={inputRefs.firstName}
              style={``}
            />
            <MyInput
              text={`LastName`}
              type={`text`}
              inputref={inputRefs.lastName}
              style={``}
            />
            <MyInput
              text={`Email`}
              type={`email`}
              inputref={inputRefs.email}
              style={``}
            />
            <MyInput
              text={`Password`}
              type={`password`}
              inputref={inputRefs.password}
              style={``}
            />
            <MyInput
              text={`Confirm Password`}
              type={`password`}
              inputref={inputRefs.confirmPassword}
              style={``}
            />
            <MyInput
              text={`Phone`}
              type={`text`}
              inputref={inputRefs.phone}
              style={``}
            />
          </div>
          <div className="text-center">
            <MyButton
              text={`Register`}
              onclick={handleRegister}
              style={`bg-green-500 text-white rounded-md`}
            />
          </div>
        </form>
      </section>
    </div>
  );
}
