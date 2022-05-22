import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-28'>
            <footer className=" p-10 bg-neutral text-neutral-content">
                    <div className='footer'>
                    <div>
                        <span className="footer-title">Services</span> 
                        <span className="footer-title">Legal</span> 
                        <Link to='' className="link link-hover">Terms of use</Link>
                        <Link to='' className="link link-hover">Privacy policy</Link>
                        <Link to='' className="link link-hover">Cookie policy</Link>
                    </div> 
                    <div>
                        <span className="footer-title">Legal</span> 
                        <Link to='' className="link link-hover">Terms of use</Link>
                        <Link to='' className="link link-hover">Privacy policy</Link>
                        <Link to='' className="link link-hover">Cookie policy</Link>
                    </div> 
                    <div>
                        <span className="footer-title">Legal</span> 
                        <Link to='' className="link link-hover">Terms of use</Link>
                        <Link to='' className="link link-hover">Privacy policy</Link>
                        <Link to='' className="link link-hover">Cookie policy</Link>
                    </div>
                    </div>
                    <div>
                        <p>Copyright © 2022 - All right reserved by Gear Store</p>
                    </div>
            </footer>
        </div>
    );
};

export default Footer;