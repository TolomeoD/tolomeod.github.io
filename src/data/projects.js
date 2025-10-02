import hammerspaceCover from '../assets/Hammerspace.png'
import cscGlobalCover from '../assets/CSC.png'
import gamblinGaryCover from '../assets/GamblinGary.png'
import thievesAscentCover from '../assets/TheivesAscent.png'

export const projects = [
  {
    id: 'hammerspace',
    title: 'Hammerspace',
    role: 'Staff Software Engineer',
    summary: 'A Data orchestration company that provides a global data platform to unify unstructured data across any type of storage.',
    tech: ['React', 'TypeScript', 'Vite', 'Python', 'Prometheus', 'Grafana'],
    images: [
      { src: hammerspaceCover, alt: 'Hammerspace interface preview' },
    ],
    href: 'https://hammerspace.com',
  },
  {
    id: 'csc-global',
    title: 'CSCGlobal',
    role: 'Software Engineer',
    summary: 'Contributed to DomainSec. A SaaS cybersecurity platform to secure and defend brands domain ecosystems.',
    tech: ['React', 'Redux', 'TypeScript', 'Node.js'],
    images: [
      { src: cscGlobalCover, alt: 'CSCGlobal site overview' },
    ],
    href: 'https://www.cscdbs.com/en/domainsec/',
  },
  {
    id: 'gamblin-gary',
    title: 'Gamblin Gary',
    role: 'Developer',
    summary: 'A vampire survivors type game, where upgrades are obtained through gambling your money or life. Made for the Brackeys 2025 Game Jam. Theme: Risk It For The Biscuit!',
    tech: ['Godot', 'GDScript'],
    images: [
      { src: gamblinGaryCover, alt: 'Gamblin Gary' },
    ],
    href: 'https://cakecowman.itch.io/gamblin-gary',
  },
  {
    id: 'thieves-ascent',
    title: 'Thieves Ascent',
    role: 'Developer',
    summary: 'A 3D platformer that puts you in the shoes of a saboteur. Each item you steal effects the terrain differently. Made for the Godot Wild Jam #81. Theme: Expedition',
    tech: ['Godot', 'GDScript'],
    images: [
      { src: thievesAscentCover, alt: 'Thieves Ascent' },
    ],
    href: 'https://cakecowman.itch.io/thieves-ascent',
  },
]
