# AI Resume Analyzer 🧠📄

Build an AI-powered Resume Analyzer that helps users upload resumes, store them securely, and get smart AI feedback + ATS scoring. This project uses **React + React Router v7 + Puter.js** to handle authentication, file storage, and AI-powered evaluations — all inside the browser with **no backend required**.

🔗 **Live Demo:** https://jsm-resume-ai-analyzer-1-cesd0g.puter.site

---

## 📋 Table of Contents

- ✨ Introduction
- ⚙️ Tech Stack
- 🔋 Features
- 🤸 Quick Start
- 📁 Project Structure
- 🔗 Assets
- 🚀 Deployment
- 📌 More

---

## ✨ Introduction

**AI Resume Analyzer** is a modern web app that allows users to:

✅ Log in seamlessly using Puter.js  
✅ Upload resumes (PDF/image formats)  
✅ Store uploaded files securely  
✅ Generate resume analysis using AI  
✅ Get ATS score + feedback  
✅ View a clean, responsive UI optimized for all devices

This project is ideal for anyone learning real-world full-stack style apps using modern front-end architecture — without building a backend.

---

## ⚙️ Tech Stack

- **React** – Component-based UI development
- **React Router v7** – Modern routing & navigation
- **Puter.js** – Auth + storage + KV database + AI services (serverless)
- **Tailwind CSS** – Utility-first styling for clean UI
- **TypeScript** – Static typing for better DX & reliability
- **Vite** – Fast dev server + build tool
- **Zustand** – Lightweight state management

---

## 🔋 Features

👉 **Easy & Convenient Auth**  
Authentication is handled fully in the browser using Puter.js.

👉 **Resume Upload & Storage**  
Upload resumes and store them in cloud storage, accessible anytime.

👉 **AI Resume Matching + ATS Scoring**  
Provides an ATS score and AI-generated feedback tailored to the resume.

👉 **Clean Modern UI**  
Reusable components, consistent styling, and responsive layout.

👉 **Code Reusability & Structured Architecture**  
Built with modular components and scalable folder structure.

👉 **Cross-device Compatibility**  
Works smoothly on desktop, tablet, and mobile.

---

## 🤸 Quick Start

Follow these steps to run the project locally.

### ✅ Prerequisites

Make sure you have these installed:

- Git
- Node.js
- npm

---

### 📥 Clone the Repository

```bash
git clone https://github.com/Aishkash/ai_resume_analyzer.git
cd ai_resume_analyzer
```


### 📦 Installation

Install the project dependencies:

```bash
npm install
```


Running the Project

```bash
npm run dev
```
Open http://localhost:5173 in your browser to view the project.


---
### 📁 Project Structure
```
ai-resume-analyzer/
├── app/
│   ├── components/        # Reusable UI components (ResumeCard, ScoreBadge, etc.)
│   ├── constants/         # Static constants / config
│   ├── lib/               # Puter store, utilities, helpers
│   ├── routes/            # Main pages (auth, home, resume, upload)
│   ├── root.tsx           # Root layout
│   └── app.css            # Global styles
├── public/                # Icons, images, static assets
├── package.json
└── vite.config.ts
```
