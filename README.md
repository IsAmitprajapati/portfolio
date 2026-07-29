# 🎨 Adobe Portfolio - Amit Prajapati

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://adobe-portfolio.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black.svg?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-blue.svg?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)

An interactive, premium developer portfolio designed around the theme of the **Adobe Creative Suite**. It showcases full-stack web and mobile application development skills, job experiences, and personal projects using creative desktop app layouts.

🔗 **Live Link:** [adobe-portfolio.vercel.app](https://adobe-portfolio.vercel.app)

---

## 🖥️ Interactive Workspaces (Features)

The portfolio is structured as a series of simulated Adobe Creative Suite applications, allowing users to experience different facets of Amit's work through familiar interfaces:

1. **🖌️ Photoshop Workspace Canvas (About & Profile)**
   - Simulated Photoshop interface complete with canvas zoom controls, dynamic layer selection, toolbar items, and an interactive edit history log.
   - Highlights personal bio, details, and core engineering philosophies.

2. **🎨 Creative Cloud Swatches & Presets (Skills Panel)**
   - Displays developer skill cards categorized as tech "swatches" (React, Next.js, TypeScript, Node.js, MongoDB, Docker, AWS, etc.).

3. **🎬 After Effects Composition (Services Offered)**
   - Emulates an After Effects viewport and timeline composition, showing core engineering services like Full Stack Web Development and Mobile App Development.

4. **🎞️ Premiere Pro Timeline Track (Job Experience)**
   - Recreates a Premiere Pro video editing timeline track where job experiences are represented as draggable/clickable clips across video, audio, and text tracks.

5. **📸 Lightroom Library Catalog (Projects Grid)**
   - Mirrors a Lightroom library view, enabling users to browse, filter, and inspect various software projects and source repositories.

6. **☁️ Creative Cloud Review (Testimonials)**
   - Displays professional recommendations and client feedback in a collaborative cloud review mockup.

7. **⚙️ Preferences Panel (Contact Form)**
   - An interactive settings dialog box that handles contacting the developer, fully integrated with MongoDB and Resend for email notifications.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with custom CSS variables for smooth light/dark and custom Adobe theme configurations
- **Animation:** [Framer Motion](https://www.framer.com/motion/) for fluid desktop-like micro-interactions
- **Icons:** [Lucide React](https://lucide.dev/) for high-quality SVG interface icons
- **Database:** [MongoDB](https://www.mongodb.com/) (using Mongoose object modeling)
- **Email:** [Resend API](https://resend.com/) for reliable delivery of contact messages

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
   Create a `.env.local` file in the root directory and add the following:
   ```env
   # MongoDB Connection string
   MONGODB_URI=your_mongodb_connection_uri

   # Resend API configuration for emails
   RESEND_API_KEY=re_your_resend_api_key
   CONTACT_EMAIL_RECEIVER=your_email@example.com

   # Site deployment base URL
   NEXT_PUBLIC_APP_URL=https://adobe-portfolio.vercel.app
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port indicated in terminal) in your browser to explore the creative workspaces.

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
