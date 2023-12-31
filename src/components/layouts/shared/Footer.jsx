/* eslint-disable comma-dangle */
import React from 'react';
import { BsArrowUp } from 'react-icons/bs';

const Footer = () => {
    const handleTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className="bg-[#06202D] h-full md:h-[50vh] w-full relative">
            <div className="grid gap-14 md:gap-0 grid-cols-2 md:grid-cols-4 justify-items-center pt-32 max-w-7xl mx-auto">
                <div className="text-white space-y-3">
                    <h1 className="text-2xl font-bold">Company</h1>
                    <p>About us</p>
                    <p>Affiliate Partners</p>
                    <p>Partnership</p>
                </div>
                <div className="text-white space-y-3">
                    <h1 className="text-2xl font-bold">Community</h1>
                    <p>Terms Solutions</p>
                    <p>Refer a Friend</p>
                    <p>Blog</p>
                </div>
                <div className="text-white space-y-3">
                    <h1 className="text-2xl font-bold">Lecturing</h1>
                    <p>Be a Lecturer</p>
                    <p>Lecturer Guide</p>
                    <p>Lecturer Referral</p>
                </div>
                <div className="text-white space-y-3">
                    <h1 className="text-2xl font-bold">Mentoring</h1>
                    <p>Be a Mentor</p>
                </div>
            </div>
            <div className="w-full h-1 bg-[#BD280C] md:max-w-6xl mx-auto mt-10" />
            <div className="text-white gap-14 md:gap-0 flex md:flex-row flex-col flex-wrap justify-between items-center max-w-5xl mx-auto">
                <div className="flex justify-start items-center flex-col">
                    <img src="https://uplyrn.com/images/webpimg/Uplyrn-Logo-Reverse.webp" alt="logo" className="w-40" />
                    <p>Copyright © 2022 Uplyrn Pte Ltd</p>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Support</p>
                </div>
                <div className="flex justify-center items-center gap-6">
                    <img src="https://uplyrn.com/images/webpimg/iconfb2.webp" alt="facebook" className="w-10" />
                    <img src="https://uplyrn.com/images/webpimg/instagram.webp" alt="instagram" className="w-10" />
                    <img src="https://uplyrn.com/images/webpimg/iconlinkedin.webp" alt="linkedin" className="w-10" />
                    <img src="https://uplyrn.com/images/webpimg/iconyoutube.webp" alt="youtube" className="w-10" />
                </div>
            </div>
            <BsArrowUp type="button" onClick={handleTop} size={32} className="absolute right-0 md:right-10 bottom-5 text-white cursor-pointer" />
        </div>
    );
};

export default Footer;
