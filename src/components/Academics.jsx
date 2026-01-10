import React from 'react'
import { useLanguage } from "../context/LanguageContext";

const Academics = () => {
    const { content } = useLanguage();

    return (
        <div id="academics" className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">{content.academics.title}</h1>
            
            {content.academics.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-16">
                    <h2 className="text-2xl mb-10 flex flex-wrap lg:justify-center font-bold text-purple-400">
                        {section.title}
                    </h2>

                    {/* Special Layout for Education/Formação */}
                    {(section.title === "Education" || section.title === "Formação") ? (
                        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                            {section.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="w-full bg-neutral-900/30 backdrop-blur-md p-4 md:p-8 rounded-xl border border-neutral-800/50 hover:border-purple-500/30 transition-all duration-300 group">
                                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                                        {/* Logo Bubble */}
                                        <div className="h-20 w-20 flex-shrink-0 flex items-center justify-center bg-white rounded-full p-3 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-shadow">
                                            {item.image ? (
                                                <img src={item.image} alt={item.institution} className="max-h-full max-w-full object-contain" />
                                            ) : (
                                                <span className="text-xl font-bold text-neutral-900">{item.institution.substring(0,3)}</span>
                                            )}
                                        </div>
                                        
                                        {/* Header Info */}
                                        <div className="flex-1 text-center md:text-left">
                                            <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm font-mono mb-2">
                                                <span className="text-purple-300 font-bold">{item.institution}</span>
                                                <span className="hidden md:inline text-neutral-600">•</span>
                                                <span className="text-neutral-400 italic">{item.location}</span>
                                            </div>
                                            <span className="inline-block text-xs font-semibold text-neutral-500 border border-neutral-700/50 px-3 py-1 rounded-full bg-neutral-900/50">
                                                {item.period}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Description */}
                                    <div className="pl-0 md:pl-28 border-t border-neutral-800/50 pt-4 md:border-none md:pt-0">
                                        <p className="text-neutral-300 text-sm leading-relaxed max-w-2xl">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* Standard Layout for other sections (Research, Publications, etc) */
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {section.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="relative rounded-xl overflow-hidden group flex flex-col border-none bg-transparent">
                                    {/* Image Header */}
                                    <div 
                                        className="h-64 w-full overflow-hidden relative border-none bg-transparent"
                                        style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}
                                    >
                                        {/* Simple Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
                                        {item.image && (
                                            <img 
                                                src={item.image} 
                                                alt={item.title}
                                                className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-700 filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 relative z-0"
                                            />
                                        )}
                                        
                                    </div>
                                    
                                    {/* Content Card */}
                                    <div className="p-6 flex flex-col flex-1 relative z-20 -mt-24">
                                        <div className="bg-neutral-950 p-5 rounded-xl flex-1 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,1)] border border-neutral-900">
                                            <h6 className="mb-3 font-bold text-xl text-white group-hover:text-purple-300 transition-colors">{item.title}</h6>
                                            <p className="mb-6 text-neutral-400 text-sm leading-relaxed flex-grow">{item.description}</p>
                                            
                                            {item.link && (
                                                <a 
                                                    href={item.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center gap-2 w-full bg-purple-500/10 border border-purple-500/50 text-purple-300 py-3 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-purple-500 hover:text-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                                                >
                                                    {(section.title === "Publicações" || section.title === "Publications") ? content.ui.readArticle : content.ui.viewProject}
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Academics
