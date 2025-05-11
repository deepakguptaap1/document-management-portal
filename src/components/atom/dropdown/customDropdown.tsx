import React, { useState } from "react";
import styles from "./customDropdown.module.scss";
import { User } from "@/interfaces/elements/elements";
import { CustomDropdownProps } from "@/interfaces/atoms/atom";
import ClickAwayListener from "@/components/molecules/clickAwayListener/clickAwayListener";

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: User["role"]) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <div className={styles.dropdownWrapper}>
        {label && <label className={styles.label}>{label}</label>}
        <div
          className={styles.dropdown}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span>{value || placeholder}</span>
          <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
        </div>

        {isOpen && (
          <ul className={styles.dropdownList}>
            {options.map((opt) => (
              <li
                key={opt}
                onClick={() => handleSelect(opt)}
                className={styles.dropdownItem}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default CustomDropdown;
