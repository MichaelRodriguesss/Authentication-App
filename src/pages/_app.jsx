import "@/styles/globals.scss";
import { Noto_Sans } from "@next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={notoSans.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
