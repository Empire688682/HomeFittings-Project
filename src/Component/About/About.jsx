import { useInView } from "react-intersection-observer";
import './About.css';
import about_Img from '../Assets/About_Img.png'

const About = () => {
  const {ref:cl1Ref, inView:cl1View} = useInView({triggerOnce:true});
  const {ref:cl2Ref, inView:cl2View} = useInView({triggerOnce:true});
  const {ref:cl3Ref, inView:cl3View} = useInView({triggerOnce:true});
  const {ref:cl4Ref, inView:cl4View} = useInView({triggerOnce:true});
  return (
    <div className='about'>
      <div className="left_colum">
        <img ref={cl1Ref} className={cl1View? "img observer":"img"} src={about_Img} alt="IMG" />
      </div>
      <div className="right_colum">
        <h1 ref={cl2Ref} className={cl2View? "img observer":"img"} >Your One-Stop Shop for Building & Real Estate</h1>
        <p ref={cl3Ref} className={cl3View? "img observer":"img"}>We provide a comprehensive range of high-quality building materials, from essential sanitaryware and tiles to stylish Golden Diamond doors. Additionally, our expert realtors can assist you in buying, selling, or leasing your dream property, including buildings, apartments, and land</p>
        <div ref={cl4Ref} className={cl4View? "experience_all observer":"experience_all"}>
          <div className="three_col">
            <h4 >PREVIOUS PROJECT</h4>
            <h2>34+</h2>
          </div>
          <div className="three_col">
            <h4 >YEARS EXPERIENCE</h4>
            <h2>20y</h2>
          </div>
          <div className="three_col">
            <h4>ONGOING PROJECT</h4>
            <h2>14</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
