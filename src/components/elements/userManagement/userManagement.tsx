import React, { useState } from "react";
import styles from "./userManagement.module.scss";
import { User } from "@/interfaces/elements/elements";
import CustomButton from "@/components/atom/customButton/cutomButton";
import CustomDropdown from "@/components/atom/dropdown/customDropdown";

const initialUsers: User[] = [
  { id: "1", name: "Alice Smith", email: "alice@example.com", role: "User" },
  { id: "2", name: "Bob Johnson", email: "bob@example.com", role: "Admin" },
  {
    id: "3",
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Manager",
  },
];

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleRoleChange = (id: string, newRole: User["role"]) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, role: newRole } : user))
    );
  };

  const handleDelete = (id: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div className={styles.container}>
      <h2>User Management</h2>
      <div className={styles.desktopView}>
        <div className={styles.tableHeader}>
          <div>Name</div>
          <div>Email</div>
          <div>Role</div>
          <div>Actions</div>
        </div>
        <div className={styles.tableBody}>
          {users.map(({ id, name, email, role }) => (
            <div key={id} className={styles.tableContent}>
              <div>{name}</div>
              <div>{email}</div>
              <div>{role}</div>
              <div className={styles.actions}>
                <CustomButton
                  onClick={() => {
                    handleDelete(id);
                  }}
                  variant="danger-medium"
                >
                  Delete
                </CustomButton>
                <CustomDropdown
                  options={["User", "Admin", "Manager"]}
                  value={""}
                  onChange={(opt) => handleRoleChange(id, opt)}
                  placeholder="Change Role"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.mobileView}>
        {users.map((user) => (
          <div className={styles.userDetails} key={user.id}>
            <div className={styles.item}>
              <div>Name</div>
              <div>:</div>
              <div>{user.name}</div>
            </div>
            <div className={styles.item}>
              <div>Email</div>
              <div>:</div>
              <div>{user.email}</div>
            </div>
            <div className={styles.item}>
              <div>Role</div>
              <div>:</div>
              <div>{user.role}</div>
            </div>
            <div className={styles.actions}>
              <CustomButton
                onClick={() => {
                  handleDelete(user.id);
                }}
                variant="danger-medium"
              >
                Delete
              </CustomButton>
              <CustomDropdown
                options={["User", "Admin", "Manager"]}
                value={""}
                onChange={(opt) => handleRoleChange(user.id, opt)}
                placeholder="Change Role"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
