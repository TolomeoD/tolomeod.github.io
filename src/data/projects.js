import hammerspaceCover from '../assets/Hammerspace.png'
import cscGlobalCover from '../assets/CSC.png'
import aiTutorCover from '../assets/AiTutor.png'
import gamblinGaryCover from '../assets/GamblinGary.png'
import thievesAscentCover from '../assets/TheivesAscent.png'
import transformation01 from '../assets/openframeworks1.png'
import transformation02 from '../assets/openframeworks2.png'
import wheresRobdoCover from '../assets/WheresRobdo.png'

export const sections = {
  projects: [
    {
      id: 'hammerspace',
      title: 'Hammerspace',
      role: 'Staff Software Engineer',
      summary: 'A data orchestration company that provides a global data platform to unify unstructured data across any type of storage.',
      tech: ['React', 'Prometheus', 'Grafana', 'Vite', 'TypeScript', 'Python'],
      images: [
        { src: hammerspaceCover, alt: 'Hammerspace product interface preview' },
      ],
      href: '/projects/hammerspace',
      externalHref: 'https://hammerspace.com',
    },
    {
      id: 'csc-global',
      title: 'CSCGlobal',
      role: 'Software Engineer',
      summary: 'Contributed to the DomainSec project. A SaaS cybersecurity platform to secure and defend brands domain ecosystems.',
      tech: ['React', 'Redux', 'TypeScript', 'Node.js'],
      images: [
        { src: cscGlobalCover, alt: 'CSCGlobal site overview' },
      ],
      href: '/projects/csc-global',
      externalHref: 'https://www.cscdbs.com/en/domainsec/',
    },
    {
      id: 'ai-psychology-tutor',
      title: 'AI Psychology Tutor',
      role: 'Developer',
      summary: 'Implemented a model of OpenAIs ChatGPT-4 Turbo using a mixture of fine-tuning and retrieval augmented generation. The goal was to create an AI tutor for psychology freshmen.',
      tech: ['HTML', 'CSS', 'JS', 'Python'],
      images: [
        { src: aiTutorCover, alt: 'AI Psychology Tutor chat interface' },
      ],
      href: 'https://the-f1re-w1zard.github.io',
    },
  ],
  games: [
    {
      id: 'gamblin-gary',
      title: 'Gamblin Gary',
      role: 'Developer',
      summary: 'A vampire survivors type game, where upgrades are obtained through gambling your money or life. Made for the Brackeys 2025 Game Jam. Theme: Risk It For The Biscuit!',
      tech: ['Godot', 'GDScript'],
      images: [
        { src: gamblinGaryCover, alt: 'Gamblin Gary gameplay mockup' },
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
        { src: thievesAscentCover, alt: 'Thieves Ascent game artwork' },
      ],
      href: 'https://cakecowman.itch.io/thieves-ascent',
    },
    {
      id: 'transformation-simulation',
      title: 'Transformation Simulation',
      role: 'Developer',
      summary: 'A demonstration of using matrix transformations and the parametric equation of a line to move, rotate, and scale a sprite. Created as a part of SJSUs Game Design Course',
      tech: ['OpenFrameworks', 'C++', 'Kenney Assets'],
      images: [
        { src: transformation01, alt: 'Transformation Simulation visual output frame' },
        { src: transformation02, alt: 'Transformation Simulation particle system detail' },
      ],
      href: '/',
    },
    {
      id: 'wheres-robdo',
      title: "Where's Robdo?",
      role: 'Developer/Designer',
      summary: "A web-based puzzle game where the player must find Robdos face in an image. Created as a part of Intro To Web Development at OSU",
      tech: ['HTLM', 'CSS', 'JS'],
      images: [
        { src: wheresRobdoCover, alt: "Where's Robdo hidden-object puzzle screenshot" },
      ],
      href: 'https://github.com/osu-cs290-sp21/final-project-bouba-kiki',
    },
  ],
}
