import { image } from './images'
import type { Project } from './types'

// Order here is the order on the page. The project marked `featured` gets the
// large card. `repoUrl` / `liveUrl` are optional: add them when a link exists and
// the buttons appear automatically.
export const projects: Project[] = [
  {
    id: 'movie-recommendation-system',
    name: 'Movie Recommendation System',
    tagline: 'Three recommendation engines, one API, compared side by side.',
    description:
      'A full-stack recommender built on the MovieLens 100K dataset. Content-based, collaborative and hybrid algorithms sit behind a shared Python interface and a Flask REST API, with a React frontend for comparing their results in real time.',
    date: 'May 2026',
    role: 'Developer',
    tech: ['React', 'Python', 'Flask', 'REST API'],
    highlights: [
      'Built a full-stack movie recommendation system with three separate recommendation algorithms: content-based, collaborative filtering, and a hybrid of the two.',
      'Designed an abstract base class in Python to standardize the interface across all three recommendation engines.',
      'Developed a REST API with four endpoints.',
      'Integrated the API with a React frontend for real-time, side-by-side algorithm comparison.',
    ],
    images: [
      image(
        'movierec-compare',
        'MovieRec compare page showing ranked results from the content-based, collaborative and hybrid engines in three columns',
      ),
      image('movierec-recommend', 'MovieRec recommendation page listing top movie picks for a selected user and algorithm'),
      image('movierec-home', 'MovieRec home page with a user ID search field and three algorithm options'),
    ],
    framed: true,
    repoUrl: 'https://github.com/owen-fennell/MovieRec',
    featured: true,
  },
  {
    id: 'trueyou',
    name: 'TrueYou',
    tagline: 'A mental health app with mood tracking, journaling and AI chat.',
    description:
      'A full-stack mental health application built with a team for a hackathon. I worked on the React and TypeScript frontend, including the mood-tracking flow.',
    date: 'Apr 2026',
    role: 'Developer · Team project',
    tech: ['React', 'TypeScript', 'API Integration'],
    highlights: [
      'Contributed to a full-stack mental health application featuring mood tracking, journaling, and AI chat.',
      'Developed React components in TypeScript.',
      'Built a mood-tracking component that handles user selection and API integration to display mood trends.',
      'Collaborated with a team to deliver the application, which earned hackathon finalist recognition.',
    ],
    images: [
      image(
        'trueyou-team',
        'Owen Fennell and three TrueYou teammates holding the award certificate the team received for the project',
      ),
    ],
    recognition: 'Hackathon finalist',
  },
  {
    id: 'purge-cybot',
    name: 'PURGE CyBot',
    tagline: 'An autonomous robot that maps its surroundings and avoids obstacles.',
    description:
      'Embedded C on a TI Tiva TM4C123 microcontroller. An 11-state finite state machine drives the robot while ping, IR and servo sensors build a live map of what is around it.',
    date: 'May 2026',
    role: 'Developer',
    tech: ['C', 'Embedded Systems', 'TI Tiva TM4C123'],
    highlights: [
      'Programmed an autonomous robot in C on a TI Tiva TM4C123 microcontroller.',
      'Implemented an 11-state finite state machine to control its behavior.',
      'Developed collision avoidance logic using weighted-average duplicate filtering to track and update object positions.',
      'Built real-time spatial mapping using ping, IR, and servo sensors.',
      'Implemented trigonometric odometry tracking.',
    ],
    illustration: 'cybot',
  },
  {
    id: 'golden-shores-casino',
    name: 'Golden Shores Casino',
    tagline: 'Slots, Blackjack and Baccarat, entirely in the browser.',
    description:
      'A client-side casino web app with three playable games, shared navigation, and a player balance that persists between games through localStorage.',
    date: '2025',
    role: 'Developer',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    highlights: [
      'Developed a fully client-side casino web application.',
      'Implemented Slots, Blackjack, and Baccarat.',
      'Created shared navigation and game interfaces.',
      'Implemented the game logic and localStorage-based player balance management.',
    ],
    images: [
      image('casino-home', 'Golden Shores Casino home page with links to Baccarat, Blackjack and Slots'),
      image('casino-blackjack', 'Golden Shores Casino Blackjack table with dealer and player cards and betting controls'),
      image('casino-baccarat', 'Golden Shores Casino Baccarat table'),
    ],
    framed: true,
    repoUrl: 'https://github.com/owen-fennell/Casino-Website',
    liveUrl: 'https://owen-fennell.github.io/Casino-Website/',
  },
]
