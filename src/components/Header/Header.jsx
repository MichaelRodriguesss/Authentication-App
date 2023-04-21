import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdPersonPin } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import styles from "../../styles/profile.module.scss";
import logo from "../../assets/images/devchallenges.png";
import avatar from "../../assets/images/profile-pic-test.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Header({ dropdown, setDropdown }) {
  const openPopup = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <header className={styles.containerHeader}>
        <div className={styles.headerItems}>
          <Image src={logo} alt="devchallenges" className={styles.headerLogo} />
          <h1>
            <Link href="/">devchallenges</Link>
          </h1>
        </div>

        <div className={styles.avatar}>
          <button onClick={openPopup}>
            <Image src={avatar} alt="avatar" className={styles.avatarPicture} />
            <strong>Xanthe Neal</strong>

            {dropdown ? (
              <MdOutlineArrowDropUp className={styles.arrow} />
            ) : (
              <MdOutlineArrowDropDown className={styles.arrow} />
            )}
          </button>

          {dropdown && (
            <>
              <div className={styles.popup}>
                <p>
                  <MdPersonPin className={styles.popupIcon} />
                  My Profile
                </p>

                <p>
                  <BsPeopleFill className={styles.popupIcon} />
                  Group Chat
                </p>

                <div className={styles.logout}>
                  <button>
                    <TbLogout className={styles.popupIcon} />
                    Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}
