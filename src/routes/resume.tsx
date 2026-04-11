import { createFileRoute } from '@tanstack/react-router'
import resumeData from '../data/resume'
import ResumeHero from '../components/resume/ResumeHero'
import ResumeSkills from '../components/resume/ResumeSkills'
import ResumeLanguages from '../components/resume/ResumeLanguages'
import ResumeEducation from '../components/resume/ResumeEducation'
import ResumeExperience from '../components/resume/ResumeExperience'

export const Route = createFileRoute('/resume')({ component: ResumePage })

function ResumePage() {
  const { sections } = resumeData
  return (
    <div className="rise-in flex flex-col gap-4 md:gap-10">
      <ResumeHero
        name={resumeData.name}
        subtitles={resumeData.subtitles}
        tagline={resumeData.tagline}
        contact={resumeData.contact}
      />

      <div className="border-t border-(--line)" />

      {/*
        Mobile order:  Experience → Education → Languages → Skills
        Desktop order: [Education, Languages, Skills] | [Experience]

        Each section is an independent grid item. On mobile (1 col) the CSS
        `order` property controls stacking. On desktop we assign explicit
        col/row positions so the left sidebar stacks naturally and experience
        spans the right column.
      */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr] lg:gap-x-0 lg:gap-y-8">
        {/* Experience — order-1 mobile, right col spanning all rows desktop */}
        <div className="order-1 lg:col-start-2 lg:row-start-1 lg:row-span-4 lg:pl-10 flex flex-col gap-6">
          <ResumeExperience
            title={sections.experience.title}
            icon={sections.experience.icon}
            experience={resumeData.experience}
          />
          <ResumeExperience
            title={sections.olderExperience.title}
            icon={sections.olderExperience.icon}
            experience={resumeData.olderExperience}
            compact
          />
        </div>

        {/* Education — order-2 mobile, left col row 1 desktop */}
        <div className="order-2 lg:col-start-1 lg:row-start-1">
          <ResumeEducation
            title={sections.education.title}
            icon={sections.education.icon}
            education={resumeData.education}
          />
        </div>

        {/* Languages — order-3 mobile, left col row 2 desktop */}
        <div className="order-3 lg:col-start-1 lg:row-start-2">
          <ResumeLanguages
            title={sections.languages.title}
            icon={sections.languages.icon}
            languages={resumeData.languages}
          />
        </div>

        {/* Skills — order-4 mobile, left col row 3 desktop */}
        <div className="order-4 lg:col-start-1 lg:row-start-3">
          <ResumeSkills
            title={sections.skills.title}
            icon={sections.skills.icon}
            skills={resumeData.skills}
          />
        </div>
      </div>
    </div>
  )
}
