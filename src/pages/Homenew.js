import React from 'react';
import { Button } from 'reactstrap';
import person_03 from '../person_03.jpg';
import '../App.css';
import Header from '../partials/Header';

function Homenew(){
  return (
    <>
       <Header/>
     <div className="portfolio">
         <div className="row">
             <div className="col-md-5" style={{backgroundImage: "url(" + person_03 + ")"}}>
               <div class="image-bg">
                  {/* <img src={person_03} className="dev-img" alt="dev" /> */}
               </div>
             </div>
             <div className="col-md-7">
                 <h1>Shreya Sengupta</h1>
                 <h5>Web Developer</h5>
                 <p>Hello! I am Web Developer from India, Mohali. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.</p>
                 <Button color="primary">Contact Me</Button>
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
                 <div className="service-sec">
                    <h1>Services</h1>
                    <h5>What I Do</h5>
                    <div className="row">
                        <div class="col-md-6">
                            <h4>Web Development</h4>
                            <p>The web development process includes: web design, web content, client-side / server-side scripting and network security configuration.</p>
                        </div>
                        <div class="col-md-6">
                            <h4>Marketing & Advertising</h4>
                            <p>Advertising Management though is a complex process of employing various media to sell a product or service.</p>
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