***

# 🎓 ScholarStream - Scholarship Management Platform

[![React](https://img.shields.io/badge/Frontend-React.js-61DBFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Style-TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/UI-DaisyUI-5A0EF8?logo=daisyui&logoColor=white)](https://daisyui.com/)
[![Framer Motion](https://img.shields.io/badge/Animation-Framer_Motion-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Stripe](https://img.shields.io/badge/Payment-Stripe-008CDD?logo=stripe&logoColor=white)](https://stripe.com/)

# 📋 Project Overview

**ScholarStream** is a full-stack, data-driven Scholarship Management System designed to bridge the gap between students seeking financial aid and global universities. It features a modern, responsive UI with **Dark/Light theme support**, secure payment processing, and role-based dashboards for Students, Moderators, and Administrators.

The platform streamlines the entire workflow: from searching and filtering scholarships to applying via **Stripe** payment and tracking application status in real-time.

# 🔗 Project Links

- [**Live Website**](https://scholarshipstream.web.app/)
- [**Client Repository**](https://github.com/hasnatfahmidkhan/scholar-stream)
- [**Server Repository**](https://github.com/hasnatfahmidkhan/scholar-stream-server)

---

# 🔐 Admin Credentials (For Testing)

Use these credentials to access full Admin features (Manage Users, Add Scholarships, Analytics).

| Role      | Email             | Password   |
| :-------- | :---------------- | :--------- |
| **Admin** | `admin@gmail.com` | `Admin@#1` |

---

# ✨ Key Features

### 🎨 Modern UI/UX

- **Dark & Light Mode:** Fully persistent theme toggle using LocalStorage.
- **Interactive Animations:**
  - **SwiperJS** sliders for the Hero Banner and Success Stories.
  - **React CountUp** for live platform statistics.
  - **React Fast Marquee** for trusted university partners.
  - **Framer Motion** for smooth page transitions and card reveals.
- **Skeleton Loading:** Seamless loading states using DaisyUI skeletons to prevent layout shifts.

### 🔐 Authentication & Security

- **Secure Login:** Firebase Authentication (Google Social Login & Email/Password).
- **JWT Security:** HttpOnly Cookies and LocalStorage fallback for secure session management.
- **Protected Routes:** Custom hooks (`useAdmin`, `useModerator`) to prevent unauthorized access.

### 👥 Role-Based Dashboards

1.  **Student Dashboard:**
    - Track application status (Pending -> Processing -> Completed).
    - **Stripe Integration** for secure application fee payments.
    - Manage Wishlist and write reviews for scholarships.
2.  **Moderator Dashboard:**
    - Review applications and provide feedback.
    - Update application status and cancel fake applications.
3.  **Admin Dashboard:**
    - Manage all users (Promote/Demote roles).
    - **Data Visualization:** Charts (Recharts) for system-wide analytics.
    - "Super Admin" protection logic.

### 🚀 Core Functionalities

- **Advanced Search & Filter:** Sort by fees, filter by category/location, and search by university name.
- **Resources Section:** A guide page with modals for reading articles (Visa Guide, Essay Tips).
- **Infinite Scrolling:** (Optional) Implemented on specific list pages.
- **Legal Pages:** Dedicated Terms of Service, Privacy Policy, and Cookie Policy pages.

---

# 🛠️ Tech Stack & Packages

### Frontend Core

- **React.js (Vite):** Fast frontend build tool.
- **Tailwind CSS & DaisyUI:** Rapid UI development.
- **React Router DOM:** Client-side routing.
- **TanStack Query (React Query):** Server state management and caching.

### Key NPM Packages

| Package                  | Purpose                                          |
| :----------------------- | :----------------------------------------------- |
| `swiper`                 | Touch-enabled sliders for Banner & Reviews.      |
| `framer-motion`          | Complex animations and page transitions.         |
| `react-countup`          | Animated number counters for the stats section.  |
| `react-fast-marquee`     | Infinite scrolling logo slider for universities. |
| `recharts`               | Bar and Pie charts for the Analytics dashboard.  |
| `lottie-react`           | JSON-based animations for loading states.        |
| `lucide-react`           | Modern, lightweight icon set.                    |
| `stripe/react-stripe-js` | Secure payment element handling.                 |
| `react-hook-form`        | Efficient form handling and validation.          |
| `sweetalert2`            | Beautiful modal popups for user confirmation.    |

---

# 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/hasnatfahmidkhan/scholar-stream.git
cd scholar-stream
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory and add your Firebase and Stripe keys:

```env
VITE_AUTHDOMAIN=http://localhost:3000
VITE_APIKEY=your_firebase_api_key
VITE_PROJECTID=your_firebase_auth_domain
VITE_STORAGEBUCKET=your_firebase_project_id
VITE_MESSAGINGSENDERID=your_firebase_storage_bucket
VITE_APPID=your_firebase_sender_id
VITE_HOSTING_URL=img_hosting_url
VITE_DOMAIN_URL=your_backend_url
```

### 4. Run the Project

```bash
npm run dev
```

---

# 📊 Database Collections Structure

- **Users**: `name`, `email`, `role`, `isProtected`
- **Scholarships**: `universityName`, `fees`, `deadline`, `category`, `benefits[]`
- **Applications**: `userId`, `scholarshipId`, `paymentStatus`, `applicationStatus`
- **Reviews**: `rating`, `comment`, `userImage`, `scholarshipId`
- **Wishlists**: `userId`, `scholarshipId`

# 🔮 Future Improvements

- **University Portal:** Allow universities to sign up and post scholarships directly (SaaS model).
- **AI Recommendations:** Suggest scholarships based on the student's profile score.
- **Chat System:** Real-time chat between Moderators and Applicants.

# 📞 Contact

**Developed by Hasnat Fahmid Khan**  
GitHub: [hasnatfahmidkhan](https://github.com/hasnatfahmidkhan)
