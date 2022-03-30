import React from 'react';

const Footer = () => {
    return (
        <div className='p-2 mt-5  footerBColor'>
            <div className=' container'>
                <div className='d-flex justify-content-between'>

                    <div>
                        <h1>AB E-COMMERS</h1>
                    </div>
                    <div>
                        <h2>About us</h2>
                        <a className='text-decoration-none text-reset' href="#">
                            <p>Phone: +0052</p>
                        </a>
                        <a className='text-decoration-none text-reset' href="#">
                            <p>Email: ab@admin.com</p>
                        </a>
                        <a href="#" className='text-decoration-none text-reset'>
                            <p>Address: west </p>
                        </a>

                    </div>
                </div>
                <div className=' '>
                    <hr className=' ' />
                    <p className='d-flex justify-content-center pb-2'>Copy right  &copy;  by AB developing House</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;