# JobPond – Freelance Task Marketplace

🚀 A full-stack freelance task marketplace where users can post tasks and freelancers can browse, bid, and complete jobs based on their skills and availability.

## 🌐 Live Site

🔗 [Live Site URL](https://freelance-task-marketpla-af2da.web.app/)  
🔗 [Client Repository](https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-ramjan88)  
🔗 [Server Repository](https://github.com/Programming-Hero-Web-Course4/b11a10-server-side-ramjan88)

---

## 🧩 Key Features

- 🔐 Firebase authentication (Email/Password + Google login)
- 📝 Add, browse, update, and delete freelance tasks
- 🔎 Task browsing and bid tracking
- 📌 "My Posted Tasks" for user-specific task management
- 🎯 Bidding system with count tracking and modal view
- 🌗 Dark/Light theme toggle with persistent theme state
- 💬 Toast and SweetAlert2 for user feedback
- 📱 Fully responsive for mobile, tablet, and desktop
- ❌ 404 page, loading spinner, and protected routes

---

## ⚙️ Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Auth
- **Deployment:** Netlify (Client) + Vercel (Server)

---

## 📦 npm Packages Used

| Package                   | Purpose                                                  |
|---------------------------|----------------------------------------------------------|
| `aos`                     | Scroll animations for UI sections                        |
| `firebase`                | Authentication and Firebase services                     |
| `react` & `react-dom`     | Core React library and DOM rendering                     |
| `react-helmet`            | Dynamic document titles and metadata                     |
| `react-icons`             | Icons used throughout the UI                             |
| `react-router-dom`        | Routing and navigation                                   |
| `react-simple-typewriter`| Typing animations for text content                       |
| `react-toastify`          | Beautiful toast notifications                           |
| `react-toggle-dark-mode` | Dark/light mode toggle UI                                |
| `react-tooltip`           | Tooltips on hover                                       |
| `sweetalert2`             | Custom modals for success, error, and confirmation alerts|

---

## 🔒 Environment Variables

### Client `.env`
```env
VITE_API_URL=https://your-vercel-server.vercel.app
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
