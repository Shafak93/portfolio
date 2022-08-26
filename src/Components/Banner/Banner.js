import React from 'react';
import bannerImg from '../../images/portfolio-01.png'
import './Banner.css'
import resume from '../../images/My-ResumePDF.pdf'
import TypeAnimation from 'react-type-animation';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
// ..
AOS.init();


const Banner = () => {
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    return (
        <>
         
        <div className='flex flex-col-reverse lg:flex-row justify-center items-center lg:justify-around lg:px-5 rounded-xl mt-24'>
           
            
            <div className='mt-10 ml-10'>
            

                <p className='text-2xl'>Hello, I'm</p>
                <h1 className='text-4xl uppercase lg:text-5xl font-bold font-mono'>Mohiuddin Shafak</h1>
                <div className='text-2xl uppercase lg:text-3xl font-mono font-bold'  >
                <TypeAnimation
                cursor={true}
                sequence={[
                'A frontend developer',
                3000,
                'A backend developer',
                2000,
                'A MERN developer',
                2000,
                ]}
                wrapper="h2"
                repeat={Infinity}
            />
            <h4 className='text-2xl'>From Bangladesh</h4>
            
                    <button className='download-btn btn bg-base-300 border-none hover:bg-base-300 hover:text-white hover:translate-x-5 hover:transition hover:duration-500 duration-500 p-3  my-10'><a href={resume} download='mohiuddinshafak.pdf'>Download Resume</a></button>
                </div>
                <div className='flex justify-around'>
                    <a
                    data-aos="fade-up" data-aos-anchor=".other-element"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    href='https://www.linkedin.com/in/md-mohiuddin-shafak-9aa215193/' target="_blank">
                        <AiFillLinkedin  className='icon p-2 cursor-pointer' size={60}>
                        </AiFillLinkedin>
                    </a>
                    
                    <a
                     data-aos="fade-up" data-aos-anchor=".other-element"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000"
                    href="https://github.com/Shafak93" target="_blank">
                    <AiFillGithub className='icon p-2 cursor-pointer' size={60}></AiFillGithub>
                    </a>
                    <a
                     data-aos="fade-down" data-aos-anchor=".other-element"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000"
                    href='https://www.facebook.com/mohiushafak/'  target="_blank">
                    <FaFacebookF  className='icon p-2 cursor-pointer' size={60}></FaFacebookF>
                    </a>
                    
                    <a
                     data-aos="fade-down" data-aos-anchor=".other-element"
                     data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000"
                    href="https://twitter.com/mu_shafak" target="_blank">
                    <BsTwitter className='icon p-2 cursor-pointer' size={60}></BsTwitter>
                    </a>
                </div>
            </div>
            <div className='left-img mt-20 hover:bg-base-300 transition hover:transition hover:duration-500 duration-500 '  
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
                <img className='-mt-20 h-60 lg:h-96' src={bannerImg} alt="" />
            </div>
        </div>
        </>
    );
};

export default Banner;

{/* <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": -1
        },
        "particles": {
            "number": {
                "value": 400,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#fff"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 10,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 500,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "bottom",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 4,
                    "duration": 0.3,
                    "opacity": 1,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
       
    }}
    /> */}