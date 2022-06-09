import React, { useState } from 'react';
import { send } from 'emailjs-com';

const ContactMe = () => {
    const [senderName, setSenderName] = useState('')
    const [senderEmail, setSenderEmail] = useState('')
    const [senderMessage, setSenderMessage] = useState('')
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
        <div className='mt-24'>
            <div className="w-full flex items-center justify-center my-12">
                <div className=" bg-white shadow rounded py-12 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Let’s chat and get a quote!</p>
                    <form onSubmit={handleSubmit}>
                        <div className="md:flex items-center mt-12">
                            <div className="md:w-72 flex flex-col">
                                {/* <label className="text-base font-semibold leading-none text-gray-800">Name</label> */}
                                <input tabIndex={0} arial-label="Please input name" value={senderName} onChange={handleName} name='name'  type="text" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 " placeholder="Name" required/>
                            </div>
                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                {/* <label className="text-base font-semibold leading-none text-gray-800">Email Address</label> */}
                                <input  tabIndex={0} arial-label="Please input email address" value={senderEmail} onChange={handleEmail} name='email' type="email" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 " placeholder="Email Address"  required/>
                            </div>
                        </div>
                        {/* <div className="md:flex items-center mt-8">
                            <div className="md:w-72 flex flex-col">
                                <label className="text-base font-semibold leading-none text-gray-800">Phone</label>
                                <input tabIndex={0} role="input" arial-label="Please input phone number" name='phone' type="text" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 " placeholder="Phone number" required/>
                            </div>
                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none text-gray-800">Country</label>
                                <input tabIndex={0} arial-label="Please input country name" value={senderCountry} name='country' type="text" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 " placeholder="Country" required/>
                            </div>
                        </div> */}
                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                                <textarea tabIndex={0} aria-label="leave a message" role="textbox" value={senderMessage} onChange={handleMessage} name='message' type="text" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""}  required/>
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-center w-full">
                            <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;