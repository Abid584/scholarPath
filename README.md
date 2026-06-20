<div align="center">

# 🎓 Scholar Path

### Scholarship Management Platform

A full-stack, data-driven system connecting students with global scholarship opportunities — featuring secure payments, role-based dashboards, and real-time application tracking.

[![React](https://img.shields.io/badge/Frontend-React.js-61DBFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Style-TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/UI-DaisyUI-5A0EF8?logo=daisyui&logoColor=white)](https://daisyui.com/)
[![Framer Motion](https://img.shields.io/badge/Animation-Framer_Motion-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

[**🌐 Live Demo**](https://scholar-path-kappa.vercel.app/) · [**Client Repo**](https://github.com/Abid584/scholarPath) · [**Server Repo**](https://github.com/Abid584/scholarPath-server)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Demo Credentials](#-demo-credentials)
- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Roadmap](#-roadmap)
- [Contact](#-contact)

---

## 📖 Overview

**Scholar Path** bridges the gap between students seeking financial aid and universities offering it. The platform streamlines the entire scholarship journey — searching and filtering opportunities, applying through a secure **Stripe** checkout, and tracking application status in real time — all wrapped in a modern, responsive interface with full **Dark/Light theme** support.

The system supports three distinct roles — **Student**, **Moderator**, and **Admin** — each with a tailored dashboard and permission set.

---

## 🔐 Demo Credentials

Use the credentials below to explore each role's dashboard and feature set.

| Role          | Email                   | Password       |
| :------------ | :----------------------- | :-------------- |
| 👑 Admin      | `admin@gmail.com`        | `admin123`      |
| 🛡️ Moderator  | `moderator@gmail.com`    | `moderator123`  |
| 🎓 Student    | `user@gmail.com`         | `user123`       |

> **Note:** These are demo accounts for testing purposes only — please use your own credentials in production.

---

## ✨ Key Features

### 🎨 Modern UI/UX

- **Dark & Light Mode** — persistent theme toggle backed by `localStorage`
- **Skeleton Loading** — DaisyUI skeleton states prevent layout shift while content loads
- **Rich Animations**
  - Swiper.js sliders for the hero banner and success stories
  - React CountUp for live, animated platform statistics
  - React Fast Marquee for a scrolling strip of partner universities
  - Framer Motion for smooth page transitions and card reveals

### 🔐 Authentication & Security

- **Firebase Authentication** with Google Social Login and Email/Password sign-in
- **JWT-secured sessions** via HttpOnly cookies, with `localStorage` as a fallback
- **Protected routes** enforced through custom hooks (`useAdmin`, `useModerator`)

### 👥 Role-Based Dashboards

**Student**
- Track application status across the pipeline: *Pending → Processing → Completed*

**Moderator**
- Review applications and leave feedback
- Update application status and cancel fraudulent applications

**Admin**
- Manage all users, including promoting and demoting roles
- Visualize system-wide analytics with interactive Recharts dashboards
- "Super Admin" protection logic to prevent accidental privilege loss
- Built-in AI assistant to answer student queries directly from the dashboard

### 🚀 Core Functionality

- **Advanced search & filtering** — by fee range, category, location, or university name
- **Resources hub** — modal-based guides covering visa applications and essay writing tips
- **Infinite scrolling** on select list views
- **Legal pages** — Terms of Service, Privacy Policy, and Cookie Policy included out of the box

---

## 🛠️ Tech Stack

### Frontend Core

| Technology              | Role                                  |
| :----------------------- | :------------------------------------- |
| React.js (Vite)          | Frontend framework & build tooling    |
| Tailwind CSS + DaisyUI   | Styling and component library         |
| React Router DOM         | Client-side routing                   |
| TanStack Query           | Server state management & caching     |

### Notable Packages

| Package                     | Purpose                                           |
| :--------------------------- | :------------------------------------------------ |
| `swiper`                     | Touch-enabled sliders for banner & reviews        |
| `framer-motion`               | Page transitions and UI animations                |
| `react-countup`                | Animated counters for the stats section           |
| `react-fast-marquee`           | Infinite-scrolling university logo strip          |
| `recharts`                    | Bar and pie charts for the analytics dashboard    |
| `lottie-react`                 | JSON-based loading animations                     |
| `lucide-react`                 | Lightweight, modern icon set                      |
| `@stripe/react-stripe-js`        | Secure payment element handling                   |
| `react-hook-form`               | Form handling and validation                      |
| `sweetalert2`                  | Polished confirmation and alert modals            |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Abid584/scholarPath.git
cd scholarPath
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root with the following keys:

```env
VITE_AUTHDOMAIN=http://localhost:3000
VITE_APIKEY=your_firebase_api_key
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_sender_id
VITE_APPID=your_firebase_app_id
VITE_HOSTING_URL=your_image_hosting_url
VITE_DOMAIN_URL=your_backend_url
```

### 4. Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port Vite assigns).

---


## 🔮 Roadmap

- [ ] **University Portal** — allow universities to register and post scholarships directly (SaaS model)
- [ ] **AI Recommendations** — suggest scholarships based on a student's profile score
- [ ] **Real-Time Chat** — direct messaging between moderators and applicants

---

## 📞 Contact

**Developed by Abid Ali**

[![GitHub](https://img.shields.io/badge/GitHub-abid584-181717?logo=github&logoColor=white)](https://github.com/abid584)

---

<div align="center">

If you found this project useful, consider giving it a ⭐ on GitHub!

</div>
