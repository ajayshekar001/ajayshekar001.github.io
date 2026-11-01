// All portfolio content lives here. Edit this file to update the site — no build step needed.
// Empty links are hidden automatically.

window.PORTFOLIO = {
  name: "Ajay Shekar",
  title: "Lead Software Engineer · Agentic AI, Identity Security & Data Platforms",
  location: "", // optional, e.g. "Bengaluru, India"
  summary:
    "Engineer with 10 years of experience. Today I build the agent layer of an identity-security platform: an MCP gateway that lets AI agents find and call hundreds of tools safely, plus the Temporal and MongoDB pipelines that feed it. Before that I spent years on FHIR healthcare platforms. I measure before I change anything, and I write down what the numbers do and don't prove.",
  links: {
    github: "https://github.com/ajayshekar001",
    linkedin: "", // add your LinkedIn URL to show a button
    email: "", // add only if you want it public
    resume: "", // e.g. "resume.pdf" placed next to index.html
  },

  stats: [
    { value: "10+", label: "years building software" },
    { value: "2×+", label: "AI agent tool-selection accuracy" },
    { value: "~98%", label: "fewer tokens per agent session" },
    { value: "200M+", label: "rows cleaned from production databases" },
  ],

  // Current role. Public-safe on purpose: no client names, internal product names,
  // internal APIs or architecture details. Results are rounded.
  experience: [
    {
      company: "Unosecur · Identity security",
      role: "Lead Software Engineer",
      period: "Present", // add a start date when ready, e.g. "2024 – Present"
      summary:
        "I work across the platform's AI agent layer and its cloud-identity data pipelines, which connect AI agents to enterprise tools and ingest IAM data from AWS, GCP and Azure.",
      projects: [
        {
          name: "Tool discovery for AI agents",
          problem:
            "Giving an LLM agent hundreds of tool definitions up front was expensive, and it made the agent worse at choosing the right tool.",
          contribution:
            "Designed and built on-demand tool search, using hybrid semantic and keyword retrieval with permission checks and audit logging. I validated it with a controlled A/B evaluation.",
          impact:
            "More than doubled top-1 tool-selection accuracy, cut tokens per query by over 10× and session-start tokens by about 98%.",
          tags: ["MCP", "TypeScript", "Embeddings", "Hybrid search", "LLM evals"],
        },
        {
          name: "LLM agent accuracy and agent-ready APIs",
          problem:
            "A multi-stage LLM agent over a large API surface sometimes gave confident wrong answers, and it wasn't clear which stage caused them.",
          contribution:
            "Built stage-by-stage evaluation, diagnosed retrieval and planning failures, and delivered a prioritized fix plan. I also hardened the APIs for agent use and built human-in-the-loop approval for write actions.",
          impact:
            "Turned agent quality from anecdotes into measured numbers per stage, and fixed inconsistent counts across endpoints.",
          tags: ["LLM agents", "RAG", "Evals", "Human-in-the-loop", "API design"],
        },
        {
          name: "Securing agent-to-agent communication",
          problem: "AI agents increasingly call other agents, and each hop needs clear identity and authorization.",
          contribution:
            "Researched and wrote the design for delegated identity, authorization on every hop and just-in-time approval in multi-agent workflows.",
          impact: "", // left empty on purpose; the Impact line is hidden when blank
          tags: ["A2A", "Agent identity", "Authorization", "System design"],
        },
        {
          name: "Rewriting data-ingestion workflows on Temporal",
          problem:
            "Cron services loaded entire datasets into memory in one long run, which caused CPU spikes and expensive retries.",
          contribution:
            "Rewrote them as resumable, bounded Temporal workflows that stream data in chunks, and removed hot-path inefficiencies.",
          impact:
            "Peak CPU dropped about 4–5× and average CPU about 2×. Memory use became predictable regardless of how big a customer's data is.",
          tags: ["Temporal", "TypeScript", "MongoDB", "Kubernetes"],
        },
        {
          name: "Production database cleanup and performance",
          problem:
            "Duplicate data blocked an index build and slowed writes on a shared database. Some heavy queries were also slow.",
          contribution:
            "Ran safe, resumable deduplication jobs, designed a unique index that keeps legitimate records, and fixed slow queries and connection leaks.",
          impact:
            "Removed 200M+ redundant rows with no data loss, stopped duplicates at the source and made a key query about 40× faster.",
          tags: ["MongoDB", "Data engineering", "Performance", "Kubernetes Jobs"],
        },
      ],
    },
  ],

  // Categories used by the filter chips.
  categories: ["AI & LLMs", "Healthcare", "Platform & DevOps", "Full-stack"],

  projects: [
    {
      name: "Mortgage Underwriting Copilot",
      repo: "mortgage-recommendations",
      year: "2025",
      category: "AI & LLMs",
      featured: true,
      blurb:
        "Turns loan documents into URLA applications and checks them against Fannie Mae and Freddie Mac underwriting rules (DTI, LTV, credit, reserves). A Neo4j knowledge graph of the guidelines supports semantic, multi-hop and context search, and an LLM explains each decision with chain-of-thought reasoning.",
      highlights: [
        "PDF → URLA conversion pipeline",
        "Rule-based validator with risk tiers",
        "Compares graph, vector and LLM query approaches",
      ],
      tags: ["Python", "FastAPI", "Neo4j", "OpenAI", "Gemini", "Knowledge Graph"],
    },
    {
      name: "FHIR Knowledge-Graph RAG",
      repo: "fhir_rag",
      public: false, // private repo — no code link shown
      year: "2024",
      category: "AI & LLMs",
      featured: true,
      blurb:
        "Flattens FHIR patient records into a Neo4j graph and text embeddings, then answers clinical and compliance questions with retrieval-augmented generation over both. Includes a separate compliance-checking RAG pipeline.",
      highlights: [
        "FHIR → graph and FHIR → text converters",
        "Graph + vector hybrid retrieval",
        "Compliance RAG over policy documents",
      ],
      tags: ["Python", "FHIR", "Neo4j", "Embeddings", "RAG"],
    },
    {
      name: "PACO: Patient Guardian",
      repo: "patient-interaction-tuned",
      year: "2023",
      category: "AI & LLMs",
      featured: true,
      blurb:
        "Built for the Lightspeed Gen AI Hackathon. Listens to a doctor–patient conversation, transcribes it live, and drafts a structured clinical note covering diagnosis, history, medications and lab orders, then reads guidance back to the patient.",
      highlights: [
        "Streaming speech-to-text (Whisper / Google)",
        "LangChain prompt chains on GPT-4",
        "Real-time UI over Socket.IO",
      ],
      tags: ["Python", "Flask", "LangChain", "GPT-4", "Whisper"],
    },
    {
      name: "Textbook Q&A (NCERT RAG)",
      repo: "ncert-gen",
      year: "2024",
      category: "AI & LLMs",
      blurb:
        "Chunks and embeds textbook PDFs, keeping page metadata, then answers student questions grounded in the retrieved passages. Built with both a pandas embedding store and ChromaDB.",
      tags: ["Python", "RAG", "ChromaDB", "Embeddings"],
    },
    {
      name: "HAPI FHIR Server: Extended Operations",
      repo: "hapi-fhir-jpa-starter-extended-ops",
      public: false, // private repo — no code link shown
      year: "2021",
      category: "Healthcare",
      featured: true,
      blurb:
        "A production-style HAPI FHIR JPA server extended with custom resource types, multi-tenant partitioning, search-narrowing and auth interceptors, and pre-storage hooks for document uploads.",
      highlights: [
        "Custom resource providers and operations",
        "Partition-aware multi-tenancy",
        "Authorization and search-narrowing interceptors",
      ],
      tags: ["Java", "HAPI FHIR", "Spring", "Docker"],
    },
    {
      name: "Temporal Workflows with NestJS",
      repo: "temporal",
      public: false, // private repo — no code link shown
      year: "2021",
      category: "Platform & DevOps",
      blurb:
        "Durable, retryable business workflows on Temporal, wrapped in a NestJS service and runnable locally through Docker Compose with Postgres, MySQL, Cassandra or CockroachDB backends.",
      tags: ["TypeScript", "Temporal", "NestJS", "Docker"],
    },
    {
      name: "Allure Reports on Kubernetes",
      repo: "allure-ci-cd-automation",
      public: false, // private repo — no code link shown
      year: "2024",
      category: "Platform & DevOps",
      blurb:
        "A CI/CD pipeline that generates Allure test reports in GitHub Actions, packages them as Docker images and serves them on Kubernetes, so every build gets a shareable report.",
      tags: ["GitHub Actions", "Docker", "Kubernetes", "Allure"],
    },
    {
      name: "RestaurantsHub API",
      repo: "RestuarantsHub",
      year: "2020",
      category: "Full-stack",
      blurb:
        "A TypeScript REST API for discovering and ordering home-cooked food: JWT auth, geocoded search, file uploads, OpenAPI validation and security middleware, deployed with Docker.",
      tags: ["TypeScript", "Express", "MongoDB", "Docker"],
    },
    {
      name: "DevCamper API",
      repo: "DevCamper_API",
      year: "2020",
      category: "Full-stack",
      blurb:
        "Backend for a bootcamp directory: CRUD for bootcamps, courses and reviews, radius search, role-based auth and password reset by email.",
      tags: ["Node.js", "Express", "MongoDB"],
    },
    {
      name: "SMS Notification Service",
      repo: "sendSMS",
      year: "2020",
      category: "Full-stack",
      blurb:
        "A small, containerised TypeScript service for sending templated SMS notifications, with Jest tests and PM2 process management.",
      tags: ["TypeScript", "Node.js", "Docker", "Jest"],
    },
    {
      name: "COVID-19 Tracker",
      repo: "covidtrack",
      year: "2020",
      category: "Full-stack",
      blurb: "A React dashboard of COVID-19 case counts by country and over time.",
      tags: ["React", "JavaScript"],
    },
  ],

  skills: [
    { group: "Agentic AI", items: ["MCP", "A2A", "LangGraph", "AWS Bedrock", "Tool retrieval", "Evals & A/B trials", "Human-in-the-loop"] },
    { group: "AI & Data", items: ["LLM apps", "RAG", "LangChain", "OpenAI / Gemini", "Neo4j", "ChromaDB", "Embeddings", "pandas"] },
    { group: "Identity security", items: ["Cloud IAM (AWS, GCP, Azure)", "Authorization", "Agent identity & delegation", "Audit logging"] },
    { group: "Healthcare", items: ["HL7 FHIR", "HAPI FHIR", "FHIRPath", "Care plans", "Consent & ABAC"] },
    { group: "Backend", items: ["TypeScript", "Node.js", "NestJS", "Python", "FastAPI", "Java", "Spring"] },
    { group: "Platform", items: ["Temporal", "Docker", "Kubernetes", "GitHub Actions", "GCP", "MongoDB", "PostgreSQL"] },
  ],
};
