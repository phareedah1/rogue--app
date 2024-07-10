import React from 'react'

export default function First(){
    return(
        <div className='background--img1'>
            <img src = "../images/Vector_1.png" className='Vector_1'></img>
            <img src = "../images/Vector_2.png" className='Vector_20'></img>
            <div  className='section--one--items'>
                <div className='section--onetxt'>
                    <p className='txt--one'>At RogTech Dev. We are</p>
                    <p className='txt--two'>ARCHITECHTS OF INNOVATIONS AND DIGITAL EVOLUTION</p>
                    <p className='txt--three'>We excel at pushing technological boundries and delivering unparalleld software solutions.</p>
                    <button className='getstarted--btn'>Get Started</button>
                </div>
                <div className='working--container'>
                    <img src = "../images/working.png" className='working--man--img'></img>
                </div>
            </div>
        </div>
    )
}