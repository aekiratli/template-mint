import $ from 'jquery';
import { useEffect, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import {BrowserView, MobileView} from 'react-device-detect';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';



SwiperCore.use([Autoplay]);
SwiperCore.use([Pagination]);

function ShowCase() {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
  return (
    <div id="show-case" className="slider-2">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h2 className="h2-heading">Show Case</h2>
            </div>
        </div> 
        <div className="row mt-4">
            <div className="col-lg-12">
                <div className="slider-container">
                <Swiper 
                pagination={true}
                autoplay={{ delay: 1000 }} 
                            navigation={{
                                nextEl: navigationNextRef.current,
                                prevEl: navigationPrevRef.current,
                              }}
                                pagination={{
                                    el: '.swiper-pagination',
                                    clickable: true,
                                }}
                             loop={true}
                             centeredSlides={true}
                              direction='horizontal'                        

                              
      spaceBetween={50}
      slidesPerView={window.screen.width <=760 ? 1 : 4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => {
        setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = navigationPrevRef.current
            swiper.params.navigation.nextEl = navigationNextRef.current
  
            // Re-init navigation
            // swiper.navigation.destroy()
            // swiper.navigation.init()
            // swiper.navigation.update()
          },1000)
      }}
    >
     
      <SwiperSlide>
      <div className="team-card-body team-info slide-avtar">
        <div >
            <img src="images/2.png" />
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      
      <div className="team-card-body team-info slide-avtar">
        <div >
        <img src="images/3.png" />
        </div>
      </div>

      </SwiperSlide>
      <SwiperSlide>
      
      <div className="team-card-body team-info slide-avtar">
        <div >
        <img cl src="images/4.png" />
        </div>
      </div>

      </SwiperSlide>
      <SwiperSlide>
      <div className="team-card-body team-info slide-avtar">
        <div >
        <img src="images/5.png" />
        </div>
      </div>
      </SwiperSlide>
      <div class="swiper-pagination"></div>

      {/* <div  ref={navigationPrevRef}  className="swiper-button-next"></div>
                        <div ref={navigationNextRef}  className="swiper-button-prev"></div> */}
    </Swiper>
       

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

export default ShowCase;
