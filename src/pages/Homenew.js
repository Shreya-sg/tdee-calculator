import React from 'react';
import { Button } from 'reactstrap';
import person_03 from '../person_03.jpg';
import '../App.css';
import Typed from 'react-typed';
import Progress from 'react-progressbar';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import Slider from "react-slick";


function Homenew(){
  const percentagewordpress = 85;
  const percentagephp= 75;
  const percentagejavascript= 75;
  const percentagehtml= 90;
  const percentagereact= 70;
  const percentagelaravel =70;
  var settings = {
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1000,
  };
  return (
    <>
     <div className="portfolio">
         <div className="row">
             <div className="col-md-4" >
               <div className="inner-bg-image">
                <div className="image-bg">
                    <img src={person_03} className="dev-img" alt="dev" />
                </div>
               </div>
             </div>
             <div className="col-md-8">
                  <div className="row">
                     <div className="col-md-10">
                        <section className="portfolio-inner">
                          <h1>Shreya Sengupta</h1>
                          <div id="typed-heading">
                            <h4>
                            <Typed
                                strings={['Web Developer',
                                'Web Designer',
                                'Programmer']}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true} 
                                loopCount={Infinity}                  
                            />
                            </h4>
                            <br/>
                          </div>
                          <p>Hello! I am Web Developer from India, Mohali. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.</p>
                          <Button color="primary">Contact Me</Button>
                        </section>
                       
                        <section className="portfolio-inner">
                          <div className="about-sec">
                              <h1>About Us</h1>
                              <h5>My Story</h5>
                              <p>Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
                                Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</p>
                              <ul>
                                <li><p><span>Age:</span>24</p></li>
                                <li><p><span>Freelance:</span> Available</p></li>
                                <li><p><span>Phone:</span> +1 256 254 84 56</p></li>
                                <li><p><span>Residence:</span> India</p></li>
                                <li><p><span>Address:</span> Mohali</p></li>
                                <li><p><span>E-mail:</span>sengupta.shreyacs14@gmail.com</p></li>
                              </ul>
                          </div>
                        </section>

                        <section class="portfolio-inner"> 
                        <div className="education-sec">
                            <h1>Education</h1>
                            <h5>Studied At</h5>
                            <div className="row">
                            <Slider {...settings}>
                                <div className="col-md-12">
                                  <h4>Varargs Training Centre Pvt. Ltd.</h4>
                                  <span>2016-</span>
                                  <span>
                                    <Typed
                                        strings={['2017',
                                         ]}
                                        typeSpeed={90}
                                        backSpeed={50}
                                        loop={true} 
                                        loopCount={Infinity}                  
                                    />
                                  </span>
                                  <p>Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.</p>
                               </div>
                               <div className="col-md-12">
                                  <h4>UPTEC Computer ConsultancyLimited</h4>
                                  <span>2017-</span>
                                  <span>
                                    <Typed
                                        strings={['2018',
                                         ]}
                                        typeSpeed={90}
                                        backSpeed={50}
                                        loop={true} 
                                        loopCount={Infinity}                  
                                    />
                                  </span>
                                  <p>Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.</p>
                               </div>
                               <div className="col-md-12">
                                  <h4>Innovative IdeasInfotech.</h4>
                                  <span>2018-</span>
                                  <span>
                                    <Typed
                                        strings={['2019',
                                         ]}
                                        typeSpeed={90}
                                        backSpeed={50}
                                        loop={true} 
                                        loopCount={Infinity}                  
                                    />
                                  </span>
                                  <p>Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.</p>
                               </div>
                               <div className="col-md-12">
                                  <h4>Varargs Training Centre Pvt. Ltd.</h4>
                                  <span>2018-</span>
                                  <span>
                                    <Typed
                                        strings={['2019',
                                         ]}
                                        typeSpeed={90}
                                        backSpeed={50}
                                        loop={true} 
                                        loopCount={Infinity}                  
                                    />
                                  </span>
                                  <p>Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.</p>
                               </div>
                            </Slider>
                            </div>
                        </div>
                        </section>
                      
                        <section className="portfolio-inner"> 
                        <div className="service-sec">
                            <h1>Skills</h1>
                            <h5>Creative Ability</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Web Development</h4>
                                    <p>The web development process includes: web design, web content, client-side / server-side scripting and network security configuration.</p>
                                    <div className="progress-container-main"><span>75%</span><Progress completed={75} /></div>
                                 </div>
                                <div className="col-md-6">
                                    <h4>Marketing & Advertising</h4>
                                    <p>Advertising Management though is a complex process of employing various media to sell a product or service.</p>
                                    <div className="progress-container-main"><span>85%</span><Progress completed={85} /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Photoshop</h4>
                                    <p>The web development process includes: web design, web content, client-side / server-side scripting and network security configuration.</p>
                                    <div className="progress-container-main"><span>80%</span><Progress completed={80} /></div>
                                </div>
                                <div className="col-md-6">
                                    <h4>Web Design</h4>
                                    <p>Advertising Management though is a complex process of employing various media to sell a product or service.</p>
                                    <div className="progress-container-main"><span>70%</span><Progress completed={70} /></div>
                                </div>
                            </div>
                        </div>
                        </section>

                        <section className="portfolio-inner"> 
                        <div className="service-sec">
                            <h1>Coding Skills</h1>
                            <h5>Developing On</h5>
                            <div className="row">
                                <div className="col-md-4">
                                <div className="progress-container-main"><CircularProgressbar value={percentagewordpress} text={`${percentagewordpress}%`} /></div> 
                                    <h4>WordPress</h4>
                                    <p>Etiam sit amet orci eget eros faucibus tincidunt.</p>
                                 </div>
                                <div className="col-md-4">
                                    <div className="progress-container-main"><CircularProgressbar value={percentagephp} text={`${percentagephp}%`} /></div> 
                                    <h4>PHP, MYSQL</h4>
                                    <p>Etiam sit amet orci eget eros faucibus tincidunt.</p>
                                </div>
                                <div className="col-md-4">
                                   <div className="progress-container-main"><CircularProgressbar value={percentagejavascript} text={`${percentagejavascript}%`} /></div> 
                                    <h4>JavaScript</h4>
                                    <p>Etiam sit amet orci eget eros faucibus tincidunt.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                <div className="progress-container-main"><CircularProgressbar value={percentagehtml} text={`${percentagehtml}%`} /></div> 
                                    <h4>HTML, CSS</h4>
                                    <p>Etiam sit amet orci eget eros faucibus tincidunt.</p>
                                </div>
                                <div className="col-md-4">
                                <div className="progress-container-main"><CircularProgressbar value={percentagereact} text={`${percentagereact}%`} /></div> 
                                    <h4>React Js</h4>
                                    <p>Etiam sit amet orci eget eros faucibus tincidunt.</p>
                                </div>
                                <div className="col-md-4">
                                <div className="progress-container-main"><CircularProgressbar value={percentagelaravel} text={`${percentagelaravel}%`} /></div> 
                                    <h4>Laravel</h4>
                                    <p>Etiam sit amet orci eget eros faucibus tincidunt.</p>
                                </div>
                            </div>
                        </div>
                        </section>
                     </div>
                     <div className="col-md-2">
                         <div className ="sidebar-annimation">
                            <ul className="social-icons">
                              <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                              <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
                              <li><i class="fa fa-github" aria-hidden="true"></i></li>
                            </ul>
                         </div>
                     </div>
                  </div>
             </div>
         </div>
     </div>
    </>
  )
}

export default Homenew;