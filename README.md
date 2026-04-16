# Vivero Belgrano Norte

**Vivero Belgrano Norte** is a high-performance digital catalog developed to bridge the gap between traditional botany and modern editorial design. Built with a focus on **Visual Storytelling** and **Atomic Design**, this platform provides a seamless, high-end experience for discovering botanical species.

---

# Architecture & Philosophy

The project was conceived under the "Design as a Service" philosophy, prioritizing clean aesthetics and technical efficiency. Every component was engineered to maintain a balance between a **minimalist, magazine-like interface** and a robust data structure.

## Key Technical Pillars:
* **Decoupled Architecture:** Using **Sanity CMS** as a headless backend allows for independent content scaling without affecting frontend logic.
* **Optimized Rendering:** Leveraging **Astro’s Islands Architecture** to deliver zero-bundle-size HTML where possible, hydrating only the interactive catalog components via **React**.
* **Design Tokens:** A custom-built color palette and typography system based on earth tones and premium glassmorphism.

## Engineering Stack

| Layer | Technology |
| **Frontend Framework** | Astro + React.js |
| **Styling** | Tailwind CSS (JIT Engine) |
| **Content Management** | Sanity.io (Headless CMS) |
| **Iconography** | Lucide React |
| **Deployment** | Vercel Edge Functions |

# Core Functionalities

## Intelligent Filtering System
A sophisticated filtering engine that allows users to segment the botanical collection by light exposure, watering frequency, and spatial location (Interior/Exterior).

## Real-time Search
Implemented with a client-side state management system to ensure instantaneous feedback as users type, providing a premium "search-as-you-type" experience.

## Responsive Art Direction
A mobile-first approach where the layout adapts its grid system and navigation patterns (Sticky Glassmorphism Nav) to maintain the editorial feel across all devices.

---

# 🛠 Installation & Local Development

1. **Environment Setup**
   Clone the repository and install the dependencies:
   ```bash
   git clone [https://github.com/your-username/vivero-belgrano.git](https://github.com/your-username/vivero-belgrano.git)
   cd vivero-belgrano
   npm install