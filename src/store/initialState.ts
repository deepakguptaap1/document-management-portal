export const initialStore = {
  signupData: {
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  },
  loginData: {
    email: "",
    password: "",
  },
  usersData: [],
  isAuthenticated: false,
  role: "",
  currentUser: {
    fullName: "",
    email: "",
    mobile: "",
    role: "",
    id: "",
  },
};
