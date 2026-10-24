export const profile = {
  name: 'Aaron Maureal',
  shortName: 'Aaron',
  role: 'Full Stack LLM Engineer Associate',
  location: 'Manila, Philippines',
  email: 'maureal.aaron@gmail.com',
  github: 'https://github.com/aaronjoshua-dev',
  linkedin: 'https://www.linkedin.com/in/aaron-maureal/',
  avatar: '/img/profile-square.jpg',
  intro: [
    'I’m a Full Stack LLM Engineer Associate at Accenture in Manila. Most of my work is on the backend: Python APIs, AWS MWAA (Apache Airflow) workflows, data mapping and large-scale ingestion into Milvus and S3.',
    'Outside of work I build web applications with Vue and Python, and I’m going deeper into cloud-native architecture and AI/LLM technologies.',
  ],
  bio: [
    'I’m a Full Stack LLM Engineer Associate at Accenture, based in Manila. My work is mostly backend: building Python APIs, workflows on AWS Managed Workflows for Apache Airflow (MWAA), and the data mapping and ingestion pipelines that load hundreds of files into Milvus and S3 for a client platform. I also tune the AI prompts behind its LLM-powered features.',
    'I like owning work end to end, from implementation through testing and deployment, and digging into the root cause when something breaks. What I build sits between backend services, frontend requirements and day-to-day operations, so I work closely with frontend developers and QA to make sure it all fits together.',
    'Next, I want to go deeper into cloud-native architecture, backend system design and AI/LLM technologies, and take on larger pieces of work.',
    'I believe the best way to grow is to stay curious and keep building. I’m open to new opportunities, collaborations and challenges.',
  ],
}

export const socials = [
  { label: 'github', href: 'https://github.com/aaronjoshua-dev' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/aaron-maureal/' },
]

export const experience = [
  {
    title: 'Full Stack LLM Engineer Associate',
    company: 'Accenture',
    location: 'Philippines · On-site',
    period: 'Mar 2026 — Present',
    current: true,
    summary: 'Backend-focused on a client platform: workflow orchestration on AWS MWAA, Python APIs, data ingestion into Milvus and S3, and AI prompt work.',
    highlights: [
      'Implemented new Global and Domestic DAGs on AWS MWAA (Apache Airflow) to extend the platform’s workflows.',
      'Built backend features and APIs in Python, working with frontend developers to match application and UI requirements.',
      'Built data and character mappings, and ran large-scale ingestion of hundreds of files across multiple seasons and episodes into Milvus and S3.',
      'Updated AI prompts and fixed AI enhancement backlog items to improve the platform’s LLM-powered features.',
      'Owned backlog items from implementation through development testing, root cause analysis and production deployment.',
      'Took part in design discussions and code reviews, and helped teammates with setup and troubleshooting.',
    ],
    tech: ['Python', 'AWS MWAA', 'Airflow', 'DynamoDB', 'Milvus', 'S3'],
  },
  {
    title: 'Intern',
    company: 'The Umonics Method',
    location: 'Singapore · Remote',
    period: 'Feb 2025 — May 2025',
    summary: 'Remote internship working on the company’s WordPress websites and hosting.',
    tech: ['WordPress', 'cPanel'],
  },
]

export const stack = [
  { label: 'Frontend', items: ['JavaScript', 'Vue.js', 'Tailwind CSS', 'CSS', 'Vite'] },
  {
    label: 'Backend',
    items: ['Python', 'Java', 'PHP', 'FastAPI', 'PostgreSQL', 'MySQL', 'MongoDB', 'AWS Lambda', 'DynamoDB'],
  },
  { label: 'AI & Machine Learning', items: ['TensorFlow', 'PyTorch', 'OpenAI', 'Anthropic', 'Claude Code', 'Codex'] },
]

export const projects = [
  {
    name: 'Personal Website',
    image: '/img/portfolio.png',
    description: 'My personal website to showcase my profile, skills and projects, and a place to try out new technology.',
    tech: ['Vue 3', 'Tailwind CSS'],
    github: 'https://github.com/aaronjoshua-dev/portfolio.git',
    demo: 'https://aaronjoshuadev.netlify.app/',
  },
]
