import React from 'react'
import './works.css'
import Port1 from '../../assets/portfolio-1.png'
import Port2 from '../../assets/portfolio-2.png'
import Port3 from '../../assets/portfolio-3.png'

const Works = () => {
  return (
        <section id= 'works'>
            <h2 className='workstitle'>My Portfolio</h2>
            <div className="worksImgs">
              <div className="workCard">
                <img src={Port1} alt="Project 1" className="workImg" />
              </div>
              <div className="workCard">
                <img src={Port2} alt="Project 2" className="workImg" />
              </div>
              <div className="workCard">
                <img src={Port3} alt="Project 3" className="workImg" />
              </div>
            </div>

            <button className='workBtn'>See More</button>
        </section>
  )
}

export default Works