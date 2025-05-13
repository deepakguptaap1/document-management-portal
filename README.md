```markdown
# 📁 Document Management Portal

A modern, client-rendered (CSR) document management system built with **Next.js**, **TypeScript**, and **SCSS Modules**.
This portal allows users to manage, view, and update documents through a scalable and modular interface.

---

## 🚀 Features

### UI Level
#### 🔐 Authentication

* **Signup**: Users can register by providing full name, email, mobile number, password, and confirm password.
* **Login**: Users can log in using email and password.
* **Logout**: Can be implemented by clearing session data and redirecting (not yet implemented).
- localStorage will be used to persist the user’s login state (e.g., token or session identifier).
- Auth guards Auth guards are designed to check for a valid login state before allowing access to restricted parts of the application. If the user is not authenticated (i.e., no auth data in localStorage), they will be redirected to the login page.
- Although token-based logic is not yet implemented, the structure is being prepared for secure authentication and session management.
---

#### 👤 User Capabilities

* **Upload Documents**: Users can upload up to 5 files (PDF or images only).
* **View Documents**: Uploaded documents are listed for the user.
* **Download Documents**: Files can be downloaded from the dashboard.
* **Delete Documents**: Users can delete their own uploaded files.

---

#### 🧑‍💼 Admin Capabilities

* **View All Users**: Admin can view a list of all registered users.
* **Change User Role**: Admin can modify user roles (user, manager, admin).
* **Delete Users**: Admin can delete any user profile.

### Code Level
- 🧩 Component-driven UI (Atomic Design)
- 📱 Responsive design for desktop and mobile
- 🧠 SCSS with media queries and mixins
- 📦 Modular architecture with path aliasing

---

## 🚧 Planned Enhancements

* Add JWT-based or session-based authentication system.
* Implement password hashing using `bcrypt`.
* Store auth token using `LocalStorage` or `HttpOnly` cookies.
* Add role-based access protection on routes and APIs.
* Persist user data in a database (currently in-memory or mocked).

---

## 🧱 Folder Structure

src/
├── components/
│ ├── atom/
│ ├── elements/
│ ├── molecules/
│ ├── HOC/
│ └── layOut/
├── constant/
├── interfaces/
├── pages/
│ ├── api/
│ ├── documents/
│ ├── login/
│ ├── register/
│ └── user/
│ ├── \_app.tsx
│ ├── \_document.tsx
│ └── index.tsx
├── store/
├── styles/
├── utils/


---

## 🛠️ Technologies Used

- **Next.js** `15.3.2`
- **React** `19`
- **TypeScript** `5`
- **SCSS Modules** (`sass`)
- **clsx** for conditional classes
- **ESLint** for code quality

---

## 🧭 Aliases (from `tsconfig.json`)

json
"paths": {
  "@/*": ["./src/*"],
  "@interfaces/*": ["./interfaces/*"],
  "@styles/*": ["./styles/*"],
  "@constant/*": ["./constant/*"],
  "@components/*": ["./components/*"]
}
`

---

## 📦 Installation & Development

1. **Clone the repository:**

bash
git clone https://github.com/your-username/document-management-portal.git
cd document-management-portal


2. **Install dependencies:**

bash
npm install


3. **Run the development server:**

bash
npm run dev


4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Scripts

| Command         | Purpose                  |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Create production build  |
| `npm start`     | Run built application    |
| `npm run lint`  | Run ESLint checks        |

---

## 📋 Linting & Code Style

- ESLint: `eslint-config-next`
- SCSS modules for scoped styles
- Uses `@use` instead of deprecated `@import` in Sass

---
## Authentication Overview

### Current State

Authentication in this application is currently in a **setup phase**.

- localStorage is planned to be used for storing user session data (e.g., token).
- Protected routes will use **auth guard logic** to restrict access.

### Planned Workflow

1. After login, the server will return a token.
2. The token will be saved in `localStorage`.
3. Auth guards will check for the token before rendering protected components/pages.

### Auth Guard Logic (Planned)

The app will implement a check like this:

```ts
// Pseudocode
const token = localStorage.getItem('authToken');

if (!token) {
  router.push('/login');
}

## ⚙️ Notes

- Mobile and desktop responsive layouts supported
- No server-side rendering (CSR-only by design)

## ⚙️ Application Access
    • Code Sand Box URL (Live) : https://6l97xh-3000.csb.app/
    • Github Link : https://github.com/deepakguptaap1/document-management-portal/
    • Credential to Access Admin Dashboard
        Email : admin@dmp.com
        Password : admin@12345

```
