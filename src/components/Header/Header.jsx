import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdPersonPin } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import styles from "../../styles/profile.module.scss";
import logo from "../../assets/images/devchallenges.png";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Api } from "@/providers/Api/api";

export default function Header({ dropdown, setDropdown }) {
  const [profile, setProfile] = useState(null);

  const openPopup = () => {
    setDropdown(!dropdown);
  };

  const removeToken = () => {
    localStorage.removeItem("userAuthentication");
    toast.success("User logged out successfully!");
    Router.push("/login");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage?.getItem("userAuthentication"));

    const fetchUser = async () => {
      try {
        if (!user) return;
        const response = await Api.get(`/api/users/${user._id}`);
        return setProfile(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  const avatar = profile?.src
    ? `https://authentication-app-back-end.up.railway.app/images/${profile?.src}`
    : "https://wallpapercave.com/wp/wp9566480.png";

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
            <Image
              src={avatar}
              alt="avatar"
              className={styles.avatarPicture}
              width={68}
              height={68}
            />
            <strong>{profile?.name ?? "Not found"}</strong>

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
                  <button onClick={removeToken}>
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
