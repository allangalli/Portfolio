import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Allan",
  lastName: "Galli Francis",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI & Analytics Consultant",
  avatar: "/images/avatar.jpg",
  email: "allangalli15@gmail.com",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
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
      I'm Allan, an AI & Analytics Consultant who speaks both AI and business.
      <br /> <br />  Currently leading frontline B2C analytics and intelligence for European retail giants @REAL Growth Consulting, with delivery across client offices in Toronto, London, and Paris.
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
        Allan is a Toronto-based AI & Analytics Consultant and Schulich MMAI alumni with a passion for translating complex AI capabilities into clear business outcomes. A 3x national competition winner, his work spans AI/ML engineering, agentic systems, and analytics-led growth strategy.
        <br /> <br />He has engineered ML systems and AI agents that informed £267M portfolio decisions, doubled client profitability, and drove 3x LTV growth, and led analytics and requirements for multi-million-dollar transformation projects with cross-functional teams of 5-25 stakeholders.
        <br /> <br />With 4+ years of experience across healthcare, financial services, and luxury retail, Allan has delivered AI strategy recommendations to enterprise executives across client offices in Toronto, London, and Paris.
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
        role: "AI & ML Engineer",
        achievements: [
          <>
            Defined customer segmentation strategy processing 4.8M CRM records. Insights informed £267M portfolio repositioning and marketing activation for luxury retail client.
          </>,
          <>
            Designed KPI dashboards linking credit, marketing, and product data. Identified $250K+ EBIT improvement opportunities through customer tier graduation.
          </>,
          <>
            Architected AI customer activation engine for 2.65M-customer luxury sportswear D2C portfolio. Scored 842K customers weekly into 25 segments powering €1M+ revenue per cycle.
          </>,
          <>
            Built AI prospect research agent for luxury jewelry sales team. Cut high-net-worth client intelligence cycle from hours to seconds per lead across 8 platforms.
          </>,
          <>
            Built AI prospecting tool turning a CEO's LinkedIn network into a vetted sales pipeline. Processes 2,000 prospects daily with on-demand enrichment, cutting research time ~90%.
          </>,
        ],
        images: [],
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
        company: "Trillium Health Partners",
        timeframe: "Jan 2024 - Jun 2025",
        role: "Senior Business Analyst",
        achievements: [
          <>
            Led pilot launch of HealthPod, Canada's first "doctor-in-a-box". Defined technical build and AODA/PHIPA compliance roadmap targeting 60% non-urgent ER encounter diversion.
          </>,
          <>
            Owned requirements for eREMS, Ontario's first research management system. Drove discovery with 25+ SMEs, streamlining 30+ workflows and eliminating 4,000+ hours annually.
          </>,
          <>
            Managed data migration for 200k+ legacy records using Azure DevOps. Executed 950+ UAT tests achieving 98% pass rate with Agile practices.
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
        company: "Royal Bank of Canada",
        timeframe: "Sep 2023 - Dec 2023",
        role: "AI Engineer, Financial Data & Trust",
        achievements: [
          <>
            Designed HotSwapPII platform benchmarking 6+ AI models on 1,300 financial documents. Evaluated PII detection accuracy for regulatory compliance requirements.
          </>,
          <>
            Led 5-person team to define KPI framework and transformation roadmap. Reduced model evaluation cycles from 2-week sprints to 3-day cycles, saving 280+ hours per cycle.
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
        role: "Data Analyst, I&T Finance",
        achievements: [
          <>
            Built internal process literacy platform after securing leadership buy-in. Achieved 75% adoption and CFO recognition, reducing knowledge search time across 90-person department.
          </>,
          <>
            Streamlined data ETL pipelines using Python, SQL, and VBA macros. Reduced monthly reporting timelines by 80% for executive decision-making.
          </>,
        ],
        images: [],
      },
      {
        company: "Revera Inc.",
        timeframe: "May 2022 - Aug 2022",
        role: "Technology Transformation Analyst, IT Infrastructure",
        achievements: [
          <>
            Managed national Telecom Migrations project across Canada, liaising with vendors and maintaining project backlog. Delivered $190K+ in annual cost savings.
          </>,
          <>
            Built BI dashboard for migration tracking and performance monitoring. Enabled control initiatives and visibility across 100+ sites nationally.
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
            Authored technical specifications bridging clinical workflows with Epic software reporting requirements and HL7/FHIR data standards. Partnered with 10+ clinical SMEs to define data integration standard for analytics rollout.
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
        description: <>Master of Management in Artificial Intelligence (MMAI) | CGPA: 3.9/4.0 (Distinction) | $25,000 Entrance Scholarship | 3x National Competition Winner: 1st place Women in AI Hackathon (Nov 2024), 2nd place UCalgary Digital Innovation Challenge (Mar 2025), Schulich Startups Pitch Winner | May 2024 – Apr 2025</>,
      },
      {
        name: "University of Waterloo",
        description: <>Bachelor of Science, Honours Health Informatics, Data Science<br />Honours Health Studies (Co-op) with a Minor in Computer Science<br />Co-op Student of the Year Nominee | Dean's Honour List x2 | Sep 2018 – Apr 2023</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "AI/ML & Agentic Systems",
        description: <>Building AI-powered solutions using Python, OpenAI API, LangChain/LangGraph, Pinecone, Microsoft Presidio, SpaCy, and Transformers. Experienced with large language models, agentic frameworks, Model Context Protocol (MCP), Claude Code, and Microsoft Azure AI Foundry.</>,
        images: [],
      },
      {
        title: "Business Analysis & Project Management",
        description: <>Expert in requirements gathering, stakeholder management, and Lean Agile methodologies. PSM-certified and experienced with JIRA, Azure DevOps, Qualtrics, strategy planning, and process optimization.</>,
        images: [],
      },
      {
        title: "Data Analytics & Cloud",
        description: <>Proficient in Python, SQL, Power BI, Tableau, Microsoft Power Query, Power Pivot, and Excel VBA. Cloud platforms: GCP AI Leader certified, Azure AI Fundamentals certified.</>,
        images: [],
      },
      {
        title: "Healthcare & Financial Systems",
        description: <>Domain expertise in healthcare systems (EPIC EMR, AODA/PHIPA compliance, HL7/FHIR) and financial services (General Ledger, EPM/ERP systems, IBM Cognos TM1).</>,
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
  label: "Projects",
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
