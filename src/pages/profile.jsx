import Image from "next/image";
import Link from "next/link";
import styles from "../styles/profile.module.scss";
const logo = require("../assets/images/devchallenges.png");
const avatar = require("../assets/images/profile-pic-test.jpg");
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdPersonPin } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";

import { useState } from "react";

export default function Home() {
  const [dropdown, setDropdown] = useState(false);

  const openPopup = () => {
    setDropdown(!dropdown);
  };

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

          <button onClick={openPopup}>
            {dropdown ? (
              <MdOutlineArrowDropUp className={styles.arrow} />
            ) : (
              <MdOutlineArrowDropDown className={styles.arrow} />
            )}
          </button>

          {dropdown && (
            <>
              <div className={styles.popup}>
                <p className={styles.popupone}>
                  <MdPersonPin className={styles.popupicon} />
                  My Profile
                </p>
                <p className={styles.popuptwo}>
                  <BsPeopleFill className={styles.popupicon} />
                  Group Chat
                </p>

                <div className={styles.logout}>
                  <button>
                    <TbLogout className={styles.popupicon} />
                    Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </header>

      <nav className={styles.navigation}>
        <strong>Personal info</strong>
        <p>Basic info, like your name and photo</p>
      </nav>

      <section className={styles.card}>
        <div className={styles.containercard}>
          <div className={styles.profile}>
            <div className={styles.profiletitle}>
              <h6>profile</h6>
              <p>Some info may be visible to other people</p>
            </div>
            <div className={styles.buttonedit}>
              <Link href="/edit" className={styles.link_edit}>
                Edit
              </Link>
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
        </div>
      </section>
    </>
  );
}
