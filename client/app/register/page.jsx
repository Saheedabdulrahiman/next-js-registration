"use client";
import Button from "@/components/LoginButton";
import LoginInput from "@/components/LoginInput";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordMatch, setPasswordMatch] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(true);
      return;
    }
    try {
      const response = await fetch("http://localhost:3010/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Error signing up");
      }

      const data = await response.json();
      console.log(data); // Handle successful signup response
      // Reset the form after successful signup

      localStorage.setItem("token", data.token);
      localStorage.setItem("access", data.token);
      localStorage.setItem("refresh", data.token);

      // Check local storage after a short delay
      setTimeout(() => {
        const storedToken = localStorage.getItem("token");
        console.log("Stored token:", storedToken);
        console.log(localStorage);
      }, 1000);

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      router.push("/content");
    } catch (error) {
      console.error("Error signing up:", error.message);
      // Handle error
    }
  };

  return (
    <>
      <div className="  border  max-md:w-[80%]  md:w-1/2 lg:w-1/4  mt-16  shadow-2xl rounded-2xl py-4  space-y-2 flex flex-col items-center mx-auto ">
        <h2 className=" uppercase font-bold text-lg text-stone-200">
          sign up{" "}
        </h2>
        <p className=" font-light text-stone-400">create your account</p>

        <form className=" flex justify-center" onSubmit={handleSubmit}>
          <div className=" w-[60%] space-y-4 ">
            <LoginInput
              placeholder="name"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            <LoginInput
              placeholder="email"
              type="eamil"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            <LoginInput
              placeholder="password"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            <LoginInput
              placeholder="confirm password"
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <div className=" bg-yellow-00">
              {passwordMatch && (
                <p className=" text-red-600 font-semibold">
                  password must match
                </p>
              )}
            </div>
            <Button label="sign up" type="submit" />
          </div>
        </form>

        <p className="text-stone-200"> or</p>

        <p className="text-stone-200">
          Already have an account ?{" "}
          {/* <Link href="/login" className=" underline text-blue-700 font-semibold mx-1" >
            login
          </Link> */}
          <Link className=" text-blue-500 font-semibold" href="/login">
            login
          </Link>
        </p>
      </div>
    </>
  );
}
