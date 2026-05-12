# Review Verifier - Fantastic Four 🛡️

Welcome to **Review Verifier**, a sleek, modern full-stack web application designed to identify false product reviews on major e-commerce platforms. This project was developed as part of a Hackathon to tackle the growing problem of review manipulation, inflated ratings, and scam sellers online.

---

## 📖 About The Project

Consumers heavily rely on product reviews to make purchasing decisions. However, high-rating products often use bot ratings or paid reviewers to artificially inflate their scores, deceiving honest buyers. 

**Review Verifier** provides a simple interface where users can paste any product URL to immediately receive a detailed fake review analysis. Our system calculates a true "Authenticity Score" to help you shop safely and confidently.

### Key Features
*   **Real-time Review Analysis:** Paste a product URL and the system will analyze bot activity and language patterns.
*   **Authenticity Score:** Generates an adjusted rating compared to the original, highly inflated rating.
*   **Modern Glassmorphism UI:** A premium, dark-themed user interface with smooth animations and glowing neon elements.
*   **Interactive Components:** Features a fully functional FAQ accordion and a responsive Contact Form.

---

## 🛠️ Technology Architecture

This project is a complete **Full-Stack Application** built with modern, lightweight technologies:

### Frontend
*   **HTML5 & CSS3:** Semantic structure with a custom glassmorphism design system, variables, Flexbox, and keyframe animations. No heavy external UI frameworks were used!
*   **Vanilla JavaScript:** Handles DOM manipulation, smooth scrolling, and executes real `fetch()` HTTP requests to communicate with the backend API.

### Backend
*   **Python 3 & Flask:** A fast, reliable REST API server.
*   **API Logic:** Receives the URL payload, simulates necessary network processing, computes the security/authenticity metrics deterministically, and returns the structured JSON response securely via `flask-cors`.

---

## 👥 Meet The Team (Fantastic Four)

This project was brought to life by the Fantastic Four team:
*   **KARPASWAMY K K**
*   **RAJA MUKHESH KUMAAR**
*   **MIRTHIPATI ALEKHYA**
*   **AKHULA HARINI**

---

## 💻 How to Run Locally

If you want to run this full-stack project on your own machine:

1. Clone or download this repository.
2. Open a terminal in the folder and install the Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the Python Backend API server:
   ```bash
   python app.py
   ```
4. Finally, simply double-click `index.html` to open the frontend in your web browser. Everything is securely linked!

---

## 🚀 Live Project Demo

**Check out our live hosted version of the website here:** 
👉 **[https://orange-jilleen-64.tiiny.site](https://orange-jilleen-64.tiiny.site)**
