import React from 'react'
import './OurRealEstate.css';
import property_1 from '../Assets/property_1.png'
import property_2 from '../Assets/property_2.png'
import arrow_icon from '../Assets/right-arrow.png'
import { NavLink } from 'react-router-dom';
import { useInView } from "react-intersection-observer";

const OurRealEstate = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
      const {ref:cl1Ref, inView:cl1View} = useInView({triggerOnce:true});
      const {ref:cl2Ref, inView:cl2View} = useInView({triggerOnce:true});
      const {ref:cl3Ref, inView:cl3View} = useInView({triggerOnce:true});
      const {ref:cl4Ref, inView:cl4View} = useInView({triggerOnce:true});
    return (
        <div className='our_real_estate'>
            <h1 ref={cl1Ref} className={cl1View? "observer":""}>Our Real Estate development in Nigeria</h1>
            <p ref={cl2Ref} className={cl2View? "observer":""}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique ratione, et, nostrum facere reprehenderit nesciunt accusantium, amet itaque dolorum sit nam eum molestias ipsum officia! Soluta alias commodi vel.</p>
            <div className="main_content">
                <div ref={cl3Ref} className={cl3View? "imgL two_col observerL":"imgL"}>
                    <img src={property_1} className={cl3View? "imgL observerL":"imgL"} alt="IMG" />
                    <div className="overlay">
                        <h2>Land and property sales</h2>
                    </div>
                </div>
                <div ref={cl4Ref} className={cl4View? "imgR two_col observerR":"imgR"}>
                    <img src={property_2} className={cl4View? "imgR observerR":"imgR"} alt="IMG" />
                    <div className="overlay">
                        <h2>Land and property sales</h2>
                    </div>
                </div>
            </div>
            <div className="btn_con">
                <button className='btn'>
                    <NavLink onClick={scrollToTop} style={{ textDecoration: "none" }} className='btn' to="/Rgallery">
                        All Properties
                        <img src={arrow_icon} alt="" />
                    </NavLink>
                </button>
            </div>
        </div>
    )
}

export default OurRealEstate
