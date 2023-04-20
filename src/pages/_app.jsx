import "@/styles/globals.scss";
import { Noto_Sans } from "@next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NextProgress from "nextjs-progressbar";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={notoSans.className}>
        <NextProgress color="#007ba5" startPosition={0.7} />
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
        />
      </main>
    </>
  );
}
