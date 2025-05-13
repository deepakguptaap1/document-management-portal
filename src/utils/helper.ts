import { UsersDataProps } from "@/backend/interface";

// Set currentUser in localStorage
export function setCurrentUser(user: UsersDataProps) {
  delete user.files;
  if (user && typeof user === "object") {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }
}

// Get currentUser from localStorage
export function getCurrentUser() {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
}

// Remove currentUser from localStorage
export function removeCurrentUser() {
  localStorage.removeItem("currentUser");
}
