# 💙 Paytm Developer Portfolio - Amit Prajapati

[![Live Demo](https://img.shields.io/badge/demo-online-00baf2.svg)](https://portfolio-fawn-chi-1rk5d5oyxv.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black.svg?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)

An interactive, premium developer portfolio designed around the theme of **Paytm**, the leading fintech provider. It showcases full-stack web and mobile application engineering skills, experiences, and personal projects using fintech dashboard components and retail merchant device simulations.

🔗 **Live Link:** [portfolio-fawn-chi-1rk5d5oyxv.vercel.app](https://portfolio-fawn-chi-1rk5d5oyxv.vercel.app)

---

## 📟 Fintech Theme features

The portfolio simulates real-world Paytm services and devices to present Amit's engineering capabilities in a memorable, interactive way:

1. **📢 Paytm Soundbox Simulation (`PaytmSoundbox`)**
   - An interactive 3D model of the iconic Paytm merchant Soundbox.
   - Built using the **Web Audio API** to generate the classic Paytm payment chime directly in the browser.
   - Includes toggles for power, multi-level volume settings, LED colors, and a simulated payment trigger that fires a confetti celebration.

2. **🛒 Skills Mini App Store (`MiniAppStore`)**
   - Emulates the Paytm Mini App Store to organize technical skills.
   - Users can browse skills, filter by category (Frontend, Backend, DevOps, Fintech Core), or search in real-time.

3. **📖 Projects Passbook (`PaytmPassbook`)**
   - Models the Paytm account statement passbook to showcase projects as transaction records.
   - Displays reference transaction IDs, star counts, GitHub repositories, and expandable cards summarizing core features.

4. **💳 Paytm Postpaid Experience Timeline (`PaytmPostpaid`)**
   - Models the Paytm Postpaid utility dashboard to map professional employment history.
   - Career milestones and project successes are highlighted as credit line limit upgrades and statement ledger records.

5. **🔳 Merchant QR Standee (`PaytmQRScanner`)**
   - An interactive merchant QR retail standee.
   - Hovering or clicking allows users to "scan" the QR code, initiating a direct download of Amit's resume/PDF or routing to social profiles.

6. **🛒 Checkout Payment Gateway (`PaytmPGForm`)**
   - Emulates the Paytm checkout form and payment gateway portal as an interactive contact form.
   - Messages are saved directly to MongoDB using Mongoose and trigger instant email alerts via the Resend API.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with a custom Paytm-themed color palette (Paytm Blue, Slate Dark)
- **Animation:** [Framer Motion](https://www.framer.com/motion/) for fluid desktop and mobile micro-interactions
- **Icons:** [Lucide React](https://lucide.dev/) for clean UI iconography
- **Database:** [MongoDB](https://www.mongodb.com/) (via Mongoose object modeling)
- **Email:** [Resend API](https://resend.com/) for contact mail routing

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js (version 18+ recommended)
- MongoDB instance (Atlas or local)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ISAMITPRAJAPATI/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and copy the contents from `.env.example`:
   ```env
   # MongoDB Connection string
   MONGODB_URI=your_mongodb_connection_uri

   # Resend API configuration for emails
   RESEND_API_KEY=re_your_resend_api_key
   CONTACT_EMAIL_RECEIVER=your_email@example.com

   # Site deployment base URL
   NEXT_PUBLIC_APP_URL=https://portfolio-fawn-chi-1rk5d5oyxv.vercel.app
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port specified in your terminal) in your browser.

5. **Build for Production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 👤 About the Developer

Developed with passion by **Amit Prajapati**, Full Stack Developer specializing in crafting high-performance, visually stunning web and mobile experiences.

- **LinkedIn:** [@itsamitprajapati](https://www.linkedin.com/in/itsamitprajapati/)
- **GitHub:** [@isamitprajapati](https://github.com/isamitprajapati)
- **Portfolio Website:** [amitprajapati.co.in](https://amitprajapati.co.in)
