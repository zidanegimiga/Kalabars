import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export const useTokenValidation = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");

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
        }
      } catch (error) {
        console.error(error);
        router.replace("/protected/login");
      }
    };

    validateToken(token);
  }, [router]);
};
