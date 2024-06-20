import React from 'react'
import './GoldenDoors.css';
import img_1 from '../Assets/IMG_2.png';
import arrow_icon from '../Assets/right-arrow.png'
import { NavLink } from 'react-router-dom';
import { useInView } from "react-intersection-observer";

const GoldenDoors = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const {ref:cl1Ref, inView:cl1View} = useInView({triggerOnce:true});
  const {ref:cl2Ref, inView:cl2View} = useInView({triggerOnce:true});
  const {ref:cl3Ref, inView:cl3View} = useInView({triggerOnce:true});
  const {ref:cl4Ref, inView:cl4View} = useInView({triggerOnce:true});
  return (
    <div className='golden_doors'>
      <h1 ref={cl1Ref} className={cl1View? "observer":""}>Distributor of Golden Diamond doors</h1>
      <p ref={cl2Ref} className={cl2View? "observer":""}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, enim? Quasi enim aspernatur molestiae. Quod corporis distinctio porro quam magni rerum necessitatibus! Temporibus reprehenderit recusandae quidem, totam aspernatur quasi exercitationem!</p>
      <div className="golden_doors_m_content">
        <div className='two_colum_con'>
          <div ref={cl3Ref} className={cl3View? "two_colum observer":"two_colum"}>
            <img src={img_1} alt="IMG" />
          </div>
          <div ref={cl4Ref} className={cl4View? "two_colum observer":"two_colum"}>
            <img src={img_1} alt="IMG" />
          </div>
        </div>
      </div>
      <div className="btn_con">
        <button className='btn'>
          <NavLink onClick={scrollToTop} style={{ textDecoration: "none" }} className='btn' to="/Dgallery">
            All Doors
            <img src={arrow_icon} alt="" />
          </NavLink>
        </button>
      </div>
    </div>
  )
}

export default GoldenDoors
