import React, { useContext, useEffect, useState } from "react";
import Wrapper from "../components/layout/Wrapper";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { setToken, token, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        // console.log(response.data);

        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token',response.data.token);

        }else{
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login',{ email,password})
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token',response.data.token);
        }else{
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }

  };


  useEffect(()=>{
    if(token){
      navigate('/');
    }
  },[token]);


  return (
    <Wrapper>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-400 space-y-6 p-4 py-15"
      >
        {/* Name Input - Only for Sign Up */}

        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-[#0D7A57] text-3xl">
            {currentState}
          </p>
        </div>
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            onChange={(e) =>setName(e.currentTarget.value) }
            type="text"
            value={name}
            className="w-full px-3 rounded-sm   py-2 border border-gray-500 "
            placeholder="Name"
            required
          />
        )}
        <input
          onChange={(e) => setEmail(e.currentTarget.value) }
          type="email"
          value={email}
          className="w-full px-3 rounded-sm py-2 border border-gray-500 "
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => setPassword(e.currentTarget.value) }
          type="password"
          value={password}
          className="w-full px-3 rounded-sm py-2 border border-gray-500 "
          placeholder="Password"
          required
        />
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forgot your password?</p>
          {currentState === "Login" ? (
            <p
              className="cursor-pointer"
              onClick={() => setCurrentState("Sign Up")}
            >
              Create account
            </p>
          ) : (
            <p
              className="cursor-pointer"
              onClick={() => setCurrentState("Login")}
            >
              Login Here
            </p>
          )}
        </div>
        <button className="bg-[#0D7A57] rounded-sm text-white font-light px-8 py-2 mt-4">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </Wrapper>
  );
};

export default Login;
