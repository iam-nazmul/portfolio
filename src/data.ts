export const profile = {
  name: 'Md. Nazmul Hossain',
  title: 'Senior Full-Stack Software Engineer',
  location: 'Dhaka, Bangladesh',
  phone: '+880 1761-777748',
  email: 'nazmul.cse48@gmail.com',
  linkedin: 'https://linkedin.com/in/iam-nazmul',
  github: 'https://github.com/iam-nazmul',
  summary:
    'Results-driven Senior Full-Stack Software Engineer with 6+ years of experience designing, building, and scaling end-to-end platforms serving 50K+ users. Expert in async Python backends (Django, FastAPI) and modern frontend frameworks (React, TypeScript, Vue.js, Next.js). Proven track record architecting multi-tenant SaaS solutions, vendor-facing dashboards, and internal developer tooling. Strong DevOps practitioner with hands-on experience in AWS/GCP, Kubernetes, Terraform, and CI/CD pipelines. Recently focused on LLM-powered workflows using Anthropic, OpenAI, and LangChain, delivering 95% automation coverage improvements. High-agency engineer who identifies team bottlenecks and builds tools to eliminate them.',
  stats: [
    { value: '6+', label: 'Years experience' },
    { value: '50K+', label: 'Users served' },
    { value: '8M+', label: 'Requests / month' },
    { value: '99.9%', label: 'System uptime' },
  ],
}

export const competencies = [
  {
    title: 'Platform & Architecture',
    body: 'End-to-end platform ownership across data models, backend services, REST/GraphQL APIs, and responsive web UIs. Multi-tenant architecture with per-tenant database isolation and role-based access control.',
    icon: 'layers',
  },
  {
    title: 'Backend Engineering',
    body: 'High-performance async Python microservices (Django, FastAPI, asyncio) handling 8M+ requests/month. Query optimization reducing response times by 93%. Redis caching, WebSockets, and event-driven architectures with RabbitMQ.',
    icon: 'server',
  },
  {
    title: 'Frontend Development',
    body: 'React, TypeScript, Vue.js, Next.js, and Tailwind CSS. Component library adopted across 12 teams. Delivered 20+ production features for 50K+ users.',
    icon: 'browser',
  },
  {
    title: 'DevOps & Cloud Infrastructure',
    body: 'AWS/GCP, Docker, Kubernetes, Terraform, Jenkins CI/CD. Infrastructure-as-code reducing deployment time by 80% and costs by 25%.',
    icon: 'cloud',
  },
  {
    title: 'Observability & Reliability',
    body: 'Grafana, Prometheus, Sentry. Reduced MTTR by 50% and achieved 99.9% system uptime across distributed systems.',
    icon: 'pulse',
  },
  {
    title: 'AI/LLM Integration',
    body: 'Production LLM workflows with Anthropic SDK, OpenAI, LangChain. Prompt engineering, few-shot learning, evaluation pipelines, and fallback handling. 95% automation coverage improvement.',
    icon: 'spark',
  },
]

export const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Glascutr Ltd',
    location: 'Dhaka, Bangladesh',
    period: 'February 2025 — Present',
    points: [
      'Customized ERPNext for client-specific operations by configuring DocTypes, workflows, and permission rules to match business processes in inventory and procurement, reducing manual approval steps by 60%.',
      'Extended Frappe’s core framework with custom API integrations, background jobs, and permission structures to support complex multi-company setups, while mentoring 3 junior developers on Frappe best practices and code review standards.',
      'Built and evaluated LLM-powered workflows using Anthropic, OpenAI, and LangChain, experimenting with prompt design and few-shot techniques to improve output accuracy on domain-specific tasks, benchmarking results against baseline manual processes.',
      'Deployed and monitored LLM-powered features in production, implementing comprehensive logging, error tracking, and fallback handling to ensure reliability as usage scaled across 5+ client environments.',
    ],
  },
  {
    role: 'Backend Engineer & Team Lead',
    company: 'Ehsan Marketing',
    location: 'Bogura, Bangladesh',
    period: 'October 2020 — January 2025',
    points: [
      'Led backend architecture for high-traffic microservices using Python, Django, FastAPI, and asyncio, designing REST and GraphQL APIs that supported 8M+ requests/month while reducing latency by 93% through async processing and Redis caching.',
      'Architected and scaled cloud infrastructure on AWS/GCP using Docker, Kubernetes, and Terraform, cutting deployment time by 80% and infrastructure costs by 25% through automated Jenkins CI/CD pipelines and infrastructure-as-code practices.',
      'Built and maintained full-stack applications end-to-end using React, TypeScript, and Next.js paired with Django/FastAPI backends, delivering 20+ production features used by 50K+ users with a reusable component library adopted across 12 teams.',
      'Established observability and reliability practices across distributed systems using Grafana, Prometheus, and Sentry, cutting MTTR for production incidents by 50% and improving system uptime to 99.9%.',
      'Integrated AI/LLM capabilities into production workflows using the Anthropic SDK and locally hosted LLMs, designing prompt strategies and evaluation pipelines that improved automation coverage by 95%, while working across PostgreSQL/MongoDB data layers and RabbitMQ-driven event architectures.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Ferntech Solution Limited',
    location: 'Dhaka, Bangladesh',
    period: 'March 2020 — September 2020',
    points: [
      'Automated 10+ manual business processes with RPA (Selenium, Python), saving approximately 20 hours per week in manual labor.',
      'Built Django backend services with secure authentication (OAuth2/JWT), RESTful APIs, and PostgreSQL database integration for internal business applications.',
    ],
  },
]

