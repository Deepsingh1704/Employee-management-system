import { useState } from "react";

const Login = ({ handleLogin }) => {
  // console.log(handleLogin);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="border-2 border-emerald-600 flex flex-col items-center justify-center p-20 rounded-xl">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full px-4 py-2 placeholder:text-gray-500 mb-1"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
          />
          <input
            required
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full px-4 py-2 placeholder:text-gray-500 mt-3"
            type="password"
            value={password}
            autoComplete="off"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter your password"
          />
          <button className="bg-emerald-400 px-8 py-2 rounded-full text-lg mt-5 border-none outline-none w-full placeholder:text-2xl text-white hover:bg-emerald-700 transition duration-400 ">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
