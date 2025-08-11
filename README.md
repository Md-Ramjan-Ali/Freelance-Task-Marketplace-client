# JobPond – Freelance Task Marketplace

🚀 A full-stack freelance task marketplace where users can post tasks and freelancers can browse, bid, and complete jobs based on their skills and availability.

## 🌐 Live Site

🔗 [Live Site URL](https://freelance-task-marketpla-af2da.web.app/)  
🔗 [Client Repository](https://github.com/Md-Ramjan-Ali/Freelance-Task-Marketplace-client)  
🔗 [Server Repository](https://github.com/Md-Ramjan-Ali/Freelance-Task-Marketplace-server)

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
- **Deployment:** Firebase (Client) + Vercel (Server)

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

🚀 Getting Started  
Follow these steps to set up the  Freelance Task Marketplace Website locally:

1. Clone the repository:  
```bash
git clone https://github.com/Md-Ramjan-Ali/Freelance-Task-Marketplace-client
```
2. Navigate to the project folder:
```bash
cd Freelance-Task-Marketplace-client
```
3.Install dependencies:
```bash
npm install
```
4.Run the development server:
```bash
npm start
```
5.Open http://localhost:3000 in your browser to see the app in action.

## 🔒 Environment Variables

### Client `.env`
```env
VITE_API_URL=https://your-vercel-server.vercel.app
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
