import type { ExperienceItem, LeadershipItem } from './types'

// Newest first. To add a role, add an object to the top of the list.
export const experience: ExperienceItem[] = [
  {
    company: 'Nationwide',
    role: 'Technology Intern',
    status: 'Incoming',
    // Dates, location and responsibilities are intentionally left out until the
    // internship starts — fill in `period`, `location` and `highlights` then.
    summary: "I've accepted an offer to join Nationwide's Technology team as an intern.",
  },
  {
    company: 'Venture Starters',
    role: 'Venture Capital Summer Analyst',
    period: 'Jun 2026 – Aug 2026',
    location: 'Remote',
    highlights: [
      'Evaluated 15–25 startup pitches per session across eight meetings, gaining exposure to venture capital funding strategies.',
      'Developed familiarity with early-stage startup ecosystems and how founders communicate product-market fit.',
      'Learned the principles of angel investing and the funding journey from pitch to team-building stages.',
    ],
  },
  {
    company: 'ShortFuse Concrete',
    role: 'Web Developer',
    period: 'Aug 2025',
    location: 'Shullsburg, WI',
    highlights: [
      'Designed UI layouts and improved the site’s navigation flow and overall usability.',
      'Collaborated in weekly design reviews to refine layouts and improve brand accuracy.',
      'Worked across multiple design and hosting tools while sharpening front-end skills in HTML and CSS.',
    ],
  },
]

export const leadership: LeadershipItem[] = [
  {
    organization: 'Iowa State Career Services',
    role: 'Career Fair Executive',
    period: 'Aug 2026 – Present',
    location: 'Ames, IA',
    stat: { value: '500+', label: 'companies across two annual career fairs' },
    highlights: [
      'Coordinate event logistics and employer relations for two annual career fairs.',
      'Lead a team of student ambassadors through both events.',
      'Organize supplemental preparation events that help students sharpen interview and networking skills.',
    ],
  },
  {
    organization: 'Tau Kappa Epsilon — Epsilon Chapter',
    role: 'Philanthropy Chairman',
    period: 'Aug 2025 – May 2026',
    location: 'Ames, IA',
    stat: { value: '$21,615', label: "raised for St. Jude Children's Research Hospital" },
    highlights: [
      "Planned and organized fundraising events benefiting St. Jude Children's Research Hospital.",
      'Wrote a Python script with openpyxl that generates a service-hour tracking workbook for 130 members.',
      'Coordinated with local businesses to secure monetary and in-kind donations.',
    ],
  },
]
