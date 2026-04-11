import type { IconName } from './icons'

export type { IconName }

export interface SectionConfig {
  icon: IconName
  title: string
}

export interface Contact {
  email: string
  linkedin: string
  linkedinHandle: string
  website: string
  websiteLabel: string
}

export interface Education {
  institution: string
  degree: string
  location: string
  startYear?: string
  endYear?: string
}

export interface Language {
  name: string
  proficiency: string
}

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  description: string
  tools: string[]
}

export interface ResumeData {
  name: string
  subtitles: string[]
  tagline: string
  contact: Contact
  skills: string[]
  languages: Language[]
  education: Education[]
  experience: Experience[]
  olderExperience: Experience[]
  sections: {
    experience: SectionConfig
    olderExperience: SectionConfig
    education: SectionConfig
    languages: SectionConfig
    skills: SectionConfig
  }
}
