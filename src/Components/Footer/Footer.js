import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear()
    return (
        <div className='mt-12'>
            <footer class="footer footer-center p-10 bg-base-300 text-base-content rounded">
                <div class="grid grid-flow-col gap-4">
                        <Link to='/'>HOME</Link>
                        <Link to='/about'>ABOUT</Link> 
                        <Link to='/projects'>PROJECTS</Link> 
                        <Link to='/blogs'>BLOGS</Link> 
                        <Link to='/contact'>CONTACT</Link>
                </div> 
                <div>
                    <div class="grid grid-flow-col gap-5">
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
                <div>
                    <p>Copyright &copy; {currentYear} - All right reserved by Mohi U. Shafak</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;