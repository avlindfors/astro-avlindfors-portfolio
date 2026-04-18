import type { Contact, IconName } from './types'
import SectionHeader from './SectionHeader'
import SubLabel from './SubLabel'

const contactItems = (contact: Contact) => [
  {
    heading: 'Mail',
    label: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    heading: 'LinkedIn',
    label: contact.linkedinHandle,
    href: contact.linkedin,
    target: '_blank',
    rel: 'noopener noreferrer',
  },
]

export default function ResumeContact({
  contact,
  title = 'Contact',
  icon,
}: {
  contact: Contact
  title?: string
  icon?: IconName
}) {
  return (
    <div>
      <SectionHeader title={title} icon={icon} />
      <div className="flex flex-col gap-2.5 print:gap-2">
        {contactItems(contact).map((item) => (
          <div key={item.href} className="flex flex-col gap-0.5">
            <SubLabel>{item.heading}</SubLabel>
            <a
              href={item.href}
              target={item.target}
              rel={item.rel}
              className="text-sm print:text-xs text-teal-900 dark:text-teal-100 font-medium no-underline hover:underline"
            >
              {item.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
