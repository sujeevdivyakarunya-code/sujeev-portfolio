export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'UX Critique' | 'Information Architecture' | 'Mobile App UI' | 'Heuristic Evaluation' | 'Design Systems';
  filterCategory: 'case-studies' | 'mobile-apps' | 'design-systems';
  year: string;
  clientOrContext: string;
  role: string;
  featured: boolean;
  summary: string;
  problem: string;
  frictionPoints: string[];
  solution: string;
  interventionSteps: {
    stepTitle: string;
    description: string;
    highlight: string;
  }[];
  outcomes: string[];
  tools: string[];
  skills: string[];
  linkedinUrl: string;
  prototypeUrl?: string;
  mockupType: 'pop-upi' | 'district-ia' | 'organic-app' | 'blinkit-spotify' | 'dark-mode-login';
  statsBadge?: { label: string; value: string };
  beforeAfter?: {
    beforeLabel: string;
    beforeText: string;
    beforeIssue: string;
    afterLabel: string;
    afterText: string;
    afterBenefit: string;
  };
}

export interface CreatorProfile {
  name: string;
  alternateName: string;
  title: string;
  tagline: string;
  shortBio: string;
  longBio: string;
  location: string;
  email: string;
  secondaryEmail: string;
  phone: string;
  linkedinUrl: string;
  availableForWork: boolean;
  experience: {
    role: string;
    company: string;
    period: string;
    type: string;
    description: string;
    bullets: string[];
  }[];
  education: {
    degree: string;
    major: string;
    institution: string;
    location: string;
    period: string;
  }[];
  services: {
    title: string;
    description: string;
    icon: string;
    deliverables: string[];
  }[];
  skillsMatrix: {
    category: string;
    skills: { name: string; level: string; description: string }[];
  }[];
  philosophySteps: {
    number: string;
    title: string;
    tagline: string;
    description: string;
    deliverables: string[];
  }[];
}

