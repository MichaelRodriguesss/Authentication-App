import Image from "next/image";
import Link from "next/link";
import styles from "../styles/profile.module.scss";
import Header from "../components/Header/Header";
import { Api } from "../providers/Api/api";
import { useEffect, useState } from "react";
import { usePrivateRouter } from "@/hooks/usePrivateRouter";

export default function Profile() {
  const [dropdown, setDropdown] = useState(false);
  const [profile, setProfile] = useState(null);

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

  const { isAuthenticated } = usePrivateRouter();

  if (!isAuthenticated) return <div />;

  const avatar = profile?.src
    ? `https://authentication-app-back-end.up.railway.app/images/${profile?.src}`
    : "https://wallpapercave.com/wp/wp9566480.png";

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
            <Image
              src={avatar}
              width="64"
              height="64"
              alt="avatar"
              loader={({ src }) => src}
              className={styles.avatarPicture}
            />
          </div>

          <div className={styles.info}>
            <p>Name</p>
            <span>{profile?.name}</span>
          </div>

          <div className={styles.info}>
            <p>Bio</p>
            <span>{profile?.bio}</span>
          </div>

          <div className={styles.info}>
            <p>Phone</p>
            <span>{profile?.phone}</span>
          </div>

          <div className={styles.info}>
            <p>Email</p>
            <span>{profile?.email}</span>
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
