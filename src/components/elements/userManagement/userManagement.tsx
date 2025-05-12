import React, { useEffect } from "react";
import styles from "./userManagement.module.scss";
import { User } from "@/interfaces/elements/elements";
import CustomButton from "@/components/atom/customButton/cutomButton";
import CustomDropdown from "@/components/atom/dropdown/customDropdown";
import { useAppContext } from "@/store/store";

const UserManagement: React.FC = () => {
  const { getStore, updateStore } = useAppContext();
  const { usersData } = getStore();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        const result = await res.json();
        if (!res.ok) throw new Error(result.message);
        updateStore({ usersData: result.data });
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRoleChange = async (id: string, newRole: User["role"]) => {
    try {
      const res = await fetch("/api/users", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, newRole }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message);
      updateStore({ usersData: result.data });
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch("/api/users", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message);
      updateStore({ usersData: result.data });
    } catch (err) {
      console.error("Delete failed", err);
    }
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
          {usersData?.map(({ id, fullName, email, role }) => (
            <div key={id} className={styles.tableContent}>
              <div>{fullName}</div>
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
        {usersData?.map((user) => (
          <div className={styles.userDetails} key={user.id}>
            <div className={styles.item}>
              <div>Name</div>
              <div>:</div>
              <div>{user.fullName}</div>
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
