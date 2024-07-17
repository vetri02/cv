import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Vetrichelvan Jeyapalpandy",
  initials: "VJ",
  location: "Batlagundu, India",
  locationLink: "",
  about: "CTO | Architect",
  summary:
    "CTO with extensive experience in blockchain, DeFi, and AI-powered crypto applications. Proven track record in developing multi-chain solutions and enhancing Web3 accessibility.",
  avatarUrl: "",
  personalWebsiteUrl: "",
  contact: {
    email: "vetri@frontier.xyz",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/vetri02",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vetri02/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/vetri02",
        icon: XIcon,
      }]
  },
  education: [
    {
      school: "Kongu Engineering College",
      degree: "Bachelor of Technology, Chemical Engineering",
      start: "2003",
      end: "2007",
    },
  ],
  work: [
    {
      company: "Frontier",
      link: "https://frontier.xyz",
      badges: ["Wallet"],
      title: "Chief Technology Officer & Co-founder",
      logo: "/images/logos/FrontierLogo.png",
      start: 2020,
      end: null,
      description:
        "Led the development of Frontier.xyz, a revolutionary non-custodial multi-chain wallet for the Web3 and DeFi ecosystem\nPioneered the first DeFi Aggregator in the space, significantly enhancing user access to diverse DeFi protocols\nExpanded support to over 70 blockchain networks, establishing Frontier as a leader in multi-chain operability\nArchitected and implemented native DeFi applications, bringing cutting-edge DeFi functionality directly to users\nSpearheaded the development of cross-chain bridges, enabling seamless asset transfer between different blockchains\nDesigned and deployed smart contracts for various platforms, ensuring robust and secure DeFi interactions",
    },
    {
      company: "Elsa",
      link: "https://heyelsa.ai",
      badges: ["AI", "Crypto"],
      title: "Advisor & Lead Architect",
      logo: "/images/logos/ElsaLogo.png",
      start: 2024,
      end: null,
      description:
        "Provided strategic guidance and architectural expertise for Elsa, an AI-powered crypto concierge platform\nAdvised on the development of a sophisticated natural language interface for seamless, intent-based interactions with crypto platforms\nContributed to the design of an advanced multi-chain asset management system supporting diverse blockchain networks\nGuided the implementation of AI-driven market analysis and trading strategy algorithms\nOversaw the architectural design of an automated, intent-based transaction execution system\nAdvised on the integration of NFT wallet functionality and marketplace features\nContributed to the creation of an adaptive educational resource system for crypto concepts",
    },
    {
      company: "Selfchain",
      link: "https://selfchain.xyz",
      badges: ["Chain", "Intent"],
      title: "Chief Technology Officer",
      logo: "/images/logos/SelfChainLogo.png",
      start: 2023,
      end: null,
      description:
        "Developed an innovative blockchain platform focusing on revolutionizing Web3 access\nImplemented a modular intent-centric access layer for intuitive blockchain interactions\nDesigned keyless wallet infrastructure, enhancing security and user experience\nIntegrated LLM-powered intent interpretation for natural blockchain interactions",
    },
  ],
  advisory: [
    "Providing strategic guidance and technical expertise to innovative blockchain projects:",
    {
      company: "Unmarshal",
      link: "https://unmarshal.io/",
    },
    {
      company: "Novastro",
      link: "https://www.novastro.xyz/",
    },
    {
      company: "Bitarch",
      link: "https://bitarch.io",
    },
    {
      company: "Surge",
      link: "https://surge.build/",
    },
  ],
  skills: [
    "Blockchain",
    "Web3",
    "Cryptography",
    "DeFi",
    "Smart Contracts",
    "LLM",
    "Machine Learning",
    "Multi-chain",
    "NFTs",
    "Cryptocurrency",
    "Frontend Development",
  ],
  projects: [],
  experience: [
    {
      "role": "UI Consultant",
      "company": "Care.com",
      "period": "2013 - 2020"
    },
    {
      "role": "Front End Engineer",
      "company": "Cleartrip.com",
      "period": "2012 - 2013"
    },
    {
      "role": "Web UI Developer",
      "company": "Apostek India Pvt Ltd.",
      "period": "2010 - 2012"
    },
    {
      "role": "Technical Associate",
      "company": "Tech Mahindra Ltd",
      "period": "2007 - 2010"
    }
    
  ],
} as const;
