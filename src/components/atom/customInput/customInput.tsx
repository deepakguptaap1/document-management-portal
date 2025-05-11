import React from "react";
import styles from "./customInput.module.scss";
import clsx from "clsx";
import { CustomInputProps } from "@/interfaces/atoms/atom";

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  type,
  error,
  className,
  wrapperClassName,
  isRequired,
  placeholder = "",
  inputValue,
  onChange,
  ref,
  isMultiple,
}) => {
  return (
    <div className={clsx(styles.inputWrapper, wrapperClassName)}>
      {label && (
        <label className={styles.label}>
          {label}
          {isRequired && <span>*</span>}
        </label>
      )}
      <input
        className={clsx(styles.input, className, {
          [styles.errorBorder]: !!error,
        })}
        required={isRequired}
        placeholder={placeholder}
        type={type}
        name={name}
        value={inputValue}
        onChange={onChange}
        ref={(ele) => {
          if (ref) ref.current = ele;
        }}
        multiple={isMultiple}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default CustomInput;
