import React from 'react';
import foto from '../assets/foto3.png';
import { useLanguage } from "../context/LanguageContext";

const About = () => {
    const { content } = useLanguage();
    return (
        <div id="about" className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                {content.about.title}
            </h2>
            <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:p-8 mb-8 lg:mb-0">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl max-w-[300px] lg:max-w-full" src={foto} alt="foto" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 px-4 lg:px-0">
                    <div className="flex justify-center lg:justify-start text-center lg:text-left">
                        <p className="my-2 max-w-xl py-6">
                            {content.about.description}
                        </p>
                    </div>
                    {/* Render Experience here if not elsewhere */}
                    <div className="flex justify-center lg:justify-start mt-4">
                        <div className="max-w-xl">
                            <h3 className="text-xl font-bold mb-2">{content.experience.title}</h3>
                            {content.experience.list.map((exp, index) => (
                                <div key={index} className="mb-4">
                                    <h4 className="font-semibold">{exp.role}</h4>
                                    <p className="text-sm text-neutral-400">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {exp.technologies.map((tech, idx) => (
                                            <span key={idx} className="bg-neutral-800 text-purple-300 text-xs px-2 py-1 rounded">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
