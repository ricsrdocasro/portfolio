import { useState } from "react";
import lattes from "../assets/lattes.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaBars, FaTimes} from "react-icons/fa"
import { useLanguage } from "../context/LanguageContext"

const Navbar = () => {
    const { content, toggleLanguage, language } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4 bg-neutral-950/50 backdrop-blur-md border-b border-neutral-800/50 font-inter">
            <div className="flex items-center justify-between">
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-neutral-400 hover:text-white text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Desktop Navigation Items - Shifted to the left */}
                <div className="hidden md:flex items-center gap-8">
                    {content.navbar.items.map((item, index) => (
                        <a key={index} href={item.href} className="text-sm font-semibold text-neutral-400 hover:text-purple-400 transition-all duration-300 tracking-widest uppercase">
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Language Toggle and Socials - On the right */}
                <div className="flex items-center gap-6">
                    <button 
                        onClick={toggleLanguage}
                        className="text-xs font-black border border-neutral-700 px-2 py-1 rounded hover:bg-purple-400 hover:text-black hover:border-purple-400 transition-all duration-300"
                    >
                        {language === 'pt' ? 'EN' : 'PT'}
                    </button>
                    
                    <div className="flex items-center gap-4 text-xl text-neutral-400">
                                            <a href="https://github.com/ricsrdocasro" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                                <FaGithub />
                                            </a>
                                            <a href="https://www.linkedin.com/in/ricardo-de-castro-paula/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition-colors">
                                                <FaLinkedin />
                                            </a>
                                            <a href="http://lattes.cnpq.br/2156536019184292" target="_blank" rel="noopener noreferrer" className="group">
                                                <img 
                                                    className="w-5 filter grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-125 transition-all duration-300" 
                                                    src={lattes} 
                                                    alt="Lattes" 
                                                />
                                            </a>
                                            <a href="https://www.instagram.com/ricarso.casro/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
                                                <FaInstagram />
                                            </a>
                        
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-800/50 p-6 flex flex-col gap-4 shadow-2xl">
                    {content.navbar.items.map((item, index) => (
                        <a 
                            key={index} 
                            href={item.href} 
                            onClick={() => setIsMenuOpen(false)}
                            className="text-lg font-semibold text-neutral-300 hover:text-purple-400 transition-colors tracking-widest uppercase py-2 border-b border-neutral-800/30"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar
