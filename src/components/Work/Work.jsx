import uniqid from 'uniqid'
import './Work.css'
import { work } from '../../portfolio'

const Work = () => (
  <section className='section work' id='work'>
    <h2 className='section__title'>Work Experience ⚡</h2>
    <div className='work-wrapper'>
      <div className='container work-container'>
        {work.map((works) => (
          <div className='timeline-block timeline-block-right' key={uniqid()}>
            <div className='marker active'>
              <i className='fa fa-check' aria-hidden='true' />
              <img className='company-logo' src={works.img} alt='' />
            </div>
            <div className='timeline-content'>
              <h3>{works.company}</h3>
              <span>{works.role}</span>
              <ul>
                <li>
                  {works.startDate}-{works.endDate}
                </li>
              </ul>
              <ul>
                <li className='work-dec'>{works.description}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Work
