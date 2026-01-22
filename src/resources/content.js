import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Allan",
  lastName: "Galli Francis",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Business Systems Analyst and AI/ML Analytics Consultant",
  avatar: "/images/avatar.jpg",
  email: "allangalli15@gmail.com",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English","Tamil","Hindi"], // optional: Leave the array empty if you don't want to display languages
  resume: "/resume.pdf", // Path to resume file in public directory
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about AI product development, business analysis, and digital transformation.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/allangalli",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/allangallifrancis",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Resume",
    icon: "document",
    link: person.resume,
  },
];

const home = {
  path: "/",
  image: "/images/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning AI complexity into business clarity</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Collisio</strong></>,
    href: "/work/collisio-ai-networking-platform",
  },
  subline: (
    <>
      I'm Allan, a Business Systems Analyst who speaks both AI and business. 
      <br /> <br />  Currently a Business Analytics Consultant @REAL Growth Consulting and building the future of in-person networking at 
      <span style={{
        fontSize: '1.0em',
        color: 'var(--neutral-on-background-strong)',
        textShadow: '0 0 1px var(--neutral-alpha-strong), 0 0 10px var(--neutral-alpha-weak)',
        filter: 'drop-shadow(0 0 1px var(--neutral-alpha-medium))'
      }}> Collisio </span> 
       while seeking my next AI or Business Analytics role.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/allangalli",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Allan is a Chicago-based Computer Systems and Business Analytics professional with a passion for transforming complex business challenges
        into elegant & thoughtful digital solutions. <br /> <br />His work spans AI product design, digital analytics, and the convergence of technology and business strategy.
        <br /> <br />With 3+ years of experience across healthcare, finance, and technology sectors, Allan specializes in bridging technical and business teams to deliver impactful solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "REAL Growth Consulting",
        timeframe: "Sep 2025 - Present",
        role: "Business Analytics Consultant",
        achievements: [
          <>
            Engineered a customer segmentation platform processing 4.8M CRM records. Insights informed £267M portfolio strategy and doubled profitability via personalized marketing activation.
          </>,
          <>
            Built master customer analytics pipeline for luxury jewelry client using Python and REST APIs with DMP enrichment via Experian Mosaic. Delivered audience segmentation dashboards identifying cross-sell pathways driving 3x LTV growth.
          </>,
          <>
            Developed an AI prospecting tool using Gemini and Perplexity APIs with identity resolution and CRM enrichment. Aimed at reducing manual research time by 70% for sales activation.
          </>,
        ],
        images: [],
      },
      {
        company: "York University",
        timeframe: "Aug 2025 - Present",
        role: "Technical Product Consultant",
        achievements: [
          <>
            Bootstrapped a modern WordPress-based YouthAre platform with a focus on site analytics and UX, delivering 5+ critical features, optimizing page load times by 20%, and enhancing Google indexing.
          </>,
        ],
        images: [
          {
            src: "/images/projects/youthare/youthare-site-hero-view.jpeg",
            alt: "YouthAre Platform Landing Page View",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Collisio",
        timeframe: "May 2025 - Present",
        role: "Founder & Product Lead",
        achievements: [
          <>
            Led product and go-to-market strategy for Collisio, an AI-powered super-connector for in-person events, by clearly defining the problem/market fit, product features, and implementation; secured $50k+ early-stage funding.
          </>,
          <>
            Drove a needs validation campaign via surveys and interviews targeting 300+ event organizers, resulting in 80% support for the product and qualitative metrics to facilitate feature and go-to-market efforts.
          </>,
        ],
        images: [
          {
            src: "/images/projects/collisio/collisio-pitch-deck.jpeg",
            alt: "Collisio Pitch Deck Title Page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/collisio/collisio-suite.png",
            alt: "Collisio Products Lineup",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Institute for Better Health, Trillium Health Partners",
        timeframe: "Jan 2024 - Jun 2025",
        role: "Senior Business Analyst",
        achievements: [
          <>
            Drove product design and pilot launch of the HealthPod, targeting the 50% of Ontarians experiencing specialist backlogs; connected patients to live biometric-enabled virtual care through Canada’s first “doctor-in-a-box”
          </>,
          <>
            Spearheaded market research, feature prioritization, and AODA/PHIPA compliance to support the launch and alleviate ER backlogs by rerouting up to 60% of non-urgent encounters to virtual care.
          </>,
          <>
            Led requirements gathering and design mapping for eREMS, Ontario’s first enterprise research management system; managed 25+ SMEs/leaders to define 30+ workflows and break down process silos across teams.
          </>,
          <>
            Managed evaluation and data migration strategy, including the execution of UAT sessions and 950+ functional/remediation tests (98% pass rate), as well as migration of 200k+ legacy records using Azure DevOps.
          </>,
        ],
        images: [
          {
            src: "/images/projects/thp/thp-eREMS-product-demo.mp4",
            alt: "THP eREMS - Cloud based research management system",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/thp/thp-pod-clinic.jpeg",
            alt: "THP Pod Business Analyst Pod Clinic Front Picture",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/thp/thp-biometric-devices.jpeg",
            alt: "THP Pod Business Analyst Biometric Devices Offerings",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "RBC Borealis",
        timeframe: "Sep 2023 - Dec 2023",
        role: "ML Systems Analyst",
        achievements: [
          <>
            Architected HotSwapPII evaluation platform for PII detection models, benchmarking 6+ NLP models on 1,300 documents.
          </>,
          <>
            Designed complete product lifecycle, achieving &gt;80% recall and reducing model evaluation cycles by ~30%.
          </>,
          <>
            Built comprehensive testing framework using Microsoft Presidio, SpaCy, and Transformers.
          </>,
        ],
        images: [
          {
            src: "/images/projects/hotswappii/hotswappii-dashboard.jpeg",
            alt: "HotSwapPII Product Dashboard",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/hotswappii/hotswappii-preview.png",
            alt: "HotSwap PII Dashboard Preview Picture",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Royal Bank of Canada",
        timeframe: "Jan 2023 - Aug 2023",
        role: "Business Systems Analyst, I&T Finance",
        achievements: [
          <>
            Secured leadership buy-in, facilitated user interviews, and defined requirements to build an internal process literacy platform and change management strategy; achieved a 75% adoption rate and recognition by RBCs CFO.
          </>,
          <>
            Streamlined data ETL pipelines using Python, SQL, and VBA Macros to cut BI developers’ monthly reporting timelines by 80%, strengthening time-sensitive decisions.
          </>,
        ],
        images: [],
      },
      {
        company: "Trillium Health Partners",
        timeframe: "Jan 2021 - Dec 2021",
        role: "Lead Health Systems Analyst",
        achievements: [
          <>
            Led 5-person cross-functional team to gather requirements and develop a training enrollment system for 10,000+ healthcare staff. Achieved 90%+ completion rate, driving successful EPIC software adoption across 3 hospitals.
          </>,
          <>
            Deployed automated data consolidation process using Excel VBA and SQL, standardizing data elements across systems. Reduced LMS registration lead time by 75%, saving 2,000+ FTE hours.
          </>,
          <>
            Authored technical specifications bridging clinical workflows with Epic software reporting requirements and HL7/FHIR data standards.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Schulich School of Business, York University",
        description: <>Master of Management in Artificial Intelligence (MMAI) | GPA: 3.9/4.0 (Distinction) | 2x Hackathon Winner | May 2024 – Apr 2025</>,
      },
      {
        name: "School of Public Health Sciences, University of Waterloo",
        description: <>Bachelor of Science, Health Studies (Co-op) | Health Informatics | Co-op Student of Year Nominee | Dean's Honour List | Sep 2018 – Apr 2023</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "AI/ML Development",
        description: <>Building AI-powered solutions using Python, SpaCy, Transformers, Microsoft Presidio, OpenAI API, and LangChain for NLP and generative AI applications.</>,
        images: [],
      },
      {
        title: "Business Analysis & Project Management",
        description: <>Expert in requirements gathering, stakeholder management, and Agile methodologies. Certified PSM and experienced with JIRA, Azure DevOps, and process optimization.</>,
        images: [],
      },
      {
        title: "Data Analytics & Cloud",
        description: <>Proficient in Python, SQL, Power BI, Tableau, and cloud platforms (GCP AI Leader certified, Azure AI Fundamentals certified).</>,
        images: [],
      },
      {
        title: "Healthcare & Financial Systems",
        description: <>Domain expertise in healthcare systems (EPIC EMR, PHIPA compliance) and financial services (General Ledger, EPM/ERP systems, IBM Cognos TM1).</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
