import React, { useState } from "react";
import styles from "./loginForm.module.scss";
import CustomInput from "@/components/atom/customInput/customInput";
import CustomButton from "@/components/atom/customButton/cutomButton";
import { LoginFormDataProps } from "@/interfaces/elements/elements";
import { useAppContext } from "@/store/store";
import { useRouter } from "next/router";
import { setCurrentUser } from "@/utils/helper";

const LoginForm: React.FC = () => {
  const router = useRouter();
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

  const handleSubmit = async () => {
    if (!loginFormData.email || !loginFormData.password) {
      const err = { ...error };
      if (!loginFormData.email) err.emailError = "Email is required";
      if (!loginFormData.password) err.passwordError = "Password is required";
      setError(err);
      return;
    }
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginFormData),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message);
      updateStore({
        loginData: loginFormData,
        currentUser: result.data,
        isAuthenticated: true,
        role: result.data.role,
      });
      setCurrentUser(result.data);
      //session management and Implement  authentication feature
      router.push("/documents");
    } catch (err) {
      console.error("Login failed", err);
    }
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
