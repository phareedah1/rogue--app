import React from 'react'

export default function Sixth(){
    return(
        <div className='sixth--section'>
            <div className='space'>
                <div className='roguetechdev'>
                    <p className='heading'>RogueTechDev</p>
                    <p>About us</p>
                    <p>Pricing</p>
                    <p>Location</p>
                    <p>FAQ</p>
                </div>
                <div  className='Services'>
                    <p className='heading'>Services</p>
                    <p>Software Develpoment</p>
                    <p>UI/UX</p>
                    <p>Production Management</p>
                    <p>IT consulting and Training</p>
                    <p>Maintainance and Support</p>
                </div>
                <div id="legal">
                    <p className='heading'>Legal</p>
                    <p>Privacy</p>
                    <p>Terms and Conditions </p>
                </div>
                <div className='socials'>
                    <p className='heading'>Socials</p>
                    <div className='icons'>
                        <img src="../images/facebook.png"></img>
                        <img src="../images/x.png"></img>
                        <img src="../images/in.png"></img>
                        <img src="../images/github.png"></img>
                    </div>
                </div>

                <div>
                    <p className='heading'>Contact Us</p>
                    <div className='contacts'>
                        <div className='mail'>
                            <div className='phone'>
                                <img src="../images/phone.png" className='phone--img'></img>
                                <p>: 08100000000</p>
                            </div>
                            <div className='phone'>
                                <img src="../images/mail.png" className='phone--img'></img>
                                <p>: Roguedevtech@gmail.com</p>
                            </div>
                        </div>
                        <form className='forms'>
                            <input placeholder='Name' className='name'></input>
                            <input placeholder='Email' className='name'></input>
                            <input placeholder='Message' className='message'></input>
                            <button className='send--btn'>send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}