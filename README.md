# ALMMATE — Students Guiding Students
> **Peer-Powered Admissions Community & Directory for Indian Online Higher Education**  
> *Prepared for Ankit — Online Education YouTube Creator & Education Counselor*

---

## 🎯 The Core Problem & Solution

* **The Problem:** Prospective students searching for Online MBA colleges in India are inundated with 10+ manipulative calls a day from third-party commission brokers falsely claiming to represent university admission offices. These agents use manufactured urgency (FOMO), false placement promises, and hide mandatory examination fees.
* **The Solution:** **ALMMATE** (*Alumni + Mate*) connects prospective students directly with currently enrolled, peer-verified students who have zero sales incentives, ensuring radical transparency on fees, LMS reality, AI proctored exams, and real placements.

---

## 🚀 Live Platform Features

1. **Brand Identity & Responsive Navbar**
   - Seamless integration of the official **ALMMATE** logo (*Students Guiding Students*).
   - High-contrast, sleek Dark / Light theme toggle with `localStorage` persistence.
   - Quick navigation links to Directory, Mentors, Verification Standard, and Expose series.

2. **Hero Section & The Broker Reality Contrast**
   - High-converting headline: *"Tired of 10 calls from 'college reps' who are really just salespeople?"*
   - Side-by-side interactive contrast card comparing **Third-Party Commission Brokers** vs. **ALMMATE Verified Students**.
   - Live trust metrics ticker: ₹0 commissions, 8+ premier universities, 140+ screened mentors, zero spam.

3. **Filterable University Directory & Deep Dive Modal**
   - **8 Premier Indian Universities:** NMIMS Global Access, Manipal University Jaipur, Amity Online, Chandigarh University, Symbiosis SCDL, Jain Online, D.Y. Patil Online, and UPES Online.
   - Instant live search by university name, city, or specialization (FinTech, Data Science, Marketing, HR).
   - Category filter tabs (*All*, *Top Ranked NAAC A+*, *Budget Friendly < ₹1.5L*, *Tech & AI Focus*).
   - Dedicated **Deep Dive Modal** uncovering:
     - Real tuition fees vs. hidden examination surcharges (e.g. ₹600/paper).
     - LMS quality & weekend AI proctored exam setup.
     - Unfiltered student pros, cons, and consensus verdicts.

4. **Peer Mentor Spotlight & Direct Inquiry Flow**
   - Authentic student mentor cards displaying semester batch, corporate role, ratings, and discussion topics.
   - 3-tier verification checkmarks (`ID Card Verified ✓`, `LinkedIn Matched ✓`, `Video Screened ✓`).
   - Interactive **"Ask an Enrolled Peer"** connect modal capturing prospective student questions without exposing phone numbers to telemarketers.

5. **Interactive "Spot the Fake Counselor" Red Flags Scanner**
   - 5 diagnostic check items reflecting the most common agent sales traps.
   - Real-time risk calculation badge updating from *Safe* to *Moderate Risk* to *RED ALERT: Predatory Sales Manipulation Confirmed*.

6. **The 3-Step Verification Protocol & Anti-Commission Charter**
   - Transparent breakdown of Enrollment proof audit, LinkedIn profile cross-check, and 1-on-1 video screening.
   - Public charter affirming that mentors are never compensated on referral commissions.

7. **Join as a Mentor Portal with Live ID Card Preview**
   - Interactive application form for enrolled students.
   - Real-time live updating Mentor ID Badge that mirrors student inputs dynamically.

8. **Community YouTube Showcase & Fraud Reporting**
   - Curated episode cards highlighting Ankit's "Student Stories" and "Expose" series.
   - Community blacklist modal allowing students to report abusive agent phone numbers.

---

## 🛠️ Technology Stack & Architecture

* **Zero Build Step:** Built with pure, semantic **HTML5**, modern **Vanilla CSS**, and modular **JavaScript (ES6+)**.
* **Zero Dependencies:** Runs natively in any browser or on any static hosting provider.
* **Design System:** Custom HSL color variables, modern glassmorphism, Google Fonts (*Outfit* and *Plus Jakarta Sans*), micro-animations, and full mobile responsiveness.

```
ALMMATE/
├── index.html        # Semantic HTML5 single-page application & modals
├── style.css         # Complete responsive CSS design system (Dark & Light modes)
├── data.js           # Structured dataset for universities, mentors, and red flags
├── app.js            # Interactive logic, search/filters, modal controllers, quiz engine
├── assets/
│   ├── almmate-logo.png             # Raw uploaded logo
│   ├── almmate-logo-dark.png        # Transparent slate logo for light mode
│   ├── almmate-logo-white.png       # Transparent white logo for dark mode
│   └── favicon.png                  # Browser tab icon
└── README.md         # Documentation & deployment guide
```

---

## 🏃‍♂️ How to Run Locally

Because this is a zero-build Vanilla web platform, you can launch it immediately:

```bash
# Option 1: Python HTTP server
cd /Users/rvisharma/ALMMATE
python3 -m http.server 8080

# Then open in your browser:
# http://localhost:8080
```

---

## 🌐 Instant Free Deployment Options

1. **GitHub Pages:**
   - Push this repository to GitHub.
   - Go to **Settings > Pages > Branch: main / root** and click Save.
   - Live URL generated in under 60 seconds!

2. **Vercel / Netlify:**
   - Drag and drop the `ALMMATE` folder into the Netlify or Vercel dashboard.
   - Zero build configuration required.
