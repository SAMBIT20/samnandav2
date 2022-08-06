import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact 🤳🏼</h2>
      <div className='contact-wrapper'>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        </a>
        <a href='https://calendly.com/nandasambit1999/30min'>
          <span type='button' className='btn btn--outline contact-cal'>
            Schedule a Meet
          </span>
        </a>
      </div>
    </section>
  )
}

export default Contact
