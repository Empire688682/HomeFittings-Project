import React from 'react'
import './ViewTiles.css';
import img_1 from '../Assets/tile_1.png';
import img_2 from '../Assets/tile_2.png';
import arrow_icon from '../Assets/right-arrow.png'
import { NavLink } from 'react-router-dom';
import { useInView } from "react-intersection-observer";

const ViewTiles = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
      const {ref:cl1Ref, inView:cl1View} = useInView({triggerOnce:true});
      const {ref:cl2Ref, inView:cl2View} = useInView({triggerOnce:true});
      const {ref:cl3Ref, inView:cl3View} = useInView({triggerOnce:true});
      const {ref:cl4Ref, inView:cl4View} = useInView({triggerOnce:true});
    return (
        <div className='view_tiles'>
            <h1 ref={cl1Ref} className={cl1View? "observer":""}>View available Tiles</h1>
            <p ref={cl2Ref} className={cl2View? "observer":""}>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
            <div className="view_tiles_m_content">
                <div className="two_colum_con">
                    <div ref={cl3Ref} className={cl3View? "two_colum observer":"two_colum"}>
                        <img src={img_1} alt="IMG" />
                    </div>
                    <div ref={cl4Ref} className={cl4View? "two_colum observer":"two_colum"}>
                        <img src={img_2} alt="IMG" />
                    </div>
                </div>
            </div>
            <div className="btn_con">
                <button className='btn'>
                    <NavLink onClick={scrollToTop} style={{ textDecoration: "none" }} className='btn' to="/Tgallery">
                        All Tiles
                        <img src={arrow_icon} alt="" />
                    </NavLink>
                </button>
            </div>
        </div>
    )
}

export default ViewTiles
