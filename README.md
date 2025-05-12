```markdown
# 📁 Document Management Portal

A modern, client-rendered (CSR) document management system built with **Next.js**, **TypeScript**, and **SCSS Modules**. This portal allows users to manage, view, and update documents through a scalable and modular interface.

---

## 🚀 Features

- 📄 Upload and preview documents
- 👥 User login, registration, and role-based access
- 🧩 Component-driven UI (Atomic Design)
- 📱 Responsive design for desktop and mobile
- 🧠 SCSS with media queries and mixins
- 📦 Modular architecture with path aliasing

---

## 🧱 Folder Structure
```

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

````

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

```json
"paths": {
  "@/*": ["./src/*"],
  "@interfaces/*": ["./interfaces/*"],
  "@styles/*": ["./styles/*"],
  "@constant/*": ["./constant/*"],
  "@components/*": ["./components/*"]
}
````

---

## 📦 Installation & Development

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/document-management-portal.git
cd document-management-portal
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

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

## ⚙️ Notes

- Mobile and desktop responsive layouts supported
- No server-side rendering (CSR-only by design)

```

```
