import { image } from './images'

export const profile = {
  name: 'Owen Fennell',
  titles: ['Software Engineering Student', 'Aspiring Software Engineer'],
  headline: ['Building software.', 'Solving problems.', 'Always learning.'],
  intro:
    "I'm a Software Engineering student at Iowa State University who likes building practical applications, working through hard technical problems, and picking up new technology along the way.",
  /** Shown as the status line in the hero. */
  status: 'Incoming Technology Intern at Nationwide',
  location: 'Ames, Iowa',
  email: 'owenf718@iastate.edu',
  github: 'https://github.com/owen-fennell',
  linkedin: 'https://www.linkedin.com/in/owen-fennell',
  /** Lives in /public — replace the PDF there to update it. */
  resumeUrl: `${import.meta.env.BASE_URL}Owen_Fennell_Resume.pdf`,
  resumeFileName: 'Owen_Fennell_Resume.pdf',
  sourceUrl: 'https://github.com/owen-fennell/Portfolio',
  headshot: image('headshot', 'Portrait of Owen Fennell wearing a dark suit and a red and gray striped tie'),
}

export const about = {
  paragraphs: [
    "I grew up in a small town in southwest Wisconsin and came to Iowa State to study Software Engineering. What keeps me in it is simple: I like making things people can actually use, and I like understanding how they work underneath.",
    "So far that has meant a full-stack recommendation engine in React and Flask, TypeScript components for a hackathon-finalist mental health app, and an autonomous robot programmed in C. I'm happiest when a project forces me to learn something I didn't know the week before.",
  ],
  education: {
    school: 'Iowa State University',
    degree: 'B.S. Software Engineering',
    minor: 'Minor in Cyber Security & AI Applications',
    graduation: 'Expected May 2028',
    location: 'Ames, IA',
    honors: ["Dean's List", 'Alpha Lambda Delta Honor Society', 'Epsilon Scholar (2025, 2026)'],
  },
  interests: ['Weightlifting', 'Basketball', 'Golf', 'Fishing', 'Hiking', 'Boating'],
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const

export type SectionId = (typeof navItems)[number]['id']
