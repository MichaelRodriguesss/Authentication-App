import Image from "next/image";
import Link from "next/link";
import styles from "../styles/edit.module.scss";
import Header from "../components/Header/Header";
import { IoIosArrowBack } from "react-icons/io";
import { MdPhotoCamera } from "react-icons/md";
import Modal from "../components/Modal/Modal";
import { useState } from "react";
import Edit from "../components/Validation/EditValidation";

export default function Home() {
  const [dropdown, setDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [avatar, setAvatar] = useState(
    "https://wallpapercave.com/wp/wp9566480.png"
  );

  const myLoader = () => {
    return "https://wallpapercave.com/wp/wp9566480.png";
  };

  return (
    <>
      <Header dropdown={dropdown} setDropdown={setDropdown} />

      <nav className={styles.navigationEdit}>
        <Link href="/profile" className={styles.navigationLink}>
          <IoIosArrowBack className={styles.arrow} />
          Back
        </Link>
      </nav>

      <section className={styles.card}>
        <div className={styles.containerCard}>
          <div className={styles.profile}>
            <div className={styles.profileTitle}>
              <h6>Change info</h6>
              <p>Changes will be reflected to every services</p>
            </div>
          </div>

          <div className={styles.photoContainer}>
            <div className={styles.photo}>
              <button onClick={() => setIsOpen(true)}>
                <Image
                  loader={myLoader}
                  unoptimized={true}
                  src={avatar}
                  alt="avatar"
                  width={20}
                  height={20}
                  className={styles.avatarPicture}
                />
              </button>
              {isOpen && <Modal setIsOpen={setIsOpen} setAvatar={setAvatar} />}
              <MdPhotoCamera
                className={styles.photoIcon}
                onClick={() => setIsOpen(true)}
              />
            </div>
            <p>Change photo</p>
          </div>
          <Edit />
        </div>
      </section>
    </>
  );
}
