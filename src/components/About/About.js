import GitHubIcon from '@material-ui/icons/GitHub'
import Typewriter from 'typewriter-effect'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { Twitter } from '@material-ui/icons'
import { about } from '../../portfolio'
import './About.css'
import samImage from '../../assets/header-img.svg'

const About = () => {
  const { name, role, description, social } = about

  return (
    <div className='about center'>
      {name && (
        <>
          <h1>
            <Typewriter
              options={{
                strings: ['Hi, I am Sambit Nanda.', 'A Front End Engineer ✨'],
                autoStart: true,
                loop: true,
                cursorClassName: 'about__name',
              }}
            />
          </h1>
        </>
      )}

      {/* {role && <h2 className='about__role'>A {role}✨</h2>} */}
      <img src={samImage} alt='sam-img' className='about-img' />
      <p className='about__desc'>{description && description}</p>
      <div className='about__contact center'>
        {social && (
          <>
            {social.linkedin && (
              <a
                href={social.twitter}
                aria-label='twitter'
                className='link link--icon'
              >
                <Twitter />
              </a>
            )}
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
