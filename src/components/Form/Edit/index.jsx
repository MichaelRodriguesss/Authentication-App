import { useForm } from "react-hook-form";
import styles from "../../../styles/edit.module.scss";

const EditForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEdit = (data) => console.log(data);
  const handleError = (errors) => {};

  const EditOptions = {
    name: { required: "Name is required" },
    phone: {
      required: "Phone is required",
      valueAsNumber: true,
    },
    email: { required: "Email is required" },
    password: { required: "Password is required" },
  };

  return (
    <form onSubmit={handleSubmit(handleEdit, handleError)}>
      <div className={styles.info}>
        <p>Nome</p>
        <input
          type="text"
          name="name"
          placeholder="Enter your name..."
          {...register("name", EditOptions.name)}
        />

        <p style={{ color: "red", fontSize: "1.6rem" }}>
          {errors?.name && errors.name.message}
        </p>
      </div>

      <div className={styles.info}>
        <p>Bio</p>
        <textarea placeholder="Enter your bio..." className={styles.bioInput} />
      </div>

      <div className={styles.info}>
        <p>Phone</p>
        <input
          type="tel"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Enter your phone..."
          {...register("phone", EditOptions.phone)}
        />

        <p style={{ color: "red", fontSize: "1.6rem" }}>
          {errors?.phone && errors.phone.message}
        </p>
      </div>

      <div className={styles.info}>
        <p>Email</p>
        <input
          type="email"
          name="email"
          placeholder="Enter your email..."
          {...register("email", EditOptions.email)}
        />

        <p style={{ color: "red", fontSize: "1.6rem" }}>
          {errors?.email && errors.email.message}
        </p>
      </div>

      <div className={styles.info}>
        <p>Password</p>
        <input
          type="password"
          name="password"
          placeholder="Enter your password..."
          {...register("password", EditOptions.password)}
        />

        <p style={{ color: "red", fontSize: "1.6rem" }}>
          {errors?.password && errors.password.message}
        </p>
      </div>

      <div className={styles.info}>
        <button>Save</button>
      </div>
    </form>
  );
};

export default EditForm;
