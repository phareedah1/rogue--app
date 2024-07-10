import React from 'react'

export default function nav(){
    return(
        <div>
            <nav>
                <div className='life'>
                    <img src="../images/frame.png" alt="" className="logo"></img>
                    <h3 className='roguetext'>RogueTechDev</h3>
                </div>
                <ul className='links'>
                    <li><a href>Homepage</a></li>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#contact">Portfolio</a></li>
                    <button className='ccu'>Contact Us</button>
                </ul>
                <label for="nav-toggle" class="icon-burger">
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </label>
            </nav>
        </div>
    )
}