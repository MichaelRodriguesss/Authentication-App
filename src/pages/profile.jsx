import Image from "next/image";
import styles from "../styles/profile.module.scss";
const logo = require("../assets/images/devchallenges.png");
const avatar = require("../assets/images/profile-pic-test.jpg");
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";

export default function Home() {
  return (
    <>
      <header className={styles.containerheader}>
        <div className={styles.header_items}>
          <Image src={logo} alt="devchallenges" className={styles.headerlogo} />
          <h1>devchallenges</h1>
        </div>

        <div className={styles.avatar}>
          <Image src={avatar} alt="avatar" className={styles.avatarpicture} />
          <strong>Xanthe Neal</strong>
          <MdOutlineArrowDropDown className={styles.arrow} />
        </div>
      </header>

      <nav className={styles.navigation}>
        <strong>Personal info</strong>
        <p>Basic info, like your name and photo</p>
      </nav>

      <section className={styles.card}>
        <div className={styles.profile}>
          <div className={styles.profiletitle}>
            <h6>profile</h6>
            <p>Some info may be visible to other people</p>
          </div>
          <div className={styles.buttonedit}>
            <button>Edit</button>
          </div>
        </div>

        <div className={styles.photo}>
          <p>Photo</p>
          <Image src={avatar} alt="avatar" className={styles.avatarpicture} />
        </div>

        <div className={styles.info}>
          <p>Name</p>
          <strong>Xanthe Neal</strong>
        </div>

        <div className={styles.info}>
          <p>Bio</p>
          <strong>
            I am a software developer and a big fan of devchallenges...
          </strong>
        </div>

        <div className={styles.info}>
          <p>Phone</p>
          <strong>40028922</strong>
        </div>

        <div className={styles.info}>
          <p>Email</p>
          <strong>michaeledavi12@gmail.com</strong>
        </div>

        <div className={styles.password}>
          <p>password</p>
          <strong>**************</strong>
        </div>
      </section>
    </>
  );
}
