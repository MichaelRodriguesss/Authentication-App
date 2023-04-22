import { Api } from "@/providers/Api/api";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export const usePrivateRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = useRouter();

  const verifyToken = useCallback(async () => {
    await Api.get("/api/users/verify")
      .then(() => {
        setIsAuthenticated(true);
      })
      .catch(() => router.push("/login"));
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userAuthentication") ?? "{}");

    if (!user.token) {
      router.push("/login");
      return;
    }

    Api.defaults.headers.Authorization = `Bearer ${user.token}`;
    verifyToken();
  }, [verifyToken]);

  return { isAuthenticated };
};
