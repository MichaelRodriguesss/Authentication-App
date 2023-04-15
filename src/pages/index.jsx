import styles from "../styles/index.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/devchallenges.png";
import google from "../assets/images/Google.svg";
import facebook from "../assets/images/Facebook.svg";
import twitter from "../assets/images/Twitter.svg";
import github from "../assets/images/Github.svg";

import RegisterForm from "../components/Form/Register";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <Image src={logo} alt="devchallenges" className={styles.logo} />
          <h1>devchallenges</h1>
        </div>

        <div className={styles.text}>
          <h6>Join thousands of learners from around the world</h6>
        </div>

        <div className={styles.textTwo}>
          <p>
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </p>
        </div>

        <div className={styles.inputContainer}>
          <RegisterForm />

          <div className={styles.socialText}>
            <p>or continue with these social profile</p>
          </div>

          <div className={styles.socialIcons}>
            <button>
              <Image src={google} alt="Google" />
            </button>
            <button>
              <Image src={facebook} alt="Facebook" />
            </button>
            <button>
              <Image src={twitter} alt="Twitter" />
            </button>
            <button>
              <Image src={github} alt="Github" />
            </button>
          </div>

          <div className={styles.memberLink}>
            <p>
              Already a member?{" "}
              <Link href="/login" className={styles.linkLogin}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
