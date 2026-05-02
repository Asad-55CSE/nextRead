# NextRead — Digital Book Borrowing Platform

> A seamless and modern web application designed to digitize the traditional library experience.

## 🌐 Live URL

[nextread.app](https://next-read-sigma.vercel.app/)

---

## 📚 About

NextRead is a full-stack digital library platform where users can explore a vast collection of books, filter by categories, and borrow titles digitally. The platform prioritizes security and performance using **BetterAuth**, **Next.js 14 App Router**, and **MongoDB**.

---

## ✨ Key Features

- **📖 Browse Books** — Explore a full catalog with search and category filtering
- **🔐 Authentication** — Email/password + Google OAuth via BetterAuth
- **👤 User Profile** — View and update your profile (name, photo)
- **📕 Book Details** — Private route showing full details and borrow action
- **🔎 Search & Filter** — Real-time search by title, sidebar category filter
- **📱 Fully Responsive** — Mobile, tablet, and desktop optimized
- **🎠 Swiper Carousel** — Animated book browsing with SwiperJS
- **✨ Animations** — Animate.css page transitions and element animations
- **🌟 Modern UI** — Clean scholarly design with Tailwind CSS custom theme

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** | React framework with App Router |
| **Tailwind CSS** | Utility-first styling |
| **BetterAuth** | Authentication (email + Google OAuth) |
| **MongoDB** | Database via Mongoose |
| **react-hot-toast** | Toast notifications |
| **swiper** | Book carousel on homepage |
| **animate.css** | CSS animations |

---

## 📦 NPM Packages

```
next
react
react-dom
better-auth
mongoose
react-hot-toast
swiper
animate.css
tailwindcss
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Google OAuth credentials (optional, for social login)

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/nextread.git
cd nextread

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Fill in your values in .env.local

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

```env
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/
BETTER_AUTH_SECRET=your-secret-key-min-32-chars
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 📁 Project Structure

```
nextread/
├── app/
│   ├── (auth)/
│   │   ├── login/page.js       # Login page
│   │   └── register/page.js    # Register page
│   ├── books/
│   │   ├── page.js             # All Books (search + filter)
│   │   └── [id]/page.js        # Book Details (private)
│   ├── profile/
│   │   ├── page.js             # My Profile (private)
│   │   └── update/page.js      # Update Profile
│   ├── api/
│   │   ├── auth/               # BetterAuth handlers
│   │   └── books/              # Books API endpoints
│   ├── layout.js               # Root layout
│   └── page.js                 # Home page
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── BookCard.js
│   ├── FeaturedSwiper.js
│   ├── StatsSection.js
│   └── TestimonialsSection.js
├── data/
│   └── books.js                # Static books data
├── lib/
│   ├── auth.js                 # BetterAuth server config
│   ├── auth-client.js          # BetterAuth client
│   └── db.js                   # MongoDB connection
└── .env.local                  # Environment variables
```

---

## 🗂️ Pages

| Route | Access | Description |
|---|---|---|
| `/` | Public | Home — banner, featured books, carousel |
| `/books` | Public | All books with search & category filter |
| `/books/[id]` | **Private** | Single book details + borrow action |
| `/login` | Public | Email/password + Google login |
| `/register` | Public | User registration |
| `/profile` | **Private** | User profile with stats |
| `/profile/update` | **Private** | Edit name and photo |

---

## 🎨 Design

The UI uses a custom Tailwind color scheme inspired by a scholarly/academic aesthetic, featuring:
- **Newsreader** (serif) for headings
- **Inter** (sans-serif) for body text
- A navy/teal/gold color palette
- Smooth hover animations and page transitions

