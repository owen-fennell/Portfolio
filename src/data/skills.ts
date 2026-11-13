import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'frontend',
    skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'TailwindCSS', 'Android Studio'],
  },
  {
    title: 'Backend',
    icon: 'backend',
    skills: ['Python', 'Flask', 'Node.js', 'Java', 'C/C++', 'Linux'],
  },
  {
    title: 'Databases',
    icon: 'database',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools & Concepts',
    icon: 'tools',
    skills: [
      'Git',
      'Visual Studio Code',
      'Eclipse',
      'Claude Code',
      'Object-Oriented Programming',
      'Data Structures',
      'Algorithms',
    ],
  },
]
