import bitcsLogo from './assets/bitcs.jpeg'
import cnLogo from './assets/CodingNinjas.jpeg'
import superoLogo from './assets/supero.jpeg'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#',
  title: 'SN.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sambit Nanda',
  role: 'Front End Engineer',
  description:
    '"A fresher with experience", this line says exactly who he is. He is a software developer who crafts beautiful web and apps. His perfect balance of technical & managerial skills stands him apart from the crowd.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/nandasambit',
    github: 'https://github.com/sambit20',
    twitter: 'https://twitter.com/sambit_dev',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Webpack',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sambitn20@gmail.com',
}
const work = [
  {
    company: 'BITCS',
    role: 'Software Development Engineer',
    startDate: 'April(2022)',
    endDate: 'Present',
    img: bitcsLogo,
    description:
      'Worked on various client projects, majorly built on react, redux, typescript and node.js. One of the project which is a online food and grocery ordering and delivery platform working on a feature which is a premium subscription service  and Lead the testing team of subscription service.',
  },
  {
    company: 'Coding Ninjas',
    role: 'Teaching Assistance',
    startDate: 'February(2021)',
    endDate: 'June(2021)',
    img: cnLogo,
    description:
      'Guiding students to write clean code and resolving Bugs, taking doubt sessions and resolve more than 1600 doubts with an avg. rating of 4.85 in the span of 4 months.',
  },
  {
    company: 'Supero Software Private Limited',
    role: 'Full Stack Developer Intern',
    startDate: 'January(2021)',
    endDate: 'March(2021)',
    img: superoLogo,
    description:
      'Worked on exam management system,an online compiler where users can write code in multiple programming languages which supports C, C++, JAVA, PYTHON, JAVASCRIPT.',
  },
]
const blog = [
  {
    title: 'hello',
  },
]

export { header, about, projects, skills, contact, blog, work }
