"use client"
import React, { useState } from "react";
import styles from "./protected.module.scss";
import { useRouter } from "next/router";
import { Flex, Text, Button, Heading, TextField, IconButton } from '@radix-ui/themes';
import { FaceIcon, LockClosedIcon, EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons'

type LoginData = {
  email: string;
  password: string;
};

const LogIn = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

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

    if (data.auth_error) {
      setLoading(false);
      setSuccess(false);
      setErrorMessage(data.auth_error.message)
    } else if (data.response.message === "successful") {
      setSuccess(true);
      setErrorMessage(data.response.message);
      const token = data.response.token;
      document.cookie = `token=${token}; path=/`;
      console.log(token);
      router.push("/protected/home");
    }

    console.log("Data: ", data);
    setLoading(false);
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
      <div className={styles.loginFormWrapper}>
        <Heading size="8" align="center" as="h1" className={styles.loginFormHeader}>Login to Kalabars</Heading>
        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField.Root className={styles.loginFormInput}>            
            <TextField.Input radius="full" placeholder="Enter email" variant="classic" color="indigo" size={"3"} onChange={(e) => handleInputChange(e, "email")} value={loginData.email}/>
            <TextField.Slot>
              <FaceIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>

          <TextField.Root className={styles.loginFormInput}>            
            <TextField.Input placeholder="Enter password" type={showPassword ? "text" : "password"} variant="classic" color="indigo" radius="full" size={"3"} onChange={(e) => handleInputChange(e, "password")} value={loginData.password}/>
            <TextField.Slot>
              {
                showPassword ? (
                  <IconButton variant="outline"  radius="full" disabled={loginData.password.length <= 1 ? true : false} onClick={(e) => {e.preventDefault(); setShowPassword(!showPassword)}}>
                    <EyeClosedIcon height="16" width="16" />
                  </IconButton>
                ) : (
                    <IconButton variant="outline" radius="full" disabled={loginData.password.length < 1 ? true : false} onClick={(e) => {e.preventDefault(); setShowPassword(!showPassword)}}>
                      <EyeOpenIcon height="16" width="16" />
                  </IconButton>
                )
              }
            </TextField.Slot>
          </TextField.Root>

          <button
            className={styles.loginFormButton} 
            type="submit"
            disabled={loginData.password.length < 1 && loginData.email.length < 1}
          >
            LOG IN
          </button>
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
    </div>
  );
};

export default LogIn;
