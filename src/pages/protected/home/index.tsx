import React, { useEffect } from "react";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";

const AdminHome = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    console.log("Token: ", token)

    if (!token) {
      router.replace("/protected/login");
      return;
    }

    const validateToken = async (token: string) => {
      try {
        const res = await fetch("/api/verify-token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        if (!res.ok) {
          throw new Error("Token validation failed");
          router.replace("/protected/login");
        }
      } catch (error) {
        console.error(error);
        router.replace("/protected/login");
      }
    };

    validateToken(token);
  }, [router]);

  return <div>AdminHome</div>;
};

export default AdminHome;
