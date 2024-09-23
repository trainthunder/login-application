import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type Props = {};

const LoginForm = ({}: Props) => {
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fakeApiLogin = (isEmail: string, isPassword: string) => {
      if (isEmail === "admin@admin.com" && isPassword === "adminpassword") {
        return "fake-jwt-token";
      }
      return null;
    };
    const token = fakeApiLogin(isEmail, isPassword);

    if (token) {
      localStorage.setItem("authToken", token);
      toast.success("Success Login");
      navigate("/home");
    } else {
      toast.error("Email or Password Is Invalid!");
    }
  };
  return (
    <form
      action=""
      className="w-full flex flex-col mt-[30px] gap-[20px] items-center"
      onSubmit={handleSubmit}
    >
      {/** Input Email Section Start */}
      <div className="w-full h-[40px] border-[1px] rounded-lg border-gray-300 flex items-center px-[10px] py-[5px] gap-[10px]">
        {/** Icon Mail Start */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-5 text-gray-400"
        >
          <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        {/** Icon Mail End */}

        {/** Input Email Start */}
        <input
          type="email"
          className="w-full h-full outline-none font-nunito-sans text-[14px] placeholder:font-nunito-sans placeholder:text-[14px]"
          placeholder="Email"
          value={isEmail}
          onChange={(e) => setIsEmail(e.target.value)}
        />
        {/** Input Email End */}
      </div>
      {/** Input Email Section End */}

      {/** Input Password Section Start */}
      <div className="w-full h-[40px] border-[1px] rounded-lg border-gray-300 flex items-center px-[10px] py-[5px] gap-[10px]">
        {/** Icon Password Start */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-5 text-gray-400"
        >
          <path d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
        </svg>
        {/** Icon Password End */}

        {/** Input Password Start */}
        <input
          type={showPassword ? "text" : "password"}
          className="w-full h-full outline-none font-nunito-sans text-[14px] placeholder:font-nunito-sans placeholder:text-[14px]"
          placeholder="Password"
          value={isPassword}
          onChange={(e) => setIsPassword(e.target.value)}
        />
        {/** Input Password End */}

        {/** Icon Show Password Start */}
        {!showPassword ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-5 text-gray-400 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-5 text-gray-400 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <path d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
          </svg>
        )}
        {/** Icon Show Password End */}
      </div>
      {/** Input Password Section End */}
      <button className="w-full h-[40px] mt-[20px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500">
        <p className="font-nunito-sans font-bold text-[16px] text-white">
          LOGIN
        </p>
      </button>
    </form>
  );
};

export default LoginForm;
