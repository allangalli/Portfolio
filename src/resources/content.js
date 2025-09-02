import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Allan",
  lastName: "Galli Francis",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Product Manager",
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
      I'm Allan, a product manager who speaks both AI and business. 
      <br /> <br />  Currently building the future of professional networking at 
      <span style={{
        fontSize: '1.0em',
        color: 'var(--neutral-on-background-strong)',
        textShadow: '0 0 1px var(--neutral-alpha-strong), 0 0 10px var(--neutral-alpha-weak)',
        filter: 'drop-shadow(0 0 1px var(--neutral-alpha-medium))'
      }}> Collisio </span> 
       while seeking my next AI product leadership role.
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
        Allan is a Toronto-based AI Product Manager and Senior Business Analyst with a passion for transforming complex business challenges
        into elegant digital solutions. <br /> <br />His work spans AI product development, digital transformation, and the convergence of technology and business strategy.
        <br /> <br />With 4+ years of experience across healthcare, finance, and technology sectors, Allan specializes in bridging technical and business teams to deliver impactful solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Collisio",
        timeframe: "Jan 2025 - Present",
        role: "Co-Founder & Product Lead",
        achievements: [
          <>
            Led product & GTM strategy for AI-powered networking platform, securing $50K+ early-stage funding
          </>,
          <>
            Drove needs validation campaign via surveys and interviews targeting 300+ event organizers, achieving 80% support
          </>,
          <>
            Defined market fit, product requirements, and implementation roadmap for intelligent matching features
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
        timeframe: "Jan 2024 - May 2025",
        role: "Senior Business Analyst",
        achievements: [
          <>
            Led requirements gathering, configuration, and UAT for new ERP system, collaborating with 25+ SMEs to map 30+ workflows
          </>,
          <>
            Managed testing/data migration strategy executing 950+ functional tests and migrating 200K+ records using Azure DevOps
          </>,
          <>
            Directed market scans and testing of 40+ devices from 34 vendors for diagnostic automation, achieving 80% pilot satisfaction
          </>,
          <>
            Facilitating readiness assessment for MS Copilot AI rollout to 120 staff, focusing on adoption strategy and data privacy
          </>,
        ],
        images: [
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
        timeframe: "Sept 2024 - Apr 2025",
        role: "AI Product Manager",
        achievements: [
          <>
            Architected 'HotSwapPII' evaluation platform for PII detection models, benchmarking 6+ NLP models on 1,300 documents
          </>,
          <>
            Designed complete product lifecycle achieving &gt;80% recall and reducing model evaluation cycles by ~30%
          </>,
          <>
            Built comprehensive testing framework using Microsoft Presidio, SpaCy, and Transformers
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
        timeframe: "Jan 2022 - Aug 2022",
        role: "Solutions Analyst, I&T Finance",
        achievements: [
          <>
            Streamlined data ETL pipelines using Python, SQL, and VBA to cut reporting timelines by 80%
          </>,
          <>
            Built internal process literacy platform achieving 75% adoption rate, recognized by CFO
          </>,
          <>
            Implemented learning platform with 200+ training videos for Finance Division
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
        description: <>Master of Management in Artificial Intelligence (MMAI) | GPA: 3.9/4.0 (Distinction) | May 2024 – Apr 2025</>,
      },
      {
        name: "University of Waterloo",
        description: <>Bachelor of Science, Health Studies (Co-op) | Specialization: Health Informatics | GPA: 3.7/4.0 | Sep 2018 – Apr 2023</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
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
        description: <>Proficient in Python, SQL, Power BI, Tableau, and cloud platforms (AWS Solutions Architect certified, Azure AI Fundamentals certified).</>,
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
