import "@/styles/globals.scss";
import { Noto_Sans } from "@next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { useEffect } from "react";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleFocus = () => {
      const user = JSON.parse(localStorage.getItem("userAuthentication"));

      // verificar se o token e valido e não se ele é vazio
      if (user.token === "") {
        router.push("/login");
      }
    };
    window.addEventListener("focus", handleFocus);
    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <>
      <main className={notoSans.className}>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          fontSize="1.8rem"
        />
      </main>
    </>
  );
}
