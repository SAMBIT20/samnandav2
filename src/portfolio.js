import bitcsLogo from './assets/bitcs.jpeg'
import cnLogo from './assets/CodingNinjas.jpeg'
import superoLogo from './assets/supero.jpeg'

import html from './assets/skills/html.svg'
import css from './assets/skills/css.svg'
import typescript from './assets/skills/typescript.svg'
import javascript from './assets/skills/javascript.svg'
import reactjs from './assets/skills/reactjs.svg'
import redux from './assets/skills/redux-seeklogo.com.svg'
import sass from './assets/skills/sassl.svg'
import styled from './assets/skills/styled_components.svg'
import webpack from './assets/skills/webpack.svg'
import reactnative from './assets/skills/react-native-1.svg'
import git from './assets/skills/git-icon.svg'
import jest from './assets/skills/jest-seeklogo.com.svg'
import material from './assets/skills/material.svg'

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
    name: 'E-Books (Digital Library',
    description:
      'Developing a platform to read books online and help students It will include features like search book by its title, authentication and authorization by Auth0',
    stack: ['React', 'JavaScript', 'Auth0', ''],
    sourceCode: 'https://github.com/SAMBIT20/Books',
    livePreview: 'https://sk-books.vercel.app/',
  },
    {
    name: "Frontend Cheatsheets",
    description:
      'Front-end cheatsheets for popular frameworks and development tools based on front-end 🚀. They include everything you should know in one single file.',
    stack: ['MDX', 'React', 'docusaurus'],
    sourceCode: 'https://github.com/SAMBIT20/frontend-cheatsheets',
    livePreview: 'https://frontend-cheatsheets.vercel.app/',
  },
  {
    name: 'LifeCareSource.com',
    description:
      'Home blood collection service in Bhubaneswar Odisha,user can book your appointment for a blood test and a collection agent will visit your doorstep. More than 1k people get help in this pandemic period.',
    stack: ['CSS3', 'HTML5', 'JavaScript', 'formcarry'],
    sourceCode: 'https://github.com',
    livePreview: 'https://www.lifecaresource.com/',
  },
  {
    name: 'Jet-Crypto',
    description:
      'A online platform for get all the information regarding your favorite crypto currency,and able to view prices and charts listed by market capitalization',
    stack: ['Material UI', 'JavaScript', 'React', 'chart.js'],
    sourceCode: 'https://github.com/SAMBIT20/Crypto-App',
    livePreview: 'https://jet-crypto-v2.vercel.app/',
  },
  {
    name: "Developer's Studio",
    description:
      'A website for all the coders of the YouTube community to learn the notes of the Javascript ,TypeScript, Reactjs, and many more tech stacks of the popular YouTube learning series.',
    stack: ['JavaScript', 'React', 'markdown'],
    sourceCode: 'https://github.com/SAMBIT20/Devlopers-studio',
    livePreview: 'https://devlopers-studio.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up

  {
    skill: 'HTML5',
    image: html,
  },
  {
    skill: 'CSS3',
    image: css,
  },
  {
    skill: 'JavaScript',
    image: javascript,
  },
  {
    skill: 'TypeScript',
    image: typescript,
  },
  {
    skill: 'React',
    image: reactjs,
  },
  {
    skill: 'React Native',
    image: reactnative,
  },
  {
    skill: 'Redux',
    image: redux,
  },
  {
    skill: 'SASS',
    image: sass,
  },
  {
    skill: 'Material UI',
    image: material,
  },
  {
    skill: 'Git',
    image: git,
  },
  {
    skill: 'Styled Component',
    image: styled,
  },
  {
    skill: 'Jest',
    image: jest,
  },
  {
    skill: 'Webpack',
    image: webpack,
  },
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
