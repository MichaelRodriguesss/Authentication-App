import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdPersonPin } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import styles from "../../styles/profile.module.scss";
const logo = require("../../assets/images/devchallenges.png");
const avatar = require("../../assets/images/profile-pic-test.jpg");
import Image from "next/image";

export default function Header({ dropdown, setDropdown }) {
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
    </>
  );
}
