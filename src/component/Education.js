import React from 'react';

const Education = () => {
    return (
        <div className="text-white mt-10 ">
            <div className="flex justify-center text-2xl font-bold text-gray-400 mb-4 text-faster-one">
                <span className="text-8xl font-rubik-vinyl-regular animate-bounce max-sm:hidden">2018 - 2024</span>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="mb-8 md:mb-0 w-full md:w-1/2">
                    <span 
                        className='uppercase font-extrabold text-5xl font-serif' 
                        style={{ borderBottom: '10px ridge rgb(96,165,250)', paddingBottom: '13px' }}
                    >
                        Education
                    </span>
                    <p className="w-4/5 mt-10 text-lg text-gray-300 sm:text-lg">
                    I completed my Bachelor of Engineering in ETE from Ramaiah Institute of Tech. (2020-2024), achieving a 8.0 CGPA.
                     Prior to this, I completed my 10+2 education at Amrita vidyalyam, specializing in Science, where I secured 83%. 
                     My academic journey has equipped me with skills which I have applied in various real-world projects.
                    </p>
                </div>

                <div className="space-y-8 w-full mt-20 md:w-1/2">
                    <div>
                        <h3 className="text-3xl font-bold">Amrita vidyalyam</h3>
                        <p className="text-gray-400">Science Student (10+2) | 2018-2020</p> 
                        <p className="text-gray-400">Scored 83%</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">Ramaiah Institute of tech.</h3>
                        <p className="text-gray-400">Bachelor of Engineering in ETE| 2020-2024</p>
                        <p className="text-gray-400">8.0 CGPA</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
