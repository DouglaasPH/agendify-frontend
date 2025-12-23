# 🗓️ Agendify — Frontend

**Agendify** is an intelligent scheduling system for self-employed professionals, enabling interaction between clients and service providers in a simple and automated way.
This part of the project corresponds to the **frontend**, developed in **React**, focusing on performance, componentization, and integration with the FastAPI backend.

---

## 🚀 Main Technologies

| Technology                     | Usage                                                |
| ------------------------------ | ---------------------------------------------------- |
| **React.js (Vite)**            | Base framework for building the interface            |
| **TypeScript**                 | Static typing and code safety                        |
| **React Router DOM**           | Management of public and private routes              |
| **Axios**                      | Communication with the backend API                   |
| **Shadcn/UI + Tailwind CSS**   | Styling and reusable components                      |
| **React Hook Form + Zod**      | Form validation and control                          |
| **Context API / Custom Hooks** | Authentication and global state management           |
| **Framer Motion**              | Smooth animations in components and page transitions |

---

## 📁 Folder Structure

```bash
src/
├── assets/                # Icons, images, and fonts
├── components/            # Reusable components (buttons, inputs, etc.)
├── layouts/               # Standard layouts (DashboardLayout, AuthLayout)
├── css/                   # Complementary styles and Tailwind customizations
├── feature/               # Access logic and route verification (e.g., logged-in user)
├── lib/                   # Utility functions (formatters, helpers, validations)
├── pages/                 # Application pages (Login, Dashboard, Appointments, etc.)
├── store.ts               # Global Redux Toolkit configuration
├── index.css              # Main Tailwind CSS stylesheet
└── main.tsx               # Application entry point
```

---

## 🔑 Authentication and Route Protection

- Authentication is managed by **AuthContext** (`src/contexts/AuthContext.tsx`).
- JWT tokens are securely stored (sessionStorage/localStorage).
- Protected routes use the **`<PrivateRoute />`** component (`src/auth/PrivateRoute.tsx`), which redirects unauthenticated users to the login screen.

Example:

```tsx
<Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>
```

---

## 🔄 Backend Communication

- All HTTP requests use **Axios**, configured in `src/services/api.ts`.
- Interceptors automatically attach the JWT token.
- Main routes include:

  - `POST /login` — authentication
  - `POST /agendar/` — scheduling chat
  - `POST /agendamentos/confirmar` — appointment confirmation
  - `GET /agendamentos/` — listing with filters

---

## 🧩 Typing

- All reusable types (e.g., `User`, `Appointment`, `ApiResponse`) are located in `src/types/`.
- Local and specific types are defined within the respective component.

---

## 🎨 UI and Styling

- **Tailwind CSS** provides the foundation for fast and responsive styling.
- **Shadcn/UI** is used for accessible and customizable components (modals, buttons, cards).
- **Framer Motion** adds micro-animations to screen transitions and interactive elements.

---

## 🧠 Coding Best Practices

- Components are **functional and reusable**.
- Imports follow the `@/` pattern set in `tsconfig.json` (`baseUrl: "./src"`).
- Shared types and helper functions are kept separate from UI logic.

---

## ⚙️ Setup and Execution

### 🧩 Install dependencies

```bash
npm install
```

### ▶️ Run in development mode

```bash
npm run dev
```

### 🏗️ Build for production

```bash
npm run build
```

### 🔍 Lint and formatting

```bash
npm run lint
npm run format
```

---

## 🧪 Tests (optional / future implementation)

- The project is prepared for testing with **Vitest** and **React Testing Library**.
- Future tests will cover:

  - Authentication hooks
  - API requests
  - Critical components (forms, scheduling modal)

---

## 📦 Main Dependencies

```json
"dependencies": {
  "react": "^19.x",
  "react-dom": "^19.x",
  "react-router-dom": "^7.x",
  "@reduxjs/toolkit": "^2.x",
  "react-redux": "^9.x",
  "axios": "^1.x",
  "tailwindcss": "^4.x",
  "@tailwindcss/vite": "^4.x",
  "lucide-react": "^0.5.x",
  "@radix-ui/react-dialog": "^1.x",
  "@radix-ui/react-alert-dialog": "^1.x",
  "@radix-ui/react-checkbox": "^1.x",
  "@radix-ui/react-select": "^2.x",
  "@radix-ui/react-popover": "^1.x",
  "embla-carousel-react": "^8.x",
  "recharts": "^3.x",
  "date-fns": "^4.x",
  "motion": "^12.x",
  "next-themes": "^0.4.x",
  "class-variance-authority": "^0.7.x",
  "clsx": "^2.x",
  "tailwind-merge": "^3.x",
  "sonner": "^2.x"
}
```

---

## 🧰 Development Dependencies

```json
"devDependencies": {
  "vite": "^7.x",
  "@vitejs/plugin-react": "^4.x",
  "typescript": "^5.x",
  "@types/react": "^19.x",
  "@types/react-dom": "^19.x",
  "@types/node": "^24.x",
  "eslint": "^9.x",
  "@eslint/js": "^9.x",
  "typescript-eslint": "^8.x",
  "autoprefixer": "^10.x",
  "postcss": "^8.x",
  "tw-animate-css": "^1.x"
}
```

---

## 👨‍💻 Author

**Douglas Phelipe**
Aspiring Fullstack & Cloud Developer
📍 Pernambuco, Brazil
🔗 [LinkedIn](https://linkedin.com/in/douglas-phelipe)
