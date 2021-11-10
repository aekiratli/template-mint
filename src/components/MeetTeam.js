import $ from 'jquery';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import {BrowserView, MobileView} from 'react-device-detect';


function MeetTeam() {

    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    // const params = {
    //     effect: "cube",
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true
    //     },
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev"
    //     }
    //   };
    
    const goToSlide=()=>{
        alert('go to slide...');
        
    }
      
  return (
    <div id="meet-team" className="slider-2 ">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h2 className="h2-heading">Meet the Team</h2>
                {/* <p className="p-heading">You can read below a few testimonials from satisfied shop owners. Of course there are also some unhappy ones but they're not here</p> */}
            </div>
        </div> 
        <div className="row mt-4">
            <div className="col-lg-12">
                <div className="slider-container">
     
      <div className="team-card">
                                    <div className="team-card-body team-info">
                                    <img  src="images/2.png" alt="alternative"/>
                                    </div>
                                    <p>CEO</p>
                                </div> 

                                <div className="team-card">
                                    <div className="team-card-body team-info">
                                    <img  src="images/3.png" alt="alternative"/>
                                    </div>
                                    <p>Full Stack Dev</p>
                                </div> 

                                <div className="team-card">
                                    <div className="team-card-body team-info">
                                    <img  src="images/4.png" alt="alternative"/>
                                    </div>
                                    <p>Full Stack Dev</p>
                                </div> 

                                <div className="team-card">
                                    <div className="team-card-body team-info">
                                    <img  src="images/5.png" alt="alternative"/>
                                    </div>
                                    <p>Community/Marketing</p>
                                </div> 

      {/* <div  ref={navigationPrevRef}  className="swiper-button-next"></div>
                        <div ref={navigationNextRef}  className="swiper-button-prev"></div> */}
       

                    {/* <div className="swiper-container card-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="testimonial-text">I am happy to have chosen Blink for our shop implementation. Their specialized experience helped the project and made it available 2 weeks prior the launch date for extensive testing</p>
                                        <div className="details">
                                            <img className="testimonial-image" src="images/testimonial-1.jpg" alt="alternative"/>
                                            <div className="text">
                                                <div className="testimonial-author">Samantha Bloom</div>
                                                <div className="occupation">Team Leader - Syncnow</div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div> 

                            <div className="swiper-slide">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="testimonial-text">Totally recommended. I am happy to have chosen Blink for our shop implementation. Their great specialized experience helped the project and made it available 2 weeks prior the launch</p>
                                        <div className="details">
                                            <img className="testimonial-image" src="images/testimonial-2.jpg" alt="alternative"/>
                                            <div className="text">
                                                <div className="testimonial-author">Nicolas Richter</div>
                                                <div className="occupation">Manager - Firstup</div>
                                            </div>
                                        </div> 
                                    </div>
                                </div> 

                            <div className="swiper-slide">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="testimonial-text">I am happy to have chosen Blink for our shop implementation. Their specialized experience helped the project and made it available 2 weeks prior the launch date for extensive testing</p>
                                        <div className="details">
                                            <img className="testimonial-image" src="images/testimonial-3.jpg" alt="alternative" />
                                            <div className="text">
                                                <div className="testimonial-author">Mary Longhorn</div>
                                                <div className="occupation">Designer - Firstdev</div>
                                            </div> 
                                        </div> 
                                    </div>
                                </div> 
                            </div> 
                            

                            <div className="swiper-slide">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="testimonial-text">Totally recommended. I am happy to have chosen Blink for our shop implementation. Their great specialized experience helped the project and made it available 2 weeks prior the launch</p>
                                        <div className="details">
                                            <img className="testimonial-image" src="images/testimonial-4.jpg" alt="alternative"/>
                                            <div className="text">
                                                <div className="testimonial-author">Mike Page</div>
                                                <div className="occupation">Developer - Chainlink</div>
                                            </div> 
                                        </div> 
                                    </div>
                                </div> 
                            </div> 
                            <div className="swiper-slide">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="testimonial-text">I am happy to have chosen Blink for our shop implementation. Their specialized experience helped the project and made it available 2 weeks prior the launch date for extensive testing</p>
                                        <div className="details">
                                            <img className="testimonial-image" src="images/testimonial-5.jpg" alt="alternative"/>
                                            <div className="text">
                                                <div className="testimonial-author">Susanne Blake</div>
                                                <div className="occupation">Operations - Launchday</div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div className="swiper-slide">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="testimonial-text">Totally recommended. I am happy to have chosen Blink for our shop implementation. Their great specialized experience helped the project and made it available 2 weeks prior the launch</p>
                                        <div className="details">
                                            <img className="testimonial-image" src="images/testimonial-6.jpg" alt="alternative" />
                                            <div className="text">
                                                <div className="testimonial-author">Vanya Dropper</div>
                                                <div className="occupation">Marketer - Flinco</div>
                                            </div> 
                                        </div> 
                                    </div>
                                </div> 
                            </div> 
    
                        </div>
    
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
    
                    </div> 
                </div>  */}
            </div>
            </div>
        </div> 
    </div> 
</div> 
  );
}

export default MeetTeam;
