import React from 'react'
import './Project.css';
import img_1 from '../Assets/IMG_1.png';
import img_2 from '../Assets/IMG_2.png';
import img_3 from '../Assets/IMG_3.png';
import img_4 from '../Assets/IMG_4.png';
import img_5 from '../Assets/IMG_5.png';
import arrow_icon from '../Assets/right-arrow.png'

const Project = () => {
  return (
    <div className='project'>
      <h1>View building fittings</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, enim? Quasi enim aspernatur molestiae. Quod corporis distinctio porro quam magni rerum necessitatibus! Temporibus reprehenderit recusandae quidem, totam aspernatur quasi exercitationem!</p>
      <div className="project_m_content">
        <div className="two_colum_con">
          <div className="two_colum">
            <img src={img_1} alt="IMG" />
          </div>
          <div className="two_colum">
            <img src={img_2} alt="IMG" />
          </div>
        </div>
        <div className="three_colum_con">
          <div className="three_colum">
            <img src={img_3} alt="IMG" />
          </div>
          <div className="three_colum">
            <img src={img_4} alt="IMG" />
          </div>
          <div className="three_colum">
            <img src={img_5} alt="IMG" />
          </div>
        </div>
      </div>
      <div className="all_btn_con">
        <button className='all_btn'>
          All Materials
          <img src={arrow_icon} alt=""/>
        </button>
      </div>
    </div>
  )
}

export default Project
