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
    company: 'Bitcs',
  },
]
const blog = [
  {
    title: 'hello',
  },
]

export { header, about, projects, skills, contact, blog, work }
