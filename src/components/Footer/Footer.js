import './Footer.css'
import samImage from '../../assets/profile-pic.png'

const Footer = () => (
  <footer className='footer'>
    <div className='user-image'>
      <img src={samImage} alt='sambitImage' />
    </div>
    <p>I help people to make the web great 🤝</p>
    <a href='https://github.com/SAMBIT20' className='link footer__link'>
      Created By Sambit 🇮🇳
    </a>
  </footer>
)

export default Footer
