import { useForm } from "react-hook-form";
import styles from "../../../styles/index.module.scss";
import { FaEnvelope } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { BsPencilFill } from "react-icons/bs";
import { Api } from "../../../providers/Api/api";
import Router from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loading } from "../../../components/Loading/Loading";
import { useState } from "react";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = async (data) => {
    try {
      setLoading(true);

      const response = await Api.post("/api/users/", {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      toast.success("User created successfully!");
      Router.push("/login");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err.response.status === 400) {
        return toast.error(err.response.data);
      }
      toast.error("Error creating user!");
    }
  };

  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div className={styles.inputName}>
        <BsPencilFill className={styles.icon} />
        <input
          type="name"
          name="name"
          placeholder="Name"
          {...register("name", registerOptions.name)}
        />
      </div>
      <p style={{ color: "#EB5757", fontSize: "1.6rem" }}>
        {errors?.name && errors.name.message}
      </p>
      <div className={styles.inputEmail}>
        <FaEnvelope className={styles.icon} />
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...register("email", registerOptions.email)}
        />
      </div>
      <p style={{ color: "#EB5757", fontSize: "1.6rem" }}>
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
      <p style={{ color: "#EB5757", fontSize: "1.6rem" }}>
        {errors?.password && errors.password.message}
      </p>
      <div className={styles.registerBtn}>
        <button>{loading ? <Loading /> : "Start coding now"}</button>
      </div>
    </form>
  );
};

export default RegisterForm;
