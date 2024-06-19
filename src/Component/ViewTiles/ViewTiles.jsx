import React from 'react'
import './ViewTiles.css';
import img_1 from '../Assets/IMG_5.png';
import arrow_icon from '../Assets/right-arrow.png'
import { NavLink } from 'react-router-dom';

const ViewTiles = () => {
    return (
        <div className='view_tiles'>
            <h1>View available Tiles</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, enim? Quasi enim aspernatur molestiae. Quod corporis distinctio porro quam magni rerum necessitatibus! Temporibus reprehenderit recusandae quidem, totam aspernatur quasi exercitationem!</p>
            <div className="view_tiles_m_content">
                <div className="two_colum_con">
                    <div className="two_colum">
                        <img src={img_1} alt="IMG" />
                    </div>
                    <div className="two_colum">
                        <img src={img_1} alt="IMG" />
                    </div>
                </div>
            </div>
            <div className="btn_con">
                <button className='btn'>
                    <NavLink style={{ textDecoration: "none" }} className='btn' to="/Tgallery">
                        All Tiles
                        <img src={arrow_icon} alt="" />
                    </NavLink>
                </button>
            </div>
        </div>
    )
}

export default ViewTiles
