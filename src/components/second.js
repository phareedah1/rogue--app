import React from 'react'

export default function Second(){
    return(
        <div className='section--two'>
            <div className='second--txts'>
                    {/* <img src="../images/Polygon.png" className='pentagon'></img> */}
                    <p className='whatwedo'>WHAT WE DO</p>
                    <p className='whatwedo2'>We provide top-tier custom software solutions tailored to your unique needs</p>
                    <p className='whatwedo3'> Explore our development services which includes</p>
            </div>
            <div className='box--cont'>
                <div className='firstrow--boxes'>
                    <div className='boxes'>
                        <div className='circles circle--1'>
                            <img src="../images/cloud.png"></img>
                        </div>
                        <h4 className='headings'>Software Development</h4>
                        <p className='information'>We craft custom software solutions for buisnesses, from websites to mobile apps with creativity and expertise.</p>
                    </div>
                    <div className='boxes'>
                        <div className='circles circle--2'>
                            <img src="../images/shapes.png"></img>
                        </div>
                        <h4 className='headings'>UI/UX</h4>
                        <p className='information'>We specialise in creating intuitive user interfaces(UI) and user experiences(US) that drive buisness to success.</p>
                    </div>
                    <div className='boxes'>
                        <div className='circles circle--3'>
                            <img src="../images/camera.png"></img>
                        </div>
                        <h4 className='headings'>Product Management</h4>
                        <p className='information'>We specialise in guiding buisnesses through the intricaciesof product management, from conception to launch and beyond</p>
                    </div>              
                </div>
                <div className='secondrow--boxes'>   
                    <div className='boxes'>
                            <div className='circles circle--4'>
                                <img src="../images/people.png"></img>
                            </div>
                            <h4 className='headings'>iT consulting & Training</h4>
                            <p className='information'>empower organisation to navigate the complexities of the digital landscape with confidence and expertise.</p>
                        </div>  
                    <div className='boxes'>
                        <div className='circles circle--5'>
                            <img src="../images/maintain.png"></img>
                        </div>
                        <h4 className='headings'>Mantainance and Support</h4>
                        <p className='information'>we help buisnesses minimize downtime, optimize performance, and maximize the lifespan of their technology investments.</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}