export const projects = [
  {
    name: 'Unlimited App-Centric E-Commerce Platform',
    desc: 'Architected microservices ecosystem using Python/FastAPI, Node.js/Express, and Java/Spring Boot with Next.js/TypeScript. Integrated PayPal Payment Gateway. Designed for scalability with event-driven communication and containerized deployments.',
    tags: ['FastAPI', 'Node.js', 'Spring Boot', 'Next.js', 'PayPal', 'Microservices'],
  },
  {
    name: 'SOFTIFE SaaS ERP',
    desc: 'Multi-tenant, multi-domain ERP SaaS built on ERPNext with per-tenant database isolation, role-based access control, and a Vue.js admin dashboard for tenant management. Served multiple client organizations with customized workflows.',
    tags: ['ERPNext', 'Vue.js', 'Multi-tenant', 'RBAC'],
  },
  {
    name: 'AI/LLM Developer Tooling Suite',
    desc: 'CLI chatbot, review analyzer, and text summarizer built with Python, FastAPI, local LLMs, and the Anthropic SDK. Included prompt design frameworks and LLM evaluation pipelines for measuring output quality and consistency.',
    tags: ['Python', 'FastAPI', 'Anthropic SDK', 'LLM', 'Prompt Engineering'],
  },
  {
    name: 'Playwright TestKit (Claude Code Plugin)',
    desc: 'Browser UI test automation plugin featuring autonomous test fixing with guardrails that prevent agents from weakening test assertions. Reduced test maintenance overhead by 70% for QA teams.',
    tags: ['Playwright', 'Claude Code', 'Test Automation', 'QA'],
  },
  {
    name: 'FlexFactory & Ritmise',
    desc: 'Production planning and POS analytics platforms built on Frappe/ERPNext + Vue.js. Delivered workflow tooling and real-time dashboards designed for non-technical retail and manufacturing staff, improving operational visibility.',
    tags: ['Frappe', 'ERPNext', 'Vue.js', 'Dashboards', 'POS'],
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C/C++'] },
  {
    group: 'Backend Frameworks',
    items: ['Django', 'FastAPI', 'Flask', 'asyncio', 'ERPNext/Frappe', 'Node.js', 'Express', 'Spring Boot'],
  },
  { group: 'Frontend', items: ['React', 'Vue.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { group: 'APIs & Protocols', items: ['REST', 'GraphQL', 'WebSockets', 'gRPC', 'OAuth2', 'JWT'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
  {
    group: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, Lambda, RDS)', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions'],
  },
  { group: 'Messaging & Events', items: ['RabbitMQ', 'Apache Kafka', 'Celery', 'Redis Queue'] },
  { group: 'Observability', items: ['Grafana', 'Prometheus', 'Sentry', 'ELK Stack', 'Datadog'] },
  {
    group: 'AI/ML & LLMs',
    items: ['Anthropic SDK', 'OpenAI API', 'LangChain', 'Hugging Face', 'Prompt Engineering', 'LLM Evaluation', 'Few-Shot Learning'],
  },
  { group: 'Testing & QA', items: ['Pytest', 'Jest', 'Playwright', 'Selenium', 'RPA'] },
  { group: 'Tools & Workflow', items: ['Git', 'GitHub', 'GitLab', 'Jira', 'Confluence', 'Agile/Scrum'] },
]

export const education = {
  degree: 'B.Sc. in Computer Science and Engineering',
  school: 'Pabna University of Science and Technology, Bangladesh',
  period: 'January 2015 — January 2019',
}
