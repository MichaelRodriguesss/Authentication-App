import { useForm } from "react-hook-form";
import styles from "../../../styles/index.module.scss";
import { FaEnvelope } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { Api } from "../../../providers/Api/api";
import Router from "next/router";
import { toast } from "react-toastify";
import { Loading } from "../../../components/Loading/Loading";
import { useState } from "react";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      setLoading(true);
      const response = await Api.post("/api/users/login", {
        email: data.email,
        password: data.password,
      });

      localStorage.setItem("userAuthentication", JSON.stringify(response.data));
      Api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      Router.push("/profile");
      setLoading(false);
      return toast.success("User logged successfully!");
    } catch (err) {
      setLoading(false);
      toast.error("Error logging user!");
    }
  };

  const registerOptions = {
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
    },
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className={styles.inputName}>
        <FaEnvelope className={styles.icon} />
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...register("email", registerOptions.email)}
        />
      </div>

      <p style={{ color: "red", fontSize: "1.6rem" }}>
        {errors?.email && errors.email.message}
      </p>

      <div className={styles.inputPassword}>
        <GiPadlock className={styles.icon} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register("password", registerOptions.password)}
        />
      </div>

      <p style={{ color: "red", fontSize: "1.6rem" }}>
        {errors?.password && errors.password.message}
      </p>

      <div className={styles.registerBtn}>
        <button>{loading ? <Loading /> : "Login"}</button>
      </div>
    </form>
  );
};

export default LoginForm;
