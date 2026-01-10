import React from 'react'
import { useLanguage } from "../context/LanguageContext";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import lattes from "../assets/lattes.png";

const Contact = () => {
    const { content } = useLanguage();

    return (
        <div id="contact" className="border-b border-neutral-900 pb-20">
            <h2 className="my-20 text-center text-4xl font-bold text-purple-400 uppercase tracking-widest">
                {content.contact.title}
            </h2>
            
            <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
                {/* Email Button */}
                <a 
                    href={`mailto:${content.contact.email}`} 
                    className="flex items-center gap-3 bg-neutral-900/50 border border-neutral-800 backdrop-blur-md px-8 py-4 rounded-full text-xl hover:bg-neutral-800 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300 group mb-12 shadow-lg"
                >
                    <FaEnvelope className="text-purple-500 group-hover:scale-110 transition-transform" />
                    <span>{content.contact.email}</span>
                </a>

                {/* Phone (Optional, keeping it subtle if needed, or removing based on 'more detailed' request usually implying removing simple text lists) */}
                {/* User asked to remove location. Keeping phone but styled nicely? Or just socials? Let's keep phone as a secondary item. */}
                <p className="text-neutral-500 mb-12 font-mono tracking-wider">
                    {content.contact.phoneNo}
                </p>

                {/* Social Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-2xl">
                    <a 
                        href="https://github.com/ricsrdocasro" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center gap-3 bg-neutral-900/30 border border-neutral-800/50 p-6 rounded-2xl hover:bg-neutral-900 hover:border-purple-500/30 transition-all duration-300 group"
                    >
                        <FaGithub className="text-4xl text-neutral-400 group-hover:text-white transition-colors" />
                        <span className="text-sm font-bold text-neutral-500 group-hover:text-purple-300 uppercase tracking-widest">GitHub</span>
                    </a>

                    <a 
                        href="https://linkedin.com/in/ricardo-de-castro-paula/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center gap-3 bg-neutral-900/30 border border-neutral-800/50 p-6 rounded-2xl hover:bg-neutral-900 hover:border-purple-500/30 transition-all duration-300 group"
                    >
                        <FaLinkedin className="text-4xl text-neutral-400 group-hover:text-[#0077b5] transition-colors" />
                        <span className="text-sm font-bold text-neutral-500 group-hover:text-purple-300 uppercase tracking-widest">LinkedIn</span>
                    </a>

                    <a 
                        href="http://lattes.cnpq.br/2156536019184292" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center gap-3 bg-neutral-900/30 border border-neutral-800/50 p-6 rounded-2xl hover:bg-neutral-900 hover:border-purple-500/30 transition-all duration-300 group"
                    >
                        <img 
                            src={lattes} 
                            alt="Lattes" 
                            className="w-9 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        />
                        <span className="text-sm font-bold text-neutral-500 group-hover:text-purple-300 uppercase tracking-widest">Lattes</span>
                    </a>

                    <a 
                        href="https://instagram.com/ricarso.casro/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center gap-3 bg-neutral-900/30 border border-neutral-800/50 p-6 rounded-2xl hover:bg-neutral-900 hover:border-purple-500/30 transition-all duration-300 group"
                    >
                        <FaInstagram className="text-4xl text-neutral-400 group-hover:text-[#e4405f] transition-colors" />
                        <span className="text-sm font-bold text-neutral-500 group-hover:text-purple-300 uppercase tracking-widest">Instagram</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact