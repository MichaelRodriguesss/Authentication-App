import Image from "next/image";
import Link from "next/link";
import styles from "../styles/edit.module.scss";
const avatar = require("../assets/images/profile-pic-test.jpg");
import Header from "../components/Header/Header";
import { IoIosArrowBack } from "react-icons/io";
import { MdPhotoCamera } from "react-icons/md";

import { useState } from "react";

export default function Home() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <Header dropdown={dropdown} setDropdown={setDropdown} />

      <nav className={styles.navigationedit}>
        <Link href="/profile" className={styles.navigation_link}>
          <IoIosArrowBack className={styles.arrow} />
          Back
        </Link>
      </nav>

      <section className={styles.card}>
        <div className={styles.containercard}>
          <div className={styles.profile}>
            <div className={styles.profiletitle}>
              <h6>Change info</h6>
              <p>Changes will be reflected to every services</p>
            </div>
          </div>

          <div className={styles.photo}>
            <div className={styles.ola}>
              <Image
                src={avatar}
                alt="avatar"
                className={styles.avatarpicture}
              />
              <MdPhotoCamera className={styles.photoicon} />
            </div>
            <p>Change photo</p>
          </div>

          <div className={styles.info}>
            <p>Nome</p>
            <input type="text" placeholder="Enter your name..." />
          </div>

          <div className={styles.info}>
            <p>Bio</p>
            <textarea
              placeholder="Enter your bio..."
              className={styles.bioinput}
            />
          </div>

          <div className={styles.info}>
            <p>Phone</p>
            <input type="tel" placeholder="Enter your phone..." />
          </div>

          <div className={styles.info}>
            <p>Email</p>
            <input type="text" placeholder="Enter your email..." />
          </div>

          <div className={styles.info}>
            <p>Password</p>
            <input type="password" placeholder="Enter your password..." />
          </div>
          <div className={styles.info}>
            <button>Save</button>
          </div>
        </div>
      </section>
    </>
  );
}
