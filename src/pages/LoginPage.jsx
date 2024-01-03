import { useRef } from "react";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
// import axios from "../config/axios";
import axios from "axios";

export default function LoginPage() {
  const inputRefs = {
    email: useRef(),
    password: useRef(),
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const inputData = {
        email: inputRefs.email.current.value,
        password: inputRefs.password.current.value,
      };
      console.log(inputData);

      const result = await axios.post(
        "/authen/login",
        inputData
      );

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:flex md:h-[100vh] md:flex-row sm:flex-col items-center">
      <section className="flex-1 flex flex-col justify-center items-center sm:h-[50vh]">
        <img
          src="https://plus.unsplash.com/premium_photo-1678240508014-d1ab7345bfe6?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </section>
      <section className="flex-1 flex flex-col justify-center border p-5 sm:h-[50vh]">
        <form action="" className="px-5">
          <div className="mb-6 flex flex-col gap-3">
            <MyInput type={`text`} text={`Email`} inputref={inputRefs.email} />
            <MyInput
              type={`password`}
              text={`Password`}
              inputref={inputRefs.password}
            />
            <MyButton
              onclick={handleLogin}
              text={`Login`}
              style={`bg-green-500 text-white`}
            />
          </div>
        </form>
      </section>
    </div>
  );
}
