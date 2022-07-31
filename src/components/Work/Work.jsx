import React from 'react'
import './Work.css'

const Work = () => (
  <section className='section work' id='work'>
    <h2 className='section__title'>Work Experience</h2>
    <div className='work-wrapper'>
      <div className='container'>
        <div className='timeline-block timeline-block-right'>
          <div className='marker active'>
            <i className='fa fa-check' aria-hidden='true' />
            <img
              className='company-logo'
              src='https://www.bitcs.in/images/logo-white.png'
              alt=''
            />
          </div>
          <div className='timeline-content'>
            <h3>BITCS</h3>
            <span>Software Development Engineer</span>
            <ul>
              <li>April(2022)- Present</li>
            </ul>
          </div>
        </div>

        <div className='timeline-block timeline-block-left'>
          <div className='marker'>
            <i className='fa fa-check' aria-hidden='true' />
          </div>
          <div className='timeline-content'>
            <h3>Seconed Year</h3>
            <span>Some work experience</span>
          </div>
        </div>

        <div className='timeline-block timeline-block-right active'>
          <div className='marker'>
            <i className='fa fa-check active' aria-hidden='true' />
          </div>
          <div className='timeline-content'>
            <h3>Third Year</h3>
            <span>Some work experience</span>
          </div>
        </div>
      </div>
      <div className='description-exp'>
        <h4>Description</h4>
        <ul className='exp-ul'>
          <li>📌 Working on backend team, integrations pod</li>
          <li>📌 Collaborates with frontend team</li>
        </ul>
      </div>
    </div>
  </section>
)

export default Work
