import React, { useContext, useEffect, useState } from "react";
import Wrapper from "../components/layout/Wrapper";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

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

        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token',response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login',{ email,password})
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token',response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if(token){
      navigate('/');
    }
  },[token]);

  return (
    <Wrapper>
      <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <form
          onSubmit={onSubmitHandler}
          className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-gray-100"
        >
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome to <span className="text-[#0D7A57]">FoodExpress</span>
            </h2>
            <p className="text-gray-500 text-sm">
              {currentState === "Login" 
                ? "Sign in to continue to your account" 
                : "Create a new account to get started"
              }
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            {currentState === "Sign Up" && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  onChange={(e) => setName(e.currentTarget.value)}
                  type="text"
                  value={name}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7A57]/20 focus:border-[#0D7A57] transition-all duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                onChange={(e) => setEmail(e.currentTarget.value)}
                type="email"
                value={email}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7A57]/20 focus:border-[#0D7A57] transition-all duration-300"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                onChange={(e) => setPassword(e.currentTarget.value)}
                type="password"
                value={password}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7A57]/20 focus:border-[#0D7A57] transition-all duration-300"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          {/* Links */}
          <div className="flex justify-between items-center text-sm">
            <button 
              type="button"
              className="text-[#0D7A57] hover:text-[#0D7A57]/80 transition-colors duration-300"
            >
              Forgot password?
            </button>
            <button
              type="button"
              onClick={() => setCurrentState(currentState === "Login" ? "Sign Up" : "Login")}
              className="text-[#0D7A57] hover:text-[#0D7A57]/80 transition-colors duration-300"
            >
              {currentState === "Login" ? "Create account" : "Login here"}
            </button>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden text-white font-medium bg-[#0D7A57] rounded-lg group hover:scale-[1.02] transition-all duration-300"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
              <span className="relative flex items-center justify-center gap-2">
                {currentState === "Login" ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Sign In
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Sign Up
                  </>
                )}
              </span>
            </button>
          </div>

          {/* Bottom Decoration */}
          <div className="pt-4">
            <div className="relative">
             
              
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Login;