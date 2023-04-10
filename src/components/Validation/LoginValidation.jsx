import { useForm } from "react-hook-form";
import styles from "../../styles/index.module.scss";
import { FaEnvelope } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};

  const registerOptions = {
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
    },
  };

  return (
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
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
