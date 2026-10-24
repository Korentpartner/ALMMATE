// ALMMATE Data Layer - Universities, Mentors, Shorts, and Community Data
const ALMMATE_DATA = {
  universities: [
    {
      id: "nmims-online",
      name: "NMIMS Global Access (NGA-SCE)",
      shortName: "NMIMS Online",
      location: "Mumbai, Maharashtra",
      category: "top-ranked",
      tags: ["NAAC A+", "UGC-DEB", "Autonomy Cat I"],
      naac: "NAAC A+",
      ugcApproved: true,
      ranking: "NIRF Top 25 (Overall)",
      feeTotal: "₹1,80,000",
      feePerSem: "₹45,000/sem",
      duration: "2 Years (4 Semesters)",
      specializations: ["Marketing", "Financial Management", "Human Resources", "Operations & Data Science", "Information Technology", "International Trade"],
      examMode: "100% Online Proctored (Weekend slot booking)",
      lmsQuality: "Custom Student Portal + Mobile App (Recorded + Live lectures with Harvard case studies)",
      realPros: [
        "High corporate brand recognition across Indian BFSI, IT, and FMCG sectors.",
        "Harvard Business Review (HBR) case study library included in LMS.",
        "Smooth weekend exam slot booking with AI proctoring."
      ],
      realCons: [
        "Internal assignment evaluation takes 4-6 weeks; strict Turnitin plagiarism penalty.",
        "Exam fee is ₹600 per paper extra (approx ₹14,400 over 2 years not disclosed upfront).",
        "Placement cell provides job portal access, not guaranteed on-campus physical drives."
      ],
      studentVerdict: "Best for working professionals with 2+ years experience seeking brand acceleration in corporate India.",
      mentorsCount: 28,
      featuredQuote: "Don't let agents tell you offline lectures happen at regional centers. Everything is 100% online. Great curriculum, but start assignments 3 weeks early."
    },
    {
      id: "manipal-online",
      name: "Manipal University Jaipur (MUJ Online)",
      shortName: "Manipal Online",
      location: "Jaipur, Rajasthan",
      category: "top-ranked",
      tags: ["NAAC A+", "UGC-DEB", "Free Coursera"],
      naac: "NAAC A+",
      ugcApproved: true,
      ranking: "NIRF Top 65",
      feeTotal: "₹1,75,000",
      feePerSem: "₹43,750/sem",
      duration: "2 Years (4 Semesters)",
      specializations: ["Marketing", "Finance", "HR", "Analytics & Data Science", "FinTech", "Operations", "Supply Chain"],
      examMode: "Online Remote Proctored (LMS integrated)",
      lmsQuality: "State-of-the-art LMS with complimentary Coursera access for 10,000+ global courses",
      realPros: [
        "Free Coursera subscription included — access to Google, IBM, Meta certifications.",
        "Dedicated placement assistance cell with active hiring drives on virtual job fairs.",
        "FinTech and Analytics curriculum is refreshed yearly with industry advisors."
      ],
      realCons: [
        "Live session attendance is encouraged with quiz points in certain modules.",
        "Support tickets take 48-72 hours to resolve during semester registration rush.",
        "Installment schemes have third-party NBFC processing fees."
      ],
      studentVerdict: "Ideal for tech-adjacent professionals and those wanting Coursera certifications bundled with their MBA degree.",
      mentorsCount: 22,
      featuredQuote: "Agents promised me 12 LPA average package. The reality: top recruiters do hire, but average package for online grads is 6–8 LPA depending on prior work experience."
    },
    {
      id: "amity-online",
      name: "Amity University Online",
      shortName: "Amity Online",
      location: "Noida, Uttar Pradesh",
      category: "top-ranked",
      tags: ["NAAC A+", "QS Ranked", "WES Approved"],
      naac: "NAAC A+",
      ugcApproved: true,
      ranking: "QS Asia Top 200",
      feeTotal: "₹1,99,000",
      feePerSem: "₹49,750/sem",
      duration: "2 Years (4 Semesters)",
      specializations: ["Global Finance", "Digital Marketing", "HR Management", "Business Analytics", "International Business", "Hospitality Management"],
      examMode: "Online Web-Cam Proctored (Take from home)",
      lmsQuality: "Amigo LMS portal + Mobile app with live interactive masterclasses by foreign faculty",
      realPros: [
        "WES (World Education Services) recognized — easier credential evaluation for Canada/USA PR.",
        "Diverse specializations not offered elsewhere (Hospitality, Insurance, Global Finance).",
        "Interactive masterclasses with international faculty."
      ],
      realCons: [
        "Telemarketers and brokers spam Amity leads the heaviest; only register via official .amityonline.com portal.",
        "Strict assignment portal deadlines with zero grace period.",
        "Course fee is on the higher tier among private universities."
      ],
      studentVerdict: "Great choice if you are aiming for immigration (WES approved) or looking for international masterclasses.",
      mentorsCount: 31,
      featuredQuote: "Beware of brokers offering '50% exclusive instant scholarship if you pay right now'. Official scholarships are merit-based or defense-based only."
    },
    {
      id: "chandigarh-university-online",
      name: "Chandigarh University Online (CU Online)",
      shortName: "Chandigarh University",
      location: "Mohali, Punjab",
      category: "budget-friendly",
      tags: ["NAAC A+", "UGC-DEB", "Budget Value"],
      naac: "NAAC A+",
      ugcApproved: true,
      ranking: "NIRF Top 40 University",
      feeTotal: "₹1,40,000",
      feePerSem: "₹35,000/sem",
      duration: "2 Years (4 Semesters)",
      specializations: ["Marketing", "Finance", "International Business", "HR", "Entrepreneurship", "IT & Operations"],
      examMode: "Online AI-Proctored Exams",
      lmsQuality: "Blackboard LMS integration with recorded video repository and e-books",
      realPros: [
        "One of the most budget-friendly NAAC A+ accredited online MBAs in India.",
        "Flexible installment schedules with zero-cost EMI directly through university portal.",
        "Active student community and virtual networking hackathons."
      ],
      realCons: [
        "High student batch intake means doubt-clearing sessions can feel crowded.",
        "Placement drives are pooled where competition is high.",
        "Hard copy study books are not provided by default (PDFs only)."
      ],
      studentVerdict: "Best value-for-money option for early-career professionals needing a credible UGC-recognized degree under ₹1.5 Lakhs.",
      mentorsCount: 19,
      featuredQuote: "At ₹35,000 per semester, CU is unbeatable value. Just don't expect executive white-glove treatment. You need self-discipline."
    },
    {
      id: "symbiosis-scdl",
      name: "Symbiosis Centre for Distance Learning (SCDL)",
      shortName: "Symbiosis Online",
      location: "Pune, Maharashtra",
      category: "top-ranked",
      tags: ["Legacy Brand", "UGC-DEB", "AICTE"],
      naac: "NAAC A++",
      ugcApproved: true,
      ranking: "Pioneer in Distance & Online Management",
      feeTotal: "₹1,50,000",
      feePerSem: "₹37,500/sem",
      duration: "2 Years (4 Semesters)",
      specializations: ["Marketing", "Human Resource", "Finance", "Operations", "Hospital & Healthcare", "Data Science"],
      examMode: "Online Computer-Based Exams (On-demand flexible slots)",
      lmsQuality: "SymbiWorld Learning Portal + digital e-library with Springer & Pearson textbooks",
      realPros: [
        "Symbiosis brand carries historic trust across HR departments in Mumbai, Pune, and Bangalore.",
        "On-demand exam slot flexibility — book your test when you feel prepared.",
        "Rigorous academic rigor with balanced case-study evaluation."
      ],
      realCons: [
        "Support tickets take 3-4 days to resolve via email.",
        "Minimal campus recruitment drives; relies on corporate tie-ups for job postings.",
        "Verify your batch exam mode (some regional centers may still offer center-based options)."
      ],
      studentVerdict: "Trusted legacy brand especially favored in West & South India corporate sectors.",
      mentorsCount: 16,
      featuredQuote: "Everyone knows Symbiosis. The syllabus is rigorous. The only catch is administrative queries take a few days to get resolved on the portal."
    },
    {
      id: "jain-online",
      name: "Jain University Online",
      shortName: "Jain Online",
      location: "Bangalore, Karnataka",
      category: "tech-focus",
      tags: ["NAAC A++", "Tech & AI", "LinkedIn Learning"],
      naac: "NAAC A++",
      ugcApproved: true,
      ranking: "NIRF Top 70",
      feeTotal: "₹1,60,000",
      feePerSem: "₹40,000/sem",
      duration: "2 Years (4 Semesters)",
      specializations: ["FinTech", "Data Science & AI", "Digital Business", "Banking & Finance", "Strategic HR", "Logistics & Supply Chain"],
      examMode: "Two-way AI Proctored Online Exams",
      lmsQuality: "LEARNOLOGY LMS with complimentary LinkedIn Learning license for 16,000+ skills",
      realPros: [
        "Modern specializations: FinTech, Product Management, AI for Managers.",
        "Complimentary LinkedIn Learning license throughout 2-year tenure.",
        "Located in Bangalore with strong startup and tech hiring network."
      ],
      realCons: [
        "Strict dual-camera proctoring requirements (laptop web camera + mobile rear camera for exams).",
        "Heavy emphasis on individual project submissions every semester.",
        "Exam rescheduling requires medical or employer letter with penalty fee."
      ],
      studentVerdict: "The best pick for startup operators, product managers, and fintech professionals wanting cutting-edge electives.",
      mentorsCount: 14,
      featuredQuote: "The dual-camera exam proctoring caught a lot of batchmates off-guard. It's strict! But LinkedIn Learning access alone is worth ₹25,000."
    }
  ],

  mentors: [
    {
      id: "priya-sharma",
      name: "Priya Sharma",
      initial: "P",
      role: "Financial Analyst @ Deloitte",
      universityId: "nmims-online",
      universityName: "NMIMS Global Access",
      program: "Online MBA (Finance)",
      batch: "Year 2",
      verifiedBadge: "Verified student",
      honestQuote: "My third-party agent claimed NMIMS holds offline weekend classes. It's 100% virtual LMS. The finance curriculum is intense — start your assignments 3 weeks before the deadline.",
      whatIHelpWith: "Calculating the true 2-year cost of NMIMS (including exam fees), weekend AI proctored exams, and balancing work with study."
    },
    {
      id: "rohit-menon",
      name: "Rohit Menon",
      initial: "R",
      role: "Product Ops @ Razorpay",
      universityId: "manipal-online",
      universityName: "Manipal University Jaipur (MUJ)",
      program: "Online MBA (FinTech & Analytics)",
      batch: "Year 2",
      verifiedBadge: "Verified student",
      honestQuote: "The agent who called me promised '15 LPA guaranteed campus drive'. In reality, MUJ's placement cell offers virtual job fairs where companies hire between 6–9 LPA based on prior tech experience.",
      whatIHelpWith: "Reviewing whether Manipal's FinTech curriculum is worth it for tech professionals and how Coursera credits work."
    },
    {
      id: "ananya-verma",
      name: "Ananya Verma",
      initial: "A",
      role: "Talent Acquisition Specialist",
      universityId: "amity-online",
      universityName: "Amity University Online",
      program: "Online MBA (HR Management)",
      batch: "Year 1",
      verifiedBadge: "Verified student",
      honestQuote: "I received 14 calls in 3 days from brokers offering 'today-only 50% discount'. Amity does NOT have flash discounts! I enrolled for the WES evaluation for Canada PR.",
      whatIHelpWith: "Guiding candidates planning for Canada/US PR on WES recognition and avoiding third-party telemarketers."
    },
    {
      id: "kunal-deshmukh",
      name: "Kunal Deshmukh",
      initial: "K",
      role: "Senior Marketing Associate",
      universityId: "chandigarh-university-online",
      universityName: "Chandigarh University Online",
      program: "Online MBA (Marketing)",
      batch: "Year 2",
      verifiedBadge: "Verified student",
      honestQuote: "If you don't have ₹2 Lakhs for NMIMS, Chandigarh University at ₹1.4 Lakhs is a legitimate option. But don't expect printed books — it's digital PDFs and Blackboard LMS.",
      whatIHelpWith: "Breaking down the exact fee structure without middleman markups and how to self-study without spoon-feeding."
    },
    {
      id: "shreya-kulkarni",
      name: "Shreya Kulkarni",
      initial: "S",
      role: "Operations Lead @ Logistics Corp",
      universityId: "symbiosis-scdl",
      universityName: "Symbiosis Centre for Distance Learning",
      program: "Online MBA (Operations)",
      batch: "Year 2",
      verifiedBadge: "Verified student",
      honestQuote: "Symbiosis' on-demand exam booking gave me breathing room when my workload doubled. The academic content is rock solid, but support tickets take 4 days to answer.",
      whatIHelpWith: "Explaining on-demand exam booking, how Symbiosis is perceived by hiring managers, and study planning."
    },
    {
      id: "aditya-nair",
      name: "Aditya Nair",
      initial: "A",
      role: "Associate Product Manager",
      universityId: "jain-online",
      universityName: "Jain University Online",
      program: "Online MBA (Product Mgmt & AI)",
      batch: "Year 1",
      verifiedBadge: "Verified student",
      honestQuote: "Watch out for the dual-camera exam system: you must connect your phone camera from the back while your laptop web-cam runs. The LinkedIn Learning catalog is fantastic.",
      whatIHelpWith: "Preparing your exam room setup for Jain's dual-camera AI proctoring and reviewing the syllabus for tech/AI electives."
    }
  ],

  // YouTube Shorts knowledge bites curated for Ankit's channel
  shorts: [
    {
      id: "short-1",
      title: "5 Red Flags of Fake College Counselors Calling You",
      tag: "Agent Expose",
      duration: "0:48",
      views: "185K",
      thumbnailBg: "#18181B",
      summary: "How third-party telemarketing brokers scrape your phone number, claim to represent university vice-chancellors, and push high-commission tier-3 colleges.",
      keyTakeaways: [
        "Universities never call from personal WhatsApp or Truecaller names.",
        "There is no 'last 2 seats in UGC quota' in distance/online programs.",
        "Ask them to send the admission link from the official .ac.in or .edu.in domain."
      ]
    },
    {
      id: "short-2",
      title: "NMIMS Hidden Fees: The ₹600 Exam Fee Trap",
      tag: "Fee Reality",
      duration: "0:56",
      views: "240K",
      thumbnailBg: "#27272A",
      summary: "Why that ₹1.8 Lakh quotation from your counselor is incomplete: examination fees, assignment resubmissions, and convocation surcharges.",
      keyTakeaways: [
        "Exam fee is ₹600 per paper extra (approx ₹14,400 across 4 semesters).",
        "Turnitin checks all assignments; plagiarism above 20% results in direct zero marks.",
        "100% online LMS lectures; no physical weekend classes at regional centers."
      ]
    },
    {
      id: "short-3",
      title: "The 10-Second Test That Makes Fake Counselors Hang Up",
      tag: "Cheat Code",
      duration: "0:39",
      views: "310K",
      thumbnailBg: "#1E1B4B",
      summary: "The single question to ask any counselor that instantly exposes whether they are an official university staffer or a third-party affiliate agent.",
      keyTakeaways: [
        "Ask: 'Can you send me an email confirmation from your official university domain right now?'",
        "Brokers only have @gmail.com or third-party consultancy email domains.",
        "If they refuse and push you to pay a 'refundable token' via Google Pay, block them immediately."
      ]
    },
    {
      id: "short-4",
      title: "Manipal vs Amity: What Recruiters Actually Think",
      tag: "Placements",
      duration: "0:52",
      views: "194K",
      thumbnailBg: "#0F172A",
      summary: "Do Indian tech and MNC recruiters respect Online MBAs? Unfiltered feedback from 4th-semester students on placement assistance cells.",
      keyTakeaways: [
        "Placements are virtual job portals, not guaranteed on-campus physical recruitment drives.",
        "Manipal includes free Coursera access with Google and IBM certifications.",
        "Amity is WES recognized, making it valuable for Canada/US PR applicants."
      ]
    }
  ],

  redFlags: [
    {
      id: "flag-1",
      icon: "⚡",
      agentClaim: '"Sir, only 2 seats remain in the UGC quota. Transfer ₹10,000 token in 30 minutes or fee doubles."',
      reality: "Online MBA admissions in India run on batch cycles across 3 to 6 months. There is NO limited classroom seat count in distance/online programs. They are locking your commission token.",
      riskLevel: "HIGH SEVERITY"
    },
    {
      id: "flag-2",
      icon: "📞",
      agentClaim: '"I am calling directly from the official University Admission Head Office."',
      reality: "Check Truecaller or ask them to email you from an official university domain (e.g. @nmims.edu or @manipal.edu). 99% will be calling from a consultancy with names like EduConnect, CollegeDekho, or VidyaGuide.",
      riskLevel: "CRITICAL SEVERITY"
    },
    {
      id: "flag-3",
      icon: "💼",
      agentClaim: '"100% guaranteed campus placement with minimum 12 to 18 LPA packages for all online students."',
      reality: "No online university in India guarantees 100% placements. Most provide job portals, virtual fairs, and career resume assistance. Packages for online MBAs depend heavily on your prior work experience.",
      riskLevel: "HIGH SEVERITY"
    },
    {
      id: "flag-4",
      icon: "🎯",
      agentClaim: '"NMIMS or Symbiosis has bad reviews this year. You should enroll in [College X] instead."',
      reality: "Agents earn variable commissions (some private universities pay ₹30,000 to ₹50,000 per admission while top state/reputed institutes pay very little or zero). They steer you to who pays them most.",
      riskLevel: "HIGH SEVERITY"
    },
    {
      id: "flag-5",
      icon: "💸",
      agentClaim: '"Total complete fee is only ₹1,50,000. Nothing else to pay."',
      reality: "They conveniently hide exam fees (e.g. ₹600-₹1000 per subject = ₹14,000+), assignment resubmission charges, and ₹2,500 convocation fees until after you have paid the main tuition fee.",
      riskLevel: "MODERATE SEVERITY"
    }
  ]
};
