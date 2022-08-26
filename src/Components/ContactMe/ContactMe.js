import React, { useState } from 'react';
import { send } from 'emailjs-com';
import './ContactMe.css'
import ParticleEffectButton from 'react-particle-effect-button'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ContactInfo from './ContactInfo';
// ..
AOS.init();

const ContactMe = () => {
    const [senderName, setSenderName] = useState('')
    const [senderEmail, setSenderEmail] = useState('')
    const [senderMessage, setSenderMessage] = useState('')
    const state = {
        hidden: false
      }
    const handleName =(e)=>{
        setSenderName(e.target.value)
    }
    const handleEmail =(e)=>{
        setSenderEmail(e.target.value)
    }
    const handleMessage =(e)=>{
        setSenderMessage(e.target.value)
    }
    const handleSubmit = (e) => {
           e.preventDefault()
           send(
            'service_klpnhkt',
            'contact_me',
               {senderName, senderEmail, senderMessage},
               'K1m9eTY_kN--l2waV'
           )
           .then(res =>{
               console.log('message sent successfully', res.status, res.text)
           })
           .catch((err) =>{
               console.log('error', err);
           })
        };
    return (
        <div className='flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 items-center mt-24 '>
            <ContactInfo></ContactInfo>
            <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            >
            <div>
                <div className="form-box  bg-base-300 p-8">
                    <p className="md:text-3xl text-xl font-bold text-center text-gray-400">Let’s chat and get a quote!</p>
                    <form onSubmit={handleSubmit}>
                        <div className="md:flex items-center mt-12">
                            <div className="md:w-72 flex flex-col">
                                <input tabIndex={0} arial-label="Please input name" value={senderName} onChange={handleName} name='name'  type="text" className="input-box p-3  mt-4 " placeholder="Name" required/>
                            </div>
                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <input  tabIndex={0} arial-label="Please input email address" value={senderEmail} onChange={handleEmail} name='email' type="email"className="input-box p-3  mt-4 " placeholder="Email Address"  required/>
                            </div>
                        </div>
                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label className="text-base font-semibold leading-none ">Message</label>
                                <textarea tabIndex={0} aria-label="leave a message" role="textbox" value={senderMessage} onChange={handleMessage} name='message' type="text" className="input-box h-36 mt-4 resize-none" defaultValue={""}  required/>
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-center w-full">
                            
                                <button className='input-box font-bold mt-6    hover:text-white hover:translate-y-2 hover:transition hover:duration-500 duration-500 p-3 cursor-pointer'>SUBMIT</button>
                           
                            
                        </div>
                    </form>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default ContactMe;
/**
 * hover:translate-y-2 hover:transition hover:duration-500 duration-500
 * button style 
 * className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
 */