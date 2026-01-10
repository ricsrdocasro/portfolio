import React, { useState, useEffect } from 'react';
import YoutubeEmbed from "./YoutubeEmbed";
import { FaBandcamp, FaSoundcloud, FaPlay, FaXmark, FaYoutube } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";
import { useMusic } from "../context/MusicContext";
import { motion, AnimatePresence } from "framer-motion";

const Hobbies = () => {
    const { content } = useLanguage();
    const { setIsPlaying } = useMusic();
    const [playingId, setPlayingId] = useState(null);

    // Removed the first "Latest Release" from this list
    const albums = [
        { id: "7Q4hanPrgPM", title: "Loudness EP", genre: "Future Garage / Deep House / DnB", year: "2025" },
        { id: "T59lmNOxEto", title: "our path in light", genre: "Future Garage / Deep House / Techno / Downtempo", year: "2025" },
        { id: "jiJbQgIfnAY", title: "Music is Just Noise", genre: "Experimental / DnB / Ambient", year: "2025" },
        { id: "zJuPCD9N7Bo", title: "Doppelganger", genre: "Downtempo / Ambient / Trip Hop", year: "2024" },
        { id: "3mqIlVf2LNQ", title: "Quark", genre: "UK Garage / Lofi Hip Hop / Liquid DnB / Breakcore", year: "2024" },
    ];

    useEffect(() => {
        setIsPlaying(!!playingId);
    }, [playingId, setIsPlaying]);

    const handleToggle = (id) => {
        setPlayingId(playingId === id ? null : id);
    };

    return (
        <div id="hobbies" className="border-b border-neutral-900 pb-20">
            <h1 className="my-20 text-center text-4xl font-bold text-purple-400">
                {content.hobbies.title}
            </h1>

            <div className="max-w-5xl mx-auto px-4">
                {/* Intro Card with Featured Video */}
                <div className="bg-neutral-900/30 backdrop-blur-md border border-neutral-800/50 rounded-2xl p-4 md:p-8 mb-16 shadow-lg flex flex-col md:flex-row items-center gap-8">
                    
                    {/* Text & Socials */}
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-xl text-neutral-300 font-light mb-6 leading-relaxed">
                            {content.hobbies.description}
                        </p>
                        <div className="flex justify-center md:justify-start gap-6 text-3xl text-neutral-400">
                            <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors"><FaSoundcloud /></a>
                            <a href="https://bandcamp.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#629aa9] transition-colors"><FaBandcamp /></a>
                        </div>
                    </div>

                    {/* Featured Video (Coffee & Music) */}
                    <div className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden shadow-2xl border border-neutral-800/50 group">
                        <div className="w-full h-full relative">
                             {/* Using YoutubeEmbed but forcing autoplay=0 here for the intro if preferred, or standard */}
                             {/* Actually, the standard embed is fine, user can play it */}
                             <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/8xUsJiEtUPI`}
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Coffee & Music"
                            />
                        </div>
                    </div>
                </div>

                {/* Discography List */}
                <div className="flex flex-col gap-4">
                    {albums.map((album, index) => (
                        <motion.div 
                            key={index}
                            layout
                            className={`bg-neutral-900/30 backdrop-blur-md border border-neutral-800/50 rounded-xl overflow-hidden transition-all ${playingId === album.id ? 'ring-1 ring-purple-500/50 bg-black/60' : 'hover:bg-neutral-900/50'}`}
                        >
                            <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                {/* Left Side: Title & Info */}
                                <div className="flex items-center gap-4 w-full md:w-auto overflow-hidden">
                                    {/* Quick Play Circle */}
                                    <button 
                                        onClick={() => handleToggle(album.id)}
                                        className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center transition-all ${playingId === album.id ? 'bg-purple-500 text-white' : 'bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700'}`}
                                    >
                                        {playingId === album.id ? (
                                            <div className="flex items-end gap-0.5 h-3">
                                                <motion.div animate={{ height: ["20%", "100%", "50%"] }} transition={{ repeat: Infinity, duration: 0.4 }} className="w-0.5 bg-white rounded-full" />
                                                <motion.div animate={{ height: ["50%", "20%", "100%"] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-0.5 bg-white rounded-full" />
                                                <motion.div animate={{ height: ["100%", "50%", "20%"] }} transition={{ repeat: Infinity, duration: 0.3 }} className="w-0.5 bg-white rounded-full" />
                                            </div>
                                        ) : (
                                            <FaPlay className="ml-0.5 text-xs" />
                                        )}
                                    </button>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-baseline gap-x-2 mb-1">
                                            <h3 className={`text-base md:text-lg font-bold leading-tight transition-colors ${playingId === album.id ? 'text-purple-300' : 'text-white'}`}>
                                                {album.title}
                                            </h3>
                                            <span className="text-[10px] text-neutral-500 border border-neutral-800 px-1.5 py-0.5 rounded bg-neutral-900/50 whitespace-nowrap">
                                                {album.year}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-500 font-mono leading-tight">
                                            <span className="text-purple-500/80 font-bold whitespace-nowrap">PLUCK</span>
                                            <span className="text-neutral-700">•</span>
                                            <span className="">{album.genre}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Expand Button (Full width mobile / Auto desktop) */}
                                <button 
                                    onClick={() => handleToggle(album.id)}
                                    className={`w-full md:w-auto flex-shrink-0 flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                                        playingId === album.id 
                                        ? 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700' 
                                        : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'
                                    }`}
                                >
                                    {playingId === album.id ? (
                                        <>
                                            <FaXmark /> {content.ui.closePlayer}
                                        </>
                                    ) : (
                                        <>
                                            <FaYoutube className="text-red-500" /> {content.ui.watchVideo}
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Expanded Video Section - Full Width */}
                            <AnimatePresence>
                                {playingId === album.id && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="w-full bg-black"
                                    >
                                        <div className="w-full aspect-video">
                                            <YoutubeEmbed embedId={album.id} />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hobbies