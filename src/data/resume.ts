import type { ResumeData } from '../components/resume/types'

const resume: ResumeData = {
  name: 'Alexander Lindfors',
  subtitles: ['Software Engineer', 'Full Stack Developer'],
  tagline:
    "I'm Alexander - a full stack developer with 9 years of experience turning complex problems into clean, scalable web applications. I specialize in React, TypeScript and Node.js, from polished user interfaces to robust APIs.",
  contact: {
    email: 'alex@avlindfors.com',
    linkedin: 'https://www.linkedin.com/in/avlindfors',
    linkedinHandle: '/in/avlindfors',
    website: 'https://www.avlindfors.com',
    websiteLabel: 'avlindfors.com',
  },
  sections: {
    experience: { icon: 'briefcase', title: 'Experience' },
    olderExperience: { icon: 'clock', title: 'Older Experience' },
    education: { icon: 'book-open', title: 'Education' },
    languages: { icon: 'globe', title: 'Languages' },
    skills: { icon: 'code', title: 'Skills' },
    contact: { icon: 'mail', title: 'Contact' },
  },
  skills: [
    {
      category: 'Frontend',
      items: [
        'React',
        'TypeScript',
        'AstroJS',
        'Remix',
        'Vanilla Extract',
        'Tailwind',
      ],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Laravel', 'PHP', 'Java', 'tRPC', 'GraphQL'],
    },
    {
      category: 'Infrastructure',
      items: [
        'Azure DevOps',
        'GitHub Actions',
        'Digital Ocean',
        'AWS',
        'Kubernetes',
        'Docker',
      ],
    },
    {
      category: 'AI tools',
      items: ['Claude Code', 'MCP Servers'],
    },
  ],
  languages: [
    { name: 'English', proficiency: 'Fluent' },
    { name: 'Swedish', proficiency: 'Native' },
    { name: 'Japanese', proficiency: 'Intermediate' },
  ],
  education: [
    {
      institution: 'Royal Institute of Technology',
      degree: 'BSc Computer Science',
      location: 'Stockholm, Sweden',
      startYear: '2014',
      endYear: '2017',
    },
    {
      institution: 'Academy of Language Arts',
      degree: 'Japanese Language School',
      location: 'Tokyo, Japan',
      startYear: '2018',
      endYear: '2019',
    },
    {
      institution: 'International English School',
      degree: '',
      location: 'Stockholm, Sweden',
      startYear: '2006',
      endYear: '2009',
    },
  ],
  experience: [
    {
      role: 'Software Engineering Consultant',
      company: 'avlindfors (Tele2)',
      location: 'Stockholm, Sweden',
      period: '2024 – Present',
      description:
        "Continued my engagement at Tele2 under my own consultancy. Rebuilt the login experience to meet European accessibility standards, for all Tele2 brands, using a Swedish BankID integration. Delivered several greenfield internal tools with role-based authentication via the company's internal identity provider (Curity & Keycloak). ",
      tools: [
        'React',
        'TypeScript',
        'AstroJS',
        'Node.js',
        'Micro Frontends',
        'React Query (tRPC)',
        'Azure DevOps',
      ],
    },
    {
      role: 'Freelance Project',
      company: 'Ljusverket',
      location: 'Stockholm, Sweden',
      link: 'https://ljusverket.se',
      period: '2024',
      description:
        'Designed and developed a full-stack rental platform for a film lighting equipment company. The customer-facing site features a browsable inventory, user authentication, and light list management. Built an accompanying admin tool for invoice and inventory management, Mailgun for transactional Emails and AWS S3 for PDF storage.',
      tools: [
        'Laravel',
        'React',
        'Tailwind',
        'MySQL',
        'Mailgun',
        'AWS S3',
        'GitHub Actions',
        'Digital Ocean VPS',
      ],
    },
    {
      role: 'Software Engineering Consultant',
      company: 'Alphadev (Tele2)',
      location: 'Stockholm, Sweden',
      period: '2021 – 2024',
      description:
        "Collaborated closely with design and stakeholder teams to migrate multiple legacy services to modern platforms, consolidating several brands into a 'whitelabel' platform. Working across React frontends and Node.js backends in a micro frontend architecture, using tRPC for type-safe communication.",
      tools: [
        'React',
        'TypeScript',
        'Node.js',
        'Java',
        'GraphQL',
        'Redux',
        'Micro Frontends',
        'Azure DevOps',
      ],
    },

    {
      role: 'Software Engineering Consultant',
      company: 'Forefront Consulting (Coop)',
      location: 'Stockholm, Sweden',
      period: '2020 – 2021',
      description:
        "Developed APIs in Spring Boot for order intake and payment processing, and developed authentication systems serving both online and in-store customers with Vue and Spring Boot. Integrated an E-identification solution for one of Sweden's first unmanned grocery stores.",
      tools: ['Vue', 'React', 'Java', 'Spring Boot', 'Kafka'],
    },
    {
      role: 'Full Stack Developer',
      company: 'Tablecheck',
      location: 'Tokyo, Japan',
      period: '2019',
      description:
        'Built and maintained React Frontend applications, Elixir APIs and third-party integrations for a restaurant reservation platform. Worked in a cross-functional team alongside product managers, designers, and QA.',
      tools: ['React', 'TypeScript', 'Elixir', 'Node.js', 'AWS'],
    },
  ],
  olderExperience: [
    {
      role: 'Erlang Developer',
      company: 'Erlang Solutions',
      location: 'Stockholm, Sweden',
      period: '2017 – 2018',
      description: '',
      tools: [],
    },
    {
      role: 'Software Engineering Intern',
      company: 'Ericsson',
      location: 'Stockholm, Sweden',
      period: '2017',
      description: '',
      tools: [],
    },
  ],
}

export default resume
