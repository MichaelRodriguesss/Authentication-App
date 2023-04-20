import Image from "next/image";
import Link from "next/link";
import styles from "../styles/profile.module.scss";
import avatar from "../assets/images/profile-pic-test.jpg";
import Header from "../components/Header/Header";

import { useState } from "react";
import { usePrivateRouter } from "@/hooks/usePrivateRouter";

export default function Home() {
  const [dropdown, setDropdown] = useState(false);

  const { isAuthenticated } = usePrivateRouter();

  if (!isAuthenticated) return <div />;

  return (
    <>
      <Header dropdown={dropdown} setDropdown={setDropdown} />

      <nav className={styles.navigation}>
        <strong>Personal info</strong>
        <p>Basic info, like your name and photo</p>
      </nav>

      <section className={styles.card}>
        <div className={styles.containerCard}>
          <div className={styles.profile}>
            <div className={styles.profileTitle}>
              <h6>profile</h6>
              <p>Some info may be visible to other people</p>
            </div>
            <div className={styles.buttonEdit}>
              <Link href="/edit" className={styles.linkEdit}>
                Edit
              </Link>
            </div>
          </div>

          <div className={styles.photo}>
            <p>Photo</p>
            <Image src={avatar} alt="avatar" className={styles.avatarPicture} />
          </div>

          <div className={styles.info}>
            <p>Name</p>
            <span>Xanthe Neal</span>
          </div>

          <div className={styles.info}>
            <p>Bio</p>
            <span>
              I am a software developer and a big fan of devchallenges...
            </span>
          </div>

          <div className={styles.info}>
            <p>Phone</p>
            <span>40028922</span>
          </div>

          <div className={styles.info}>
            <p>Email</p>
            <span>michaeledavi12@gmail.com</span>
          </div>

          <div className={styles.password}>
            <p>password</p>
            <span>**************</span>
          </div>
        </div>
      </section>
    </>
  );
}
