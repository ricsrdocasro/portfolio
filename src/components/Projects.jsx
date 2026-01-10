import React from 'react'
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import CrisChat from "./demos/CrisChat";
import FoddaciChat from "./demos/FoddaciChat";
import MarqueeDemo from "./demos/MarqueeDemo";
import oscGif from "../assets/osc.gif";
import irGif from "../assets/IRController.gif";
import { FaGithub, FaExternalLinkAlt, FaBoxOpen } from "react-icons/fa";

const Projects = () => {
    const { content } = useLanguage();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const renderDemo = (title) => {
        const t = title.toLowerCase();
        if (t.includes('oscilloscope') || t.includes('osciloscópio')) {
            return (
                <img 
                    src={oscGif} 
                    alt="Oscilloscope Demo" 
                    className="w-full h-full object-cover"
                />
            );
        }
        if (t.includes('ir') && t.includes('remote') || t.includes('esp32')) {
            return (
                <img 
                    src={irGif} 
                    alt="IR Controller Demo" 
                    className="w-full h-full object-cover"
                />
            );
        }
        if (t.includes('c.r.i.s')) {
            return <div className="w-full h-[350px]"><CrisChat /></div>;
        }
        if (t.includes('foddacitron')) {
            return <div className="w-full h-[350px]"><FoddaciChat /></div>;
        }
        if (t.includes('marquee')) {
            return <MarqueeDemo />;
        }
        return null;
    };

    return (
        <div id="projects" className="border-b border-neutral-900 pb-4">
            <motion.h1 
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="my-20 text-center text-4xl"
            >
                {content.projects.title}
            </motion.h1>
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-wrap justify-center gap-8"
            >
                {content.projects.list.map((project, index) => (
                    <motion.div 
                        key={index} 
                        variants={item}
                        whileHover={{ scale: 1.02 }}
                        className="w-full max-w-xl p-4 md:p-6 border border-neutral-800/50 rounded-xl bg-neutral-900/30 backdrop-blur-md hover:border-purple-500/30 hover:bg-neutral-900/50 transition-all duration-300 flex flex-col shadow-lg"
                    >
                        {/* Demo/Visual Area */}
                        <div className="mb-6 w-full rounded-lg overflow-hidden bg-black/50 border border-neutral-800/50 shadow-inner min-h-[150px] flex items-center justify-center">
                             {renderDemo(project.title) || (
                                 <div className="text-neutral-600 font-mono text-sm p-4">
                                     {/* Placeholder for projects without specific demos */}
                                     [System Preview Offline]
                                 </div>
                             )}
                        </div>

                        <h3 className="text-2xl font-semibold mb-2 text-purple-300">{project.title}</h3>
                        <p className="mb-4 text-neutral-400 flex-grow">{project.description}</p>
                        <div className="mb-6 flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-400 border border-purple-900/30">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-neutral-800/50">
                            {/* GitHub Icon */}
                            {project.github && (
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-2xl text-neutral-400 hover:text-white transition-colors"
                                    title="View on GitHub"
                                >
                                    <FaGithub />
                                </a>
                            )}

                            {/* Pub.dev Icon */}
                            {project.pubdev && (
                                <a 
                                    href={project.pubdev} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-2xl text-neutral-400 hover:text-blue-400 transition-colors"
                                    title="View on Pub.dev"
                                >
                                    <FaBoxOpen />
                                </a>
                            )}

                            {/* Demo Button */}
                            {project.demo && (
                                <a 
                                    href={project.demo} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="ml-auto flex items-center gap-2 bg-purple-500/10 border border-purple-500/50 text-purple-300 px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-purple-500 hover:text-white transition-all duration-300"
                                >
                                    {content.ui.viewDemo}
                                    <FaExternalLinkAlt className="text-xs" />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Projects
