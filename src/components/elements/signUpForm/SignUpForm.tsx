import React, { useState } from "react";
import styles from "./SignUpForm.module.scss";
import CustomButton from "@/components/atom/customButton/cutomButton";
import CustomInput from "@/components/atom/customInput/customInput";
import { SignUpFormDataProps } from "@/interfaces/elements/elements";
import { useAppContext } from "@/store/store";

const SignUpForm: React.FC = () => {
  const { updateStore } = useAppContext();

  const [signupFormData, setSignupFormData] = useState<SignUpFormDataProps>({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    fullNameError: "",
    emailError: "",
    mobileError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError((prev) => ({
      ...prev,
      [`${e.target.name}Error`]: "",
    }));
  };

  const handleSubmit = () => {
    const { fullName, email, mobile, password, confirmPassword } =
      signupFormData;

    if (
      !fullName ||
      !email ||
      !mobile ||
      !password ||
      password !== confirmPassword
    ) {
      const err = { ...error };
      if (!fullName) err.fullNameError = "Full name is required";
      if (!email) err.emailError = "Email is required";
      if (!mobile) err.mobileError = "Mobile is required";
      if (!password) err.passwordError = "Password is required";
      if (!confirmPassword)
        err.confirmPasswordError = "Confirm password is required";
      else if (password !== confirmPassword)
        err.confirmPasswordError = "Confirm passwords do not match";
      setError(err);
      return;
    }

    console.log("Form submitted:", signupFormData);
    updateStore({ signupData: signupFormData });
    // TODO: Call signup API here
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>Sign Up</h2>

      <CustomInput
        label="Full Name"
        name="fullName"
        type="text"
        placeholder="Enter Full Name"
        inputValue={signupFormData.fullName}
        onChange={handleChange}
        isRequired={true}
        error={error.fullNameError}
      />

      <CustomInput
        label="Email"
        name="email"
        type="text"
        placeholder="Enter your first name"
        inputValue={signupFormData.email}
        onChange={handleChange}
        isRequired
        error={error.emailError}
      />

      <CustomInput
        label="Mobile Number"
        name="mobile"
        type="text"
        placeholder="Enter your first name"
        inputValue={signupFormData.mobile}
        onChange={handleChange}
        isRequired
        error={error.mobileError}
      />

      <CustomInput
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your first name"
        inputValue={signupFormData.password}
        onChange={handleChange}
        isRequired
        error={error.passwordError}
      />

      <CustomInput
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="Enter your first name"
        inputValue={signupFormData.confirmPassword}
        onChange={handleChange}
        isRequired
        error={error.confirmPasswordError}
      />

      <CustomButton fullWidth={true} onClick={handleSubmit} variant="primary">
        Register
      </CustomButton>
    </div>
  );
};

export default SignUpForm;
