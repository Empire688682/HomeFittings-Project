import { useInView } from "react-intersection-observer";
import './About.css';
import about_Img from '../Assets/About_Img.png'
import all_images from "../infinteImageData";
import { useEffect, useState } from "react";

const About = () => {
  const { ref: cl1Ref, inView: cl1View } = useInView({ triggerOnce: true });
  const { ref: cl2Ref, inView: cl2View } = useInView({ triggerOnce: true });
  const { ref: cl3Ref, inView: cl3View } = useInView({ triggerOnce: true });
  const { ref: cl4Ref, inView: cl4View } = useInView({ triggerOnce: true });

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentImgIndex((prev) => (prev+1) % all_images.length);
    },2000)

    return()=> clearInterval(interval);
  },[])

  return (
    <div className='about'>
      <div className="left_colum">
        <img ref={cl1Ref} className={cl1View ? "img observer" : "img"} src={all_images[currentImgIndex]} alt="IMG" />
      </div>
      <div className="right_colum">
        <h1 ref={cl2Ref} className={cl2View ? "img observer" : "img"} >Who we are</h1>
        <p ref={cl3Ref} className={cl3View ? "img observer" : "img"}>Welcome to Home Fittings, Nigeria's premier destination for top-quality tiles, sanitary wares, and doors. Our extensive product range includes ceramic and porcelain tiles (both matt and polished), WC units, taps, shower mirrors, basins, sinks, bathtubs, and Jacuzzis. Additionally, we offer a variety of doors to suit every taste. We also have a dedicated real estate section for buying and renting properties, ensuring all your housing needs are met under one roof. At Home Fittings, we are committed to providing exceptional quality products and unparalleled customer service, helping you create the home of your dreams</p>
        <div ref={cl4Ref} className={cl4View ? "experience_all observer" : "experience_all"}>
          <h2>We are proud distributor of:</h2>
          <ul>
            <li>Roya Castle Ceramic Tiles</li>
            <li>Ferri/CDK Tiles</li>
            <li>Golden Diamond Sanitary Ware</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
