import hammerspaceDetail from '../assets/HammerspaceUI.png'

export const projectExplanations = {
  hammerspace: {
    title: 'Hammerspace',
    timeline: 'June 2024 - August 2025',
    product:
      'Hammerspace is a software development company creating a High-Performance Data Platform for AI Anywhere.',
    contributions: [
      'My role was to develop Grafana dashboards and Prometheus exporters to visualize the metrics for each component of the product.  Each visualization was designed to fulfill a customer requirement or provide more intuition into performance of a specific system.  I also helped develop the GUI for the product which is displayed above.  I used React with Vite to help create new views and features to support customer needs.'
    ],
    externalHref: 'https://hammerspace.com',
    externalLabel: 'Visit Hammerspace',
    heroImage: {
      src: hammerspaceDetail,
      alt: 'Hammerspace interface showing the redesigned UI components.',
    },
  },
  'csc-global': {
    title: 'CSCGlobal DomainSec',
    timeline: 'Summer 2021, Summer 2022, Summer 2024',
    product:
      'CSC Global is the leading enterprise-class domain registrar for some of the largest brands in the world. ',
    contributions: [
      'I worked as a front end development intern in Digital Brand Services (DBS) on their DomainSec product.  DomainSec is a SaaS cybersecurity platform designed to help CSC customers secure and manage their domains.  CSC served as my introduction to React development.  During my internship, they sponsored a plural site course for React and Redux so that I could work on more complex components within the larger program.  As part of the internship I also built an algorithm in python to train an AI system to detect phishing attempts.'  

    ],
    externalHref: 'https://www.cscdbs.com/en/domainsec/',
    externalLabel: 'Explore DomainSec',
  },
}
