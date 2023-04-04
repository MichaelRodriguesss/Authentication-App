import styles from "../styles/index.module.scss";
import Image from "next/image";
import Link from "next/link";
const logo = require("../assets/images/devchallenges.png");
const google = require("../assets/images/Google.svg");
const facebook = require("../assets/images/Facebook.svg");
const twitter = require("../assets/images/Twitter.svg");
const github = require("../assets/images/Github.svg");
import { FaEnvelope } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";

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

        <div className={styles.text2}>
          <p>
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </p>
        </div>
        <div className={styles.input}>
          <div className={styles.input_name}>
            <FaEnvelope className={styles.icon} />
            <input type="text" placeholder="Email" />
          </div>

          <div className={styles.input_password}>
            <GiPadlock className={styles.icon} />
            <input type="text" placeholder="Password" />
          </div>

          <div className={styles.register_btn}>
            <button>Start coding now</button>
          </div>

          <div className={styles.social_text}>
            <p>or continue with these social profile</p>
          </div>

          <div className={styles.social_icons}>
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

          <div className={styles.member_link}>
            <p>
              Adready a member?{" "}
              <Link href="/login" className={styles.link_login}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
