import type { ResumeData } from '../components/resume/types'

const resume: ResumeData = {
  name: 'Alexander Lindfors',
  subtitles: ['Software Engineer', 'Full Stack Developer'],
  tagline:
    "I'm Alexander, a full stack developer based in Stockholm with a Computer Science degree from the Royal Institute of Technology. I specialize in building modern web applications with React, TypeScript, and Node — from polished user interfaces to robust APIs.",
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
  },
  skills: [
    {
      category: 'Frontend',
      items: [
        'React',
        'TypeScript',
        'Next.js',
        'Remix',
        'HTML',
        'CSS',
        'Tailwind',
      ],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Laravel', 'PHP', 'Java', 'GraphQL'],
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
  ],
  languages: [
    { name: 'English', proficiency: 'Fluent' },
    { name: 'Swedish', proficiency: 'Native' },
    { name: 'Japanese', proficiency: 'Conversational' },
    { name: 'Spanish', proficiency: 'Basic' },
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
      role: 'Freelance Full Stack Developer & Consultant',
      company: 'avlindfors',
      location: 'Stockholm, Sweden',
      period: '2022 – Present',
      description:
        'I help realize your ideas with custom websites and applications. I work mainly with TypeScript (React, Remix, Next.js, Node) and PHP (Laravel).',
      tools: [
        'React',
        'TypeScript',
        'Next.js',
        'Remix',
        'Node.js',
        'Laravel',
        'PHP',
      ],
    },
    {
      role: 'Software Engineering Consultant',
      company: 'Alphadev (Tele2)',
      location: 'Stockholm, Sweden',
      period: '2021 – 2024',
      description:
        'During my assignment at Tele2, a Swedish telecom company, I worked in close collaboration with design and stakeholder teams to successfully migrate multiple legacy services to modern platforms.',
      tools: [
        'React',
        'Express',
        'Node.js',
        'Java',
        'GraphQL',
        'Redux',
        'Azure DevOps',
        'Kubernetes',
        'Micro Frontends',
      ],
    },
    {
      role: 'Software Engineering Consultant',
      company: 'Forefront Consulting (Coop)',
      location: 'Stockholm, Sweden',
      period: '2020 – 2021',
      description:
        'At Coop, a Swedish grocery store chain, I developed order intake and payment solution APIs and authentication systems for online and in-store customers.',
      tools: ['Java', 'Spring Boot', 'Kafka', 'React', 'Vue'],
    },
    {
      role: 'Full Stack Developer',
      company: 'Tablecheck',
      location: 'Tokyo, Japan',
      period: '2019',
      description:
        'Built and maintained Frontend applications, APIs and third-party integrations for a restaurant reservation platform serving customers and vendors across Asia. Worked in a cross-functional team alongside product managers, designers, and QA.',
      tools: ['React', 'TypeScript', 'Node.js', 'AWS'],
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