export const creatorProfile: CreatorProfile = {
  name: "Madiki Sujeevkumar",
  alternateName: "Sujeev Kumar Madiki",
  title: "Creative UI/UX Designer",
  tagline: "Bridging human psychology, heuristic precision, and scalable Figma systems to build intuitive digital products.",
  shortBio: "UI/UX Designer and Decode Labs Intern with deep expertise in user research, wireframing, high-fidelity UI design, and interactive prototyping. Passionate about deconstructing complex product UX and crafting evidence-based design solutions.",
  longBio: "I design digital products with clear intent. Having completed hands-on design sprints at Decode Labs and published rigorous UX breakdowns for high-traffic products like POP UPI, District, Blinkit, and Spotify, my approach combines cognitive empathy, information architecture, and scalable Figma variable systems. Currently pursuing B.Tech in Electronics & Communication Engineering at RGUKT, bringing structured analytical thinking into interface engineering.",
  location: "Vijayawada, Andhra Pradesh, India",
  email: "sujeevstrange999@gmail.com",
  secondaryEmail: "sujeevdivyakarunya@gmail.com",
  phone: "+91-9390121236",
  linkedinUrl: "https://www.linkedin.com/in/madiki-sujeevkumar-8068752a6",
  availableForWork: true,
  
  services: [
    {
      title: "UI/UX & Product Design",
      description: "Crafting end-to-end mobile and web interfaces rooted in user research, intuitive user journeys, and clean visual hierarchy.",
      icon: "Layout",
      deliverables: ["User Journey Maps", "Wireframing", "High-Fidelity Screens", "Design Specifications"]
    },
    {
      title: "Figma Design Systems & Variables",
      description: "Building production-grade component architectures with auto-layout, tokenized variables, responsive constraints, and dark/light modes.",
      icon: "Component",
      deliverables: ["Design Tokens", "Auto Layout 5.0 Kits", "Component Variants", "Dark/Light Modes"]
    },
    {
      title: "Heuristic Audits & Product Teardowns",
      description: "Diagnosing usability bottlenecks, cognitive mismatch, and navigation friction to propose clear, evidence-based improvements.",
      icon: "SearchCheck",
      deliverables: ["UX Heuristic Audits", "Information Architecture Redesigns", "Micro-Copy Optimization", "Friction Analysis"]
    },
    {
      title: "Interactive Prototyping",
      description: "Bringing static frames to life with Figma Smart Animate, click-through flows, and motion specifications for developer handoff.",
      icon: "PlaySquare",
      deliverables: ["Clickable Prototypes", "Micro-Interaction Demos", "Usability Test Flows", "Handoff Specs"]
    }
  ],

  experience: [
    {
      role: "UI/UX Design Intern",
      company: "Decode Labs",
      period: "Internship",
      type: "End-to-End Product Design",
      description: "Completed hands-on internship covering the end-to-end UI/UX design process, delivering user research, wireframes, and interactive prototypes.",
      bullets: [
        "Executed end-to-end UI/UX design workflows from user need analysis to high-fidelity clickable Figma prototypes.",
        "Applied user-centered design thinking to deliver simple, friction-free interface solutions across design assignments.",
        "Collaborated on design system standardization, maintaining spacing tokens and auto-layout component consistency."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      major: "Electronics and Communication Engineering (ECE)",
      institution: "Rajiv Gandhi University of Knowledge Technologies (RGUKT)",
      location: "Srikakulam, Andhra Pradesh, India",
      period: "Undergraduate"
    }
  ],

  skillsMatrix: [
    {
      category: "Design Tools & Prototyping",
      skills: [
        { name: "Figma", level: "Expert", description: "Auto-layout 5.0, nested components, responsive constraints, and design systems" },
        { name: "Figma Variables & Tokens", level: "Advanced", description: "Color modes, numeric spacing tokens, and light/dark theme architecture" },
        { name: "Interactive Prototyping", level: "Advanced", description: "Smart Animate, micro-interaction states, and user test flows" },
        { name: "Adobe Photoshop", level: "Proficient", description: "Visual asset manipulation, photo composition, and mockups" },
        { name: "CapCut", level: "Proficient", description: "Product walkthrough editing and motion presentation videos" }
      ]
    },
    {
      category: "UX Methodologies & Architecture",
      skills: [
        { name: "User-Centered Design (UCD)", level: "Core Strength", description: "Designing around user goals, mental models, and feedback loops" },
        { name: "Heuristic Evaluation", level: "Core Strength", description: "Nielsen Norman 10 Usability Heuristics & cognitive friction analysis" },
        { name: "Information Architecture (IA)", level: "Advanced", description: "Navigation systems, content hierarchies, and thumb zone ergonomics" },
        { name: "Wireframing & Lo-Fi Mapping", level: "Advanced", description: "Rapid structural ideation and user journey exploration" },
        { name: "Design Case Study Writing", level: "Core Strength", description: "Evidence-based storytelling and public UX breakdown carousels" }
      ]
    }
  ],

  philosophySteps: [
    {
      number: "01",
      title: "Discover & Friction Hunt",
      tagline: "Questioning default assumptions",
      description: "Observing real-world user interaction friction, mental model mismatches, and cognitive load points in digital workflows.",
      deliverables: ["Friction Audits", "User Problem Statements", "Mental Model Mapping"]
    },
    {
      number: "02",
      title: "Deconstruct & Heuristics",
      tagline: "Diagnosing the 'Why'",
      description: "Applying Nielsen Norman heuristics and information hierarchy principles to isolate root usability flaws without jumping straight into aesthetics.",
      deliverables: ["Heuristic Matrices", "Information Hierarchy Trees", "Navigation Flow Audits"]
    },
    {
      number: "03",
      title: "Architect & Systemize",
      tagline: "Tokens, grids & auto-layout",
      description: "Engineering robust UI components in Figma using strict 8pt grids, scalable variables, auto-layout, and accessible contrast tokens.",
      deliverables: ["Figma Component Libraries", "Tokenized Variables", "Responsive Mobile Grids"]
    },
    {
      number: "04",
      title: "Prototype & Validate",
      tagline: "Testing before code",
      description: "Building interactive prototypes to simulate real micro-interactions, gather peer critique, and validate UX rationale with evidence.",
      deliverables: ["Interactive Prototypes", "LinkedIn UX Carousels", "Developer Handoff Guides"]
    }
  ]
};

export const projectsData: Project[] = [
  {
    id: "pop-upi-ux-critique",
    title: "POP UPI: 'Pay Friends' to 'Pay Anyone'",
    subtitle: "Micro-interaction & Cognitive Mental Model UX Breakdown",
    category: "UX Critique",
    filterCategory: "case-studies",
    year: "2025",
    clientOrContext: "Independent UX Breakdown",
    role: "Product UX Researcher & UI Designer",
    featured: true,
    summary: "Identified a critical cognitive ambiguity in the POP UPI mobile interface where 'Pay Friends' created hesitation for non-contact and merchant payments. Proposed a zero-rework copy refinement ('Pay Anyone') with evidence-based mental model alignment.",
    problem: "When users open POP UPI to scan a shop QR code or transfer funds to an unknown vendor/driver, the prominent CTA 'Pay Friends' contradicts their intent. In cognitive UX psychology, 'Friends' implies stored contacts only, creating friction and split-second transaction hesitation.",
    frictionPoints: [
      "Labeling ambiguity: 'Pay Friends' creates cognitive hesitation when paying merchants or new numbers.",
      "Mental model mismatch: UPI is inherently universal, yet the copy constrained the perceived capability.",
      "High drop-off risk: Split-second friction in fintech payments leads users to switch to competitor apps."
    ],
    solution: "Refined the CTA copy to 'Pay Anyone' while maintaining the existing clean icon and visual layout. This simple yet profound micro-copy adjustment expands the user's perception to 100% of payment scenarios without requiring layout restructuring.",
    interventionSteps: [
      {
        stepTitle: "1. Mental Model Analysis",
        description: "Mapped user expectations when opening UPI apps vs the cognitive friction triggered by restrictive friend-only copy.",
        highlight: "Friction Point: 100% of merchant payments felt mislabeled."
      },
      {
        stepTitle: "2. Copy Refinement & Heuristics",
        description: "Evaluated terminology against Jakob Nielsen's 'Match between system and real world' heuristic.",
        highlight: "Proposed 'Pay Anyone' as the universal semantic standard."
      },
      {
        stepTitle: "3. Figma Case Study Carousel",
        description: "Structured findings into a multi-slide visual teardown carousel and published on LinkedIn for peer review.",
        highlight: "Shared evidence-based UX rationale with the design community."
      }
    ],
    outcomes: [
      "Identified zero-cost UX optimization that eliminates payment hesitation.",
      "Documented and shared as a LinkedIn Case Study carousel with extensive design community praise.",
      "Established standard for micro-copy precision in Indian UPI fintech ecosystems."
    ],
    tools: ["Figma", "Heuristic Matrix", "Auto Layout", "Design Thinking"],
    skills: ["Micro-Copy Optimization", "Heuristic Analysis", "Cognitive Mental Models", "Case Study Writing"],
    linkedinUrl: "https://www.linkedin.com/in/madiki-sujeevkumar-8068752a6",
    mockupType: "pop-upi",
    statsBadge: { label: "Impact", value: "Zero-Code Friction Reduction" },
    beforeAfter: {
      beforeLabel: "Original UI (POP UPI)",
      beforeText: "Pay Friends",
      beforeIssue: "Ambiguous: Implies you can only pay saved contacts. Causes doubt when paying merchants or drivers.",
      afterLabel: "Sujeev's Redesign",
      afterText: "Pay Anyone",
      afterBenefit: "Universal & Clear: Instantly communicates that any phone number, UPI ID, or QR code can be paid."
    }
  },
  {
    id: "district-navigation-redesign",
    title: "District App Navigation Redesign",
    subtitle: "Information Architecture & Bottom Navigation Ergonomics",
    category: "Information Architecture",
    filterCategory: "case-studies",
    year: "2025",
    clientOrContext: "Independent Product UX Study",
    role: "UI/UX Designer & IA Specialist",
    featured: true,
    summary: "Analyzed navigation bottlenecks in the District app where critical ticket passes and time-sensitive notifications were deeply buried. Redesigned the primary experience with a 4-tab bottom navigation and active Notification center.",
    problem: "Real-world users attending events struggled to find active booking passes and venue notifications at the moment of entry. The original interface hid bookings under secondary profile sub-menus and lacked a dedicated notification center for show reminders or refunds.",
    frictionPoints: [
      "Excessive tap depth (3+ taps) to retrieve active event entry QR passes at venue gates.",
      "Lack of a centralized Notification center for time-critical updates, show delay alerts, or refund statuses.",
      "Visual clutter in header shortcuts causing inconsistent thumb reachability."
    ],
    solution: "Re-architected the navigation hierarchy around a 4-tab bottom bar: (Home, Experiences, Wishlist, Profile). Replaced redundant header shortcuts with an active Notification center to ensure time-critical updates are always 1 tap away.",
    interventionSteps: [
      {
        stepTitle: "1. Navigation Task Flow Mapping",
        description: "Counted physical taps and cognitive decisions required to view booked show tickets before entering a venue.",
        highlight: "Reduced tap journey from 4 taps down to 1 persistent tab."
      },
      {
        stepTitle: "2. 4-Tab Information Architecture",
        description: "Structured primary bottom bar with clear visual icons: Home (Discover), Experiences (Active Bookings), Wishlist (Saved), Profile (Settings).",
        highlight: "Ergonomic thumb zone placement for one-handed mobile use."
      },
      {
        stepTitle: "3. High-Fidelity Figma Prototype",
        description: "Built pixel-perfect screens in Figma using auto-layout 5.0, high-contrast typography, and smooth tab switching.",
        highlight: "Adhered to mobile accessibility standards and modern dark aesthetic."
      }
    ],
    outcomes: [
      "Streamlined booking retrieval from 3+ nested menus to a single thumb tap.",
      "Created dedicated real-time notification gateway for event alerts and ticket updates.",
      "Delivered complete high-fidelity Figma screen recreation with structured component auto-layout."
    ],
    tools: ["Figma", "Auto Layout", "Information Architecture", "Mobile Design Guidelines"],
    skills: ["Information Architecture", "Bottom Navigation Design", "Thumb Zone Ergonomics", "High-Fidelity UI"],
    linkedinUrl: "https://www.linkedin.com/in/madiki-sujeevkumar-8068752a6",
    mockupType: "district-ia",
    statsBadge: { label: "Tap Efficiency", value: "70% Faster Pass Access" },
    beforeAfter: {
      beforeLabel: "Original Structure",
      beforeText: "Hidden Bookings & Profile Menu",
      beforeIssue: "Tickets buried inside nested settings. Header crowded with low-value shortcuts.",
      afterLabel: "Sujeev's 4-Tab IA",
      afterText: "Home • Experiences • Wishlist • Profile",
      afterBenefit: "Direct 1-tap pass access + prominent Notifications center in top header for instant updates."
    }
  },
  {
    id: "organic-vegetables-delivery",
    title: "Organic Vegetables Delivery App",
    subtitle: "End-to-End Mobile Product Design & Interactive Prototype",
    category: "Mobile App UI",
    filterCategory: "mobile-apps",
    year: "2025",
    clientOrContext: "Mobile Product Concept",
    role: "Lead Product & UI Designer",
    featured: true,
    summary: "Designed a complete mobile application interface from scratch for an organic produce delivery service, featuring farm-to-table traceability, transparent weight-based pricing, and an intuitive 3-step checkout funnel.",
    problem: "Shoppers of fresh organic vegetables need clear indicators of farm source, harvesting time, and exact price-per-weight. Existing grocery apps clutter interfaces with artificial urgency banners and confusing cart minimums.",
    frictionPoints: [
      "Lack of trust regarding organic certification and harvesting freshness.",
      "Confusing pricing for variable-weight items (e.g. 500g vs 1kg bundle pricing).",
      "Overly complex multi-screen checkout processes causing cart abandonment."
    ],
    solution: "Designed a clean, earthy, nature-inspired visual design system with dedicated 'Harvested Today' badges, one-tap unit increment steppers, and a streamlined 3-step bottom-sheet checkout.",
    interventionSteps: [
      {
        stepTitle: "1. User Research & Personas",
        description: "Interviewed health-conscious urban shoppers to understand the #1 barrier to buying organic vegetables online.",
        highlight: "Key finding: Freshness transparency and unit pricing matter more than discount codes."
      },
      {
        stepTitle: "2. Visual Language & Component System",
        description: "Selected soothing forest emeralds, warm off-white surfaces, and high-contrast typography in Figma.",
        highlight: "Built scalable product cards with integrated weight steppers and origin tags."
      },
      {
        stepTitle: "3. Interactive Clickable Prototype",
        description: "Connected all user flows: Home Browse → Filter by Organic Farm → Item Detail → Smart Cart → Instant UPI Checkout.",
        highlight: "Full interactive Figma prototype simulating real-world grocery ordering."
      }
    ],
    outcomes: [
      "End-to-end multi-screen mobile UI system with custom iconography and card states.",
      "Interactive Figma prototype validated with full user journey test flows.",
      "Demonstrated mastery of mobile e-commerce conversion patterns and micro-interactions."
    ],
    tools: ["Figma", "Interactive Prototyping", "Photoshop", "Design Tokens"],
    skills: ["End-to-End Product Design", "Design Systems", "E-Commerce Funnels", "Interactive Prototyping"],
    linkedinUrl: "https://www.linkedin.com/in/madiki-sujeevkumar-8068752a6",
    mockupType: "organic-app",
    statsBadge: { label: "Prototype", value: "Full Clickable Flow" }
  },
  {
    id: "blinkit-spotify-analysis",
    title: "Product Design Analysis: Blinkit & Spotify",
    subtitle: "Heuristic Teardowns & High-Density UI Recreation",
    category: "Heuristic Evaluation",
    filterCategory: "case-studies",
    year: "2024 - 2025",
    clientOrContext: "Independent UX Research",
    role: "UX Researcher & UI Analyst",
    featured: true,
    summary: "Conducted deep 'why'-based design evaluations of Blinkit's quick-commerce conversion mechanics and Spotify's audio browsing hierarchy, accompanied by pixel-accurate Figma recreations.",
    problem: "How do high-traffic apps organize massive catalogs without cognitive overload? Decoding the UX rationale behind delivery countdowns, category rail scrolling, and dynamic dark mode contrast.",
    frictionPoints: [
      "High information density can cause visual fatigue if contrast and spacing tokens are not strictly balanced.",
      "Urgency banners in quick commerce risk feeling coercive if not paired with clear delivery guarantees.",
      "Music streaming interfaces must allow effortless 1-handed playlist curation while on the move."
    ],
    solution: "Deconstructed Blinkit's home layout, banner hierarchy, and sticky search interactions. Recreated the Blinkit home screen in Figma to practice exact auto-layout constraints, responsive padding, and tokenized typography.",
    interventionSteps: [
      {
        stepTitle: "1. Information Hierarchy Deconstruction",
        description: "Mapped visual scan paths (F-pattern vs Z-pattern) across Blinkit's high-speed grocery shopping flows.",
        highlight: "Identified why the persistent search bar is placed directly below delivery ETA."
      },
      {
        stepTitle: "2. Spotify Ergonomics & Dark Palette Analysis",
        description: "Analyzed Spotify's atmospheric dark surface layers and album artwork color extraction algorithms.",
        highlight: "Documented the relationship between visual contrast and auditory discovery."
      },
      {
        stepTitle: "3. Pixel-Accurate Figma Component Recreation",
        description: "Rebuilt the Blinkit mobile interface in Figma utilizing auto-layout 5.0, responsive grids, and reusable card variants.",
        highlight: "Practiced production-level design system architecture."
      }
    ],
    outcomes: [
      "Published structured UX teardowns establishing evidence-based design reasoning on LinkedIn.",
      "Deepened proficiency in complex, high-density component architecture in Figma.",
      "Built habit of continuous design critique and product deconstruction."
    ],
    tools: ["Figma", "Heuristic Framework", "Component Architecture", "Photoshop"],
    skills: ["Heuristic Analysis", "High-Density UI", "Component Tokens", "Design Deconstruction"],
    linkedinUrl: "https://www.linkedin.com/in/madiki-sujeevkumar-8068752a6",
    mockupType: "blinkit-spotify",
    statsBadge: { label: "Research", value: "Evidence-Based Teardowns" }
  },
  {
    id: "dark-mode-login-variables",
    title: "Minimal Dark Mode Login Experience",
    subtitle: "Visual Design, Smart Animate & Figma Variables Architecture",
    category: "Design Systems",
    filterCategory: "design-systems",
    year: "2024",
    clientOrContext: "Interactive UI & Micro-Interactions",
    role: "UI Designer & Motion Architect",
    featured: true,
    summary: "Engineered an atmospheric, distraction-free authentication experience with interactive Figma Smart Animate state transitions, glowing focus rings, and tokenized variable architecture.",
    problem: "Many login flows overwhelm users with loud graphics, low-contrast input borders, and rigid static screens that lack engaging feedback during authentication.",
    frictionPoints: [
      "Poor contrast in dark mode input placeholders violating WCAG accessibility.",
      "Hardcoded color values in design files making theme switching time-consuming.",
      "Static authentication screens without fluid state feedback or micro-delight."
    ],
    solution: "Designed a clean, single-column dark mode login experience with smooth Smart Animate state transitions, interactive field validation, and structured Figma variable tokens.",
    interventionSteps: [
      {
        stepTitle: "1. Token & Variable Architecture",
        description: "Created structured Figma variables for surfaces, text-primary, text-secondary, border-subtle, and glowing focus rings.",
        highlight: "Structured color and spacing token hierarchy."
      },
      {
        stepTitle: "2. Smart Animate Micro-Interactions",
        description: "Prototyped fluid state transitions for input focuses, password reveal toggles, and button activation states.",
        highlight: "Interactive Figma prototype with Smart Animate physics."
      },
      {
        stepTitle: "3. Minimalist Visual Rhythm",
        description: "Crafted calm, distraction-free typography hierarchy that guides the eye effortlessly from input to CTA.",
        highlight: "WCAG AAA compliant dark mode contrast."
      }
    ],
    outcomes: [
      "Interactive Figma prototype with custom Smart Animate screen transitions.",
      "Reusable, tokenized Figma component kit for authentication flows.",
      "Validated with live in-browser prototype player."
    ],
    tools: ["Figma Variables", "Smart Animate", "Design Tokens", "WCAG Contrast Checker"],
    skills: ["Figma Variables", "Interactive Prototyping", "Dark Mode UI", "Micro-Interactions"],
    linkedinUrl: "https://www.linkedin.com/in/madiki-sujeevkumar-8068752a6",
    prototypeUrl: "https://www.figma.com/proto/xISyqnwLjuTyfb5rdk5YlO/Untitled?node-id=1138-85&p=f&viewport=86%2C25%2C0.65&t=5uX31wQzSrkUTND7-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1134%3A3&page-id=1134%3A2",
    mockupType: "dark-mode-login",
    statsBadge: { label: "Prototype", value: "Smart Animate Live" }
  }
];
