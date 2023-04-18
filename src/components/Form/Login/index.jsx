import { useForm } from "react-hook-form";
import styles from "../../../styles/index.module.scss";
import { FaEnvelope } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { Api } from "../../../providers/Api/api";
import Router from "next/router";
import { toast } from "react-toastify";

const LoginForm = () => {
  const { push } = Router;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      const response = await Api.post("/api/users/login", {
        email: data.email,
        password: data.password,
      });
      localStorage.setItem("userAuthentication", JSON.stringify(response.data));
      push("/profile");
      toast.success("User logged successfully!");
      return console.log(response);
    } catch (err) {
      toast.error("Error logging user!");
      return console.log(err);
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
        <button>Start coding now</button>
      </div>
    </form>
  );
};

export default LoginForm;
