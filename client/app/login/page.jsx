"use client";
import Button from "@/components/LoginButton";
import LoginInput from "@/components/LoginInput";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";
import Image from "next/image";
import loginImg from "@/assets/login-img.jpg";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3010/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to login");
      }

      // Set token in local storage
      localStorage.setItem("token", data.token);
      localStorage.setItem("access", data.token);
      localStorage.setItem("refresh", data.token);

      // Check local storage after a short delay
      setTimeout(() => {
        const storedToken = localStorage.getItem("token");
        console.log("Stored token:", storedToken);
        console.log(localStorage);
      }, 1000); // Adjust the delay as needed

      setFormData({
        email: "",
        password: "",
      });
      if (response.ok) {
        // Set token in cookies
        setCookie(null, "token", data.token, {
          maxAge: 30 * 24 * 60 * 60, // 30 days
        });
        router.push("/content");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed. Please try again.");
    }
  };
  return (
    <>
      {/* do the responsive when the sm then image goes */}
      <div className="  flex my-12 mx-auto justify-center w-[70%] font-lexend max-md:w-full lg:mt-24 ">
        <div className=" w-[60%] lg:block hidden  ">
          <Image
            className=" w-full h-full rounded-l-lg"
            src={loginImg}
            alt="live well"
          />
        </div>
        <div className=" w-[40%] border  lg:rounded-r-lg py-2 max-lg:w-3/4 max-lg:rounded-xl  max-sm:border-2  ">
          <div className=" flex justify-end py-4 gap-2 pr-4">
            <button className=" py-1 px-3 rounded-full uppercase text-sm text-white font-bold bg-orange-500 hover:bg-orange-600 active:bg-orange-800 ">
              login{" "}
            </button>
            <Link
              href="/register"
              className=" uppercase font-bold text-sm flex justify-center items-center text-stone-200"
            >
              signup
            </Link>
          </div>
          <h2 className=" text-center text-3xl uppercase my-2 font-bold text-stone-200">
            login{" "}
          </h2>
          <p className=" text-center text-xs text-stone-300 py-3">
            Discover the Science Behind Fitness
          </p>
          <form onSubmit={handleSubmit}>
            <div className=" max-sm:w-3/4 lg:w-[70%] mx-auto space-y-3  max-sm:space-y-2 max-md:px-3 md:px-6  flex flex-col justify-center rounded my-2">
              <LoginInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <LoginInput
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />

              <Button type="submit" label="login" />
            </div>
          </form>

          <p className=" text-center text-stone-200">
            not a member then{" "}
            <Link
              href="/register"
              className=" font-semibold text-blue-700 underline mx-2"
            >
              sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
