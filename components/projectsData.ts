export type ProjectSection = {
  title: string;
  content: string;
};

export type Project = {
  id: string;
  slug: string;
  client: string;
  title: string;
  category: string;
  desc: string;
  sections: ProjectSection[];
  tags: string[];
  bg: string;
  numColor: string;
  metrics: string[];
};

export const projects: Project[] = [
  {
    id: '01',
    slug: 'smartbike-mobility',
    client: 'Smartbike Mobility',
    title: 'Full-Stack Urban Mobility Platform',
    category: 'Mobility · IoT · Full-Stack',
    desc: 'A full-stack self-rental urban mobility platform designed to support large-scale bike-sharing operations with real-time IoT integration.',
    sections: [
      {
        title: 'Project Overview',
        content: 'Smartbike Mobility is a full-stack self-rental urban mobility platform designed to support large-scale bike-sharing operations.\n\nThe system enables users to locate, unlock, and rent bicycles via mobile applications, while providing operators with real-time visibility into fleet usage, performance, and system health.\n\nNuvanta AI was responsible for designing and building the platform end to end—from customer-facing applications and IoT integration to backend services and analytics infrastructure.'
      },
      {
        title: 'The Problem',
        content: 'Urban mobility platforms operate at the intersection of hardware, software, and real-world behavior.\n\nSmartbike required a system that could:\n• Reliably operate physical devices (smart locks) in unpredictable environments\n• Support real-time interactions from mobile users\n• Provide operators with accurate, live operational data\n• Scale across cities without constant manual intervention\n\nThe challenge was not just building features, but creating a system robust enough for continuous, real-world usage.'
      },
      {
        title: 'System Architecture & Components',
        content: 'The platform was designed as a modular, scalable system with clearly defined responsibilities.\n\nCustomer Mobile Applications: Flutter-based applications enabling users to discover bikes, manage rentals, and complete journeys.\n\nSmart Lock & IoT Integration: Bluetooth-based unlocking and device communication to ensure reliable physical access control.\n\nAdmin & Operations Dashboard: Angular-based dashboard for fleet management, usage monitoring, and operational oversight.\n\nBackend Services: Node.js-based APIs handling business logic, user management, device coordination, and transactions.\n\nAnalytics & Monitoring: Real-time dashboards providing visibility into rides, device status, and system performance.\n\nCloud Infrastructure: AWS-based deployment designed for scalability, reliability, and operational resilience.'
      },
      {
        title: 'Key Technical Considerations',
        content: 'Several constraints shaped architectural decisions:\n\nReliability over ideal conditions: Systems were designed to tolerate intermittent connectivity and device variability.\n\nReal-time responsiveness: User actions such as unlocking bikes required fast, predictable system responses.\n\nOperational visibility: Operators needed accurate, real-time insights to manage fleets effectively.\n\nScalability: The platform needed to support growth without redesigning core components.'
      },
      {
        title: 'Outcome & What This Represents',
        content: 'The result was a production-ready urban mobility platform capable of supporting real-world deployments. The system successfully integrated mobile applications, IoT devices, backend services, and analytics into a cohesive platform designed for continuous operation at scale.\n\nSmartbike Mobility reflects Nuvanta AI\'s approach to engineering:\n• Building systems that operate reliably beyond controlled environments\n• Treating architecture and ownership as first-class concerns\n• Designing for long-term operation, not short-term demos'
      }
    ],
    tags: ['Flutter', 'Angular', 'Node.js', 'AWS', 'IoT'],
    bg: 'bg-surface border border-border text-fg',
    numColor: 'text-subtle/10',
    metrics: ['System architecture', 'App development', 'IoT device integration', 'Cloud deployment', 'Observability platform'],
  },
  {
    id: '02',
    slug: 'magnetiq',
    client: 'MagnetIQ',
    title: 'Blockchain-Powered Loyalty & Community Platform',
    category: 'Web3 · SaaS · Web App',
    desc: 'A loyalty-driven community platform enabling brands to build deeper relationships through blockchain-based memberships and digital assets.',
    sections: [
      {
        title: 'Project Overview',
        content: 'MagnetIQ is a loyalty-driven community platform that enables brands to build deeper relationships with their customers through blockchain-based memberships and digital assets. Rather than replacing familiar Web2 experiences, MagnetIQ bridges them with Web3 ownership models — making blockchain genuinely accessible to everyday consumers.\n\nNuvanta AI designed and developed the MVP end to end, delivering a platform that feels as intuitive as a standard web app while putting real digital ownership in the hands of users.'
      },
      {
        title: 'The Problem',
        content: 'Loyalty and community platforms are everywhere — but most offer points and perks that users don\'t truly own. Brands wanted a way to reward customers with something more meaningful: verifiable digital assets tied to real membership and identity.\n\nThe challenge was making this work without alienating mainstream users. Blockchain-native tools are powerful, but notoriously difficult to use. MagnetIQ needed a platform that could:\n• Give users genuine ownership of memberships and collectibles via NFTs\n• Feel as smooth and familiar as any consumer web product\n• Support both traditional payment methods and crypto, without friction\n• Validate an entirely new loyalty model at MVP scale — fast'
      },
      {
        title: 'What We Built',
        content: 'The platform was designed to make Web3 ownership feel like a natural extension of a familiar product experience.\n\nNFT-Based Memberships — Users can join brand communities and receive blockchain-backed memberships through a simple, guided onboarding flow.\n\nDigital Collectibles ("Momentos") — Brands can issue digital collectibles as proof of participation, loyalty, or achievement.\n\nUser Profiles & Asset Management ("Fridge") — A personal dashboard to view and manage memberships and Momentos in a way that feels familiar.\n\nWeb2 + Web3 Payment Experience — Users can transact using traditional payment methods or crypto, powered by Dapper\'s infrastructure.\n\nResponsive Consumer UI — Every surface was designed for real consumer usage — optimized for clarity and accessibility.'
      },
      {
        title: 'Key Engineering Decisions',
        content: 'Abstraction of blockchain complexity: Web3 interactions were handled entirely behind the scenes.\n\nFlow network as the foundation: Chosen for its consumer-friendly architecture and native support for NFTs at scale.\n\nDapper infrastructure for payments: Allowed the platform to support both fiat and crypto transactions through a single unified layer.\n\nMVP-first, scalable by design: Built to validate the core model quickly, while leaving room to expand features without reworking the foundation.'
      },
      {
        title: 'Outcome & What This Represents',
        content: 'Nuvanta AI delivered a functional, production-ready MVP that validates MagnetIQ\'s approach to loyalty and community engagement. The platform successfully demonstrates that blockchain-based ownership can be made accessible to mainstream consumers.\n\nMagnetIQ reflects our ability to operate at the frontier of emerging technology without losing sight of the end user. We build products that are technically sophisticated where it matters, and invisible where it doesn\'t.'
      }
    ],
    tags: ['Web3', 'Flow Network', 'NFTs', 'Dapper', 'Full-stack'],
    bg: 'bg-white border border-border text-fg',
    numColor: 'text-chart-2/20',
    metrics: ['Full-stack web application', 'Flow network integration', 'NFT-based memberships', 'Fiat-to-crypto payments', 'Responsive UI design'],
  },
  {
    id: '03',
    slug: 'sawal-ai',
    client: 'Sawal AI',
    title: 'Applied AI · Voice Agents · Automation',
    category: 'AI · SaaS · Web App',
    desc: 'An AI-powered platform built for SMBs — helping them automate conversations, unlock knowledge, and produce content across voices and channels.',
    sections: [
      {
        title: 'Project Overview',
        content: 'Sawal AI is an AI-powered platform built for small and medium businesses — helping them automate conversations, unlock knowledge faster, and produce content without the manual overhead. Rather than offering a single AI feature, Sawal AI brings together voice agents, intelligent chat, content transcription, and social media workflows into one cohesive product.\n\nNuvanta AI designed and built the AI systems at the core of the platform, integrating them directly into real customer-facing workflows.'
      },
      {
        title: 'The Problem',
        content: 'SMBs are resource-constrained by nature. They deal with repetitive customer queries, slow knowledge retrieval, mounting content backlogs, and limited bandwidth. Off-the-shelf tools help at the edges — but rarely connect into something that actually reduces operational load.\n\nSawal AI needed a platform that could:\n• Handle natural, back-and-forth customer conversations without human handoff\n• Answer business-specific questions by drawing on the company\'s own documents\n• Turn audio and video content into structured, usable insights\n• Generate social media content at scale\n• Work reliably inside real business workflows'
      },
      {
        title: 'What We Built',
        content: 'Voice AI Agents — Conversational voice agents capable of handling natural, multi-turn interactions with customers without scripts or rigid flows.\n\nRAG-Based Intelligent Chatbot — A retrieval-augmented chatbot that draws on a business\'s own documents, FAQs, and knowledge bases to answer questions accurately.\n\nMulti-Format Content Transcription — Automated pipelines that process audio and video content across formats, converting them into clean transcripts.\n\nSummarization & Insights — Transcribed content is automatically distilled into structured summaries and key insights.\n\nSocial Media Content Generation — AI-driven workflows that take existing content and transform it into optimized social posts.'
      },
      {
        title: 'Key Engineering Decisions',
        content: 'RAG over generic chat: The chatbot was built with retrieval-augmented generation to ensure answers are grounded in the customer\'s actual knowledge base.\n\nVoice agents built for natural conversation: Designed to handle the messiness of real human speech: interruptions, context switches, and open-ended questions.\n\nAutomation as the default: Every content pipeline was built to require zero manual steps once triggered. \n\nEmbedded into production: All systems were integrated directly into Sawal AI\'s product infrastructure inside their existing workflows.'
      },
      {
        title: 'Outcome & What This Represents',
        content: 'Nuvanta AI delivered a suite of production-ready AI systems embedded into real customer workflows — improving automation, reducing manual effort, and accelerating content velocity for the businesses using the platform.\n\nSawal AI reflects our approach to applied AI: building systems that solve real operational problems, integrate cleanly into existing workflows, and hold up under everyday use.'
      }
    ],
    tags: ['Azure OpenAI', 'Node.js', 'React', 'PostgreSQL', 'AWS'],
    bg: 'bg-white border border-border text-fg',
    numColor: 'text-purple/20',
    metrics: ['Voice-based AI agents', 'RAG-based chatbot', 'Automated transcription', 'Social content workflows', 'Cloud deployment'],
  },
  {
    id: '04',
    slug: 'hcode',
    client: 'HCode',
    title: 'AI Automation · Workflows · Integration',
    category: 'AI · Automation · SaaS',
    desc: 'A comprehensive AI-powered process automation suite built on n8n, designed to help businesses eliminate manual overhead.',
    sections: [
      {
        title: 'Project Overview',
        content: 'HCode is a comprehensive AI-powered process automation suite built on n8n, designed to help businesses eliminate manual overhead, connect their systems intelligently, and let workflows run themselves. It\'s not just automation — it\'s automation that thinks, routes, and adapts based on the context of each process.\n\nNuvanta AI designed and implemented the platform end to end, delivering custom AI-driven workflows integrated directly into HCode\'s existing business operations.'
      },
      {
        title: 'The Problem',
        content: 'Most businesses run on a patchwork of tools that don\'t talk to each other. Data gets moved manually, decisions that could be automated aren\'t, and teams spend disproportionate time on low-value operational tasks.\n\nHCode needed a platform that could:\n• Connect disparate business systems into unified, automated workflows\n• Apply AI to decision-making — not just trigger-based logic\n• Reduce manual intervention across recurring operational processes\n• Give teams real visibility into what\'s running, what\'s failing, and what\'s waiting\n• Scale to new processes without rebuilding the underlying infrastructure each time'
      },
      {
        title: 'What We Built',
        content: 'AI-Powered Workflow Builder — A drag-and-drop interface for building and managing workflows, extended with AI capabilities.\n\nMulti-System Integration & Orchestration — Native integrations across HCode\'s business tools connected into a single orchestration layer.\n\nAutomated Decision-Making & Routing — Workflows that make intelligent decisions at runtime — routing tasks, escalating exceptions, and adapting based on live data.\n\nReal-Time Process Monitoring & Analytics — A live operations view giving teams full visibility into workflow status, execution history, bottlenecks, and failure points.'
      },
      {
        title: 'Key Engineering Decisions',
        content: 'n8n as the foundation: Provided a proven, extensible base that could be customized deeply without sacrificing reliability.\n\nAI at the decision layer: HCode\'s platform embeds AI into the decision-making layer of workflows, enabling processes that adapt intelligently.\n\nOrchestration over point-to-point integrations: The platform routes everything through a central orchestration layer.\n\nObservability as a core requirement: Real-time monitoring and execution analytics were built in from the start.'
      },
      {
        title: 'Outcome & What This Represents',
        content: 'Nuvanta AI delivered a production-ready AI automation suite that measurably reduced manual operations across HCode\'s business processes. Workflows that previously required human coordination now run automatically.\n\nHCode reflects our ability to take complex, multi-system operational problems and reduce them to something clean, manageable, and self-running.'
      }
    ],
    tags: ['n8n', 'AI Integrations', 'Cloud Infrastructure', 'Automation'],
    bg: 'bg-surface border border-border text-fg',
    numColor: 'text-subtle/10',
    metrics: ['n8n workflow implementation', 'Custom AI automation', 'Multi-system orchestration', 'Intelligent routing logic', 'Real-time monitoring'],
  },
  {
    id: '05',
    slug: 'tokwealth',
    client: 'Tokwealth',
    title: 'RWA Tokenization · Real Estate',
    category: 'Web3 · Fintech · Full-Stack',
    desc: 'Real World Asset (RWA) tokenization platform bringing real estate investment onto the blockchain for fractional ownership and transparent transactions.',
    sections: [
      {
        title: 'Project Overview',
        content: 'Tokwealth is a Real World Asset (RWA) tokenization platform that brings real estate investment onto the blockchain — enabling fractional ownership, transparent transactions, and a fundamentally more accessible way to invest in property.\n\nNuvanta AI designed and built the platform end to end — from investor-facing applications and smart contract infrastructure to compliance systems, security architecture, and financial integrations.'
      },
      {
        title: 'The Problem',
        content: 'Real estate is largely inaccessible. High capital requirements, opaque processes, slow transactions, and geographic limitations keep most investors out. Tokenization changes that — but bringing real-world assets onto the blockchain isn\'t a simple engineering problem.\n\nTokwealth needed a platform that could:\n• Represent physical assets as legally and technically sound digital tokens\n• Allow fractional ownership without sacrificing transparency\n• Meet strict compliance requirements (KYC, KYB, KYT)\n• Handle fiat and crypto payment flows within a regulated framework\n• Give investors a seamless experience without deep blockchain knowledge'
      },
      {
        title: 'What We Built',
        content: 'Investor Mobile & Web Applications — Consumer-grade applications that guide investors through asset discovery, portfolio management, and transactions.\n\nSmart Contract Infrastructure — Custom smart contracts governing tokenization, encoding ownership rights, transfer rules, and compliance logic directly on-chain.\n\nPayment Gateway Integration — Seamless fiat-to-crypto and traditional payment flows.\n\nKYC, KYB & KYT Compliance — End-to-end identity and business verification flows alongside real-time transaction monitoring.\n\nWallet-as-a-Service Integration — Managed wallet infrastructure giving investors secure wallets without self-custody complexity.\n\nPenetration Testing & Security Validation — Rigorous security testing across the full platform surface.'
      },
      {
        title: 'Key Engineering Decisions',
        content: 'Smart contracts as source of truth: Ownership, transfer rules, and compliance conditions were encoded directly into smart contracts.\n\nCompliance embedded into the product flow: Built into the onboarding and transaction flows from the start.\n\nWallet-as-a-Service: Abstracts complexity while preserving genuine on-chain ownership.\n\nSecurity as a first-class requirement: Penetration testing, architecture, and access control design ran in parallel with product development.'
      },
      {
        title: 'Outcome & What This Represents',
        content: 'Nuvanta AI delivered a production-ready RWA tokenization platform capable of handling the full complexity of real estate investment on-chain — compliant, secure, and built for real investors.\n\nTokwealth reflects our ability to operate at the intersection of emerging technology, financial regulation, and consumer product design.'
      }
    ],
    tags: ['Web3', 'Smart Contracts', 'WaaS', 'Cybersecurity', 'Compliance'],
    bg: 'bg-white border border-border text-fg',
    numColor: 'text-purple/20',
    metrics: ['Smart contract infrastructure', 'KYC/KYB/KYT compliance', 'Payment gateway integration', 'Wallet-as-a-Service', 'Security validation'],
  },
  {
    id: '06',
    slug: 'strategy-connect',
    client: 'Strategy Connect',
    title: 'SaaS · Platform Strategy · Systems Architecture',
    category: 'SaaS · Architecture · UI/UX',
    desc: 'A robust strategy consulting services platform built to bring structure, visibility, and operational clarity to consulting operations.',
    sections: [
      {
        title: 'Project Overview',
        content: 'Strategy Connect is a strategy consulting services platform built to bring structure, visibility, and operational clarity to the way consulting businesses manage their work. As the platform grew, the underlying architecture had accumulated technical debt requiring an overhaul.\n\nNuvanta AI stepped in as a strategic and technical partner, conducting a full design audit, overhauling the system architecture, and delivering a scalable SaaS workflow management platform built to support long-term growth.'
      },
      {
        title: 'The Problem',
        content: 'Consulting businesses are process-heavy by nature — managing engagements, deliverables, client communications, and internal workflows. Strategy Connect faced a platform that had grown faster than its foundations.\n\nThe platform needed to:\n• Handle complex consulting workflows without bottlenecking operations\n• Scale reliably as user load and client volume grew\n• Resolve architectural weaknesses before they became production failures\n• Present a consistent, professional product experience\n• Support long-term product development without foundational rework'
      },
      {
        title: 'What We Did',
        content: 'Design Audit — A comprehensive review of the platform\'s existing UX, interface consistency, and design system.\n\nSystem Architecture Overhaul — Structured rearchitecting of the core systems — untangling technical debt, restructuring data flows, and establishing a modular foundation.\n\nSaaS Workflow Management Platform — Purpose-built workflow system designed around consulting operations (engagement tracking, task management, deliverables).\n\nProduct Strategy for Scalability — Defining a scalability roadmap that aligned technical architecture decisions with business growth objectives.'
      },
      {
        title: 'Key Engineering Decisions',
        content: 'Audit before architecture: A thorough audit of existing systems informed every architectural decision.\n\nModular architecture as exit from debt: The overhaul prioritised clean separation of concerns and modular system design.\n\nWorkflow design grounded in consulting reality: The system was designed around how strategy consulting engagements are actually structured.\n\nScalability as a product concern: Approaching scalability at the product strategy level, ensuring architectural choices support the platform\'s growth.'
      },
      {
        title: 'Outcome & What This Represents',
        content: 'Nuvanta AI delivered a restructured, scalable SaaS platform with a coherent design system, a clean technical foundation, and a workflow management product built for consulting businesses.\n\nStrategy Connect reflects our ability to inherit a system, diagnose it honestly, and rebuild it to last, bringing the same rigour to existing platforms as we do to new builds.'
      }
    ],
    tags: ['SaaS', 'Systems Architecture', 'UI/UX', 'Product Strategy'],
    bg: 'bg-white border border-border text-fg',
    numColor: 'text-chart-2/20',
    metrics: ['Comprehensive design audit', 'System architecture overhaul', 'Workflow SaaS development', 'Product scalability strategy', 'Architectural governance'],
  }
];

