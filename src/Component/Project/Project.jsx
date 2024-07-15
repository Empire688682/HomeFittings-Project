import React from 'react'
import './Project.css';
import img_1 from '../Assets/sanitry_1_homepage.png';
import img_2 from '../Assets/sanitry_2_homepage.png'
import arrow_icon from '../Assets/right-arrow.png'
import { NavLink } from 'react-router-dom';
import { useInView } from "react-intersection-observer";
import OurRealEstate from '../OurRealEstate/OurRealEstate';
import Distributor from '../GoldenDoors/GoldenDoors';
import ViewTiles from '../ViewTiles/ViewTiles';

const Project = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const {ref:cl1Ref, inView:cl1View} = useInView({triggerOnce:true});
  const {ref:cl2Ref, inView:cl2View} = useInView({triggerOnce:true});
  const {ref:cl3Ref, inView:cl3View} = useInView({triggerOnce:true});
  const {ref:cl4Ref, inView:cl4View} = useInView({triggerOnce:true});
  return (
    <div className='project'>
      <h1 ref={cl1Ref} className={cl1View? "observer":""} >View sanitary fittings</h1>
      <p ref={cl2Ref} className={cl2View? "observer":""}>We are distributors and wholesalers</p>
      <div className="project_m_content">
        <div className="two_colum_con">
          <div className="two_colum">
            <img ref={cl3Ref} src={img_1} className={cl3View? "imgL observerL":"imgL"} alt="IMG" />
          </div>
          <div className="two_colum">
            <img ref={cl4Ref} src={img_2} className={cl4View? "imgR observerR":"imgR"} alt="IMG" />
          </div>
        </div>
      </div>
      <div className="btn_con">
        <button className='btn'>
        <NavLink onClick={scrollToTop} style={{textDecoration:"none"}} className='btn' to="/sgallery">
          All Fittings
          <img src={arrow_icon} alt=""/>
        </NavLink>
        </button>
      </div>
      <Distributor />
      <ViewTiles />
      <OurRealEstate/>
    </div>
  )
}

export default Project
