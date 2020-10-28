import { defaults } from 'autoprefixer';
import React from 'react';

const Footer = () => {
    return(
        <div className="w-full h-auto bg-teal-900 flex flex-col justify-center items-center py-16">
            <div className="w-3/4 md:w-2/4 h-32 border mb-4"></div>
            <div className="w-3/4 md:w-2/4 h-32 border mb-4 grid grid-cols-3 gap-8 items-center">
                <span className="text-center">IconoA</span>
                <span className="text-center">IconoB</span>
                <span className="text-center">   
                    <a href="mailto:alexotrowe@gmail.com" rel=""></a>
                </span>
            </div>
            <div className="w-3/4 md:w-2/4 h-32 border"></div>
        </div>
    );
};

export default Footer;