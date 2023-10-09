"use client"

import React, { useState } from "react";
import styles from "./protected.module.scss";
import { useRouter } from "next/router";

type LoginData = {
  email: string;
  password: string;
};

const LogIn = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true)

    const logiResponse = await fetch(`/api/hello`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      }),
    });

    const data = await logiResponse.json();

    if(data.auth_error){
      setLoading(false);
      setSuccess(false);
      setErrorMessage(data.auth_error.message)
    } else if(data.response.message === "successful"){
      setSuccess(true);
      setErrorMessage(data.response.message);
      const token = data.response.token;
      document.cookie = `token=${token}; path=/`;
      router.push("/protected/home");      
    }

    console.log("Data: ", data);
    setLoading(false)
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    field: "email" | "password"
  ) {
    e.preventDefault();
    setLoginData({ ...loginData, [field]: e.target.value });
  }

  return (
    <div className={styles.pageWrapper}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={loginData.email}
          onChange={(e) => handleInputChange(e, "email")}
        />
        <input
          placeholder="password"
          value={loginData.password}
          onChange={(e) => handleInputChange(e, "password")}
        />
        <button type="submit">LOG IN</button>
        <div>
          {
            loading && (
              <>Loading...</>
            )
          }
          {
            success === false ? (
              <>{errorMessage}</>
            ) : (
              <>{errorMessage}</>
            )
          }
        </div>
      </form>
    </div>
  );
};

export default LogIn;
