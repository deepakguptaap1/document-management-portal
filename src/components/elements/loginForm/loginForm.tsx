import React, { useState } from "react";
import styles from "./loginForm.module.scss";
import CustomInput from "@/components/atom/customInput/customInput";
import CustomButton from "@/components/atom/customButton/cutomButton";
import { LoginFormDataProps } from "@/interfaces/elements/elements";
import { useAppContext } from "@/store/store";

const LoginForm: React.FC = () => {
  const { updateStore } = useAppContext();
  const [loginFormData, setLoginFormData] = useState<LoginFormDataProps>({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError((prev) => ({ ...prev, [`${e.target.name}Error`]: "" }));
  };

  const handleSubmit = () => {
    if (!loginFormData.email || !loginFormData.password) {
      const err = { ...error };
      if (!loginFormData.email) err.emailError = "Email is required";
      if (!loginFormData.password) err.passwordError = "Password is required";
      setError(err);
      return;
    }
    updateStore({ loginData: loginFormData });
    console.log("Submitted:", loginFormData);
    // TODO: Connect to auth API
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>Login</h2>
      <CustomInput
        label="Email"
        name="email"
        type="email"
        placeholder="Enter email"
        onChange={handleChange}
        error={error.emailError}
        isRequired={true}
        inputValue={loginFormData.email}
      />
      <CustomInput
        label="Password"
        name="password"
        type="password"
        placeholder="Enter password"
        onChange={handleChange}
        error={error.passwordError}
        isRequired={true}
        inputValue={loginFormData.password}
      />
      <CustomButton
        className={styles.button}
        onClick={handleSubmit}
        variant="primary"
      >
        Login
      </CustomButton>
    </div>
  );
};

export default LoginForm;
