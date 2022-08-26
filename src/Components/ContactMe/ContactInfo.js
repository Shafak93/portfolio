import React from 'react';
import hand from'../../images/hand.png'

const ContactInfo = () => {
    return (
        <div className='form-box w-72 lg:w-96' data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <div class="card  bg-base-100 shadow-xl">
            <figure className='overflow-hidden'><img className='hover:transform hover:scale-150 hover:transition hover:duration-1000 duration-1000' src={hand} alt="handshake" /></figure>
                {/* <figure class="px-10 pt-10">
                    <img src={hand} className=' hover:transform hover:scale-125 hover:transition hover:duration-1000 duration-1000 hover:overflow-hidden' alt="Shoes" class="rounded-xl" />
                </figure> */}
                <div class="card-body text-start">
                    <h2 class="text-3xl font-serif">Mohiuddin Shafak</h2>
                    <p className='text-xl font-serif'>Email: shafakctg@gmail.com</p>
                    <p className='text-xl font-serif'>Phone: +8801670303491</p>
                </div>
                </div>
        </div>
    );
};

export default ContactInfo;