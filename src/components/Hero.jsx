import { useState, useMemo } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import MorphingAsset from "./canvas/MorphingAsset";

const Hero = () => {
    const { content } = useLanguage();
    const [currentRole, setCurrentRole] = useState(content.hero.titles[0]);
    
    // Construct sequence with callbacks: [title1, 1000, () => setRole(title2), title2, 1000, ...]
    // Note: The callback runs AFTER the wait time, so we set the NEXT role or the CURRENT one?
    // Actually, TypeAnimation callbacks in sequence run at that point.
    // Let's try: [title1, 1000, () => setCurrentRole(title2), title2, ...]
    // Better strategy: simply update the role when the typing starts for that role? 
    // TypeAnimation sequence is strictly linear.
    
    const titlesSequence = useMemo(() => {
        const seq = [];
        const titles = content.hero.titles;
        
        titles.forEach((title, index) => {
           seq.push(title);
           seq.push(2000); // Wait 2s
           // Callback to switch state for the NEXT title (or loop back to first)
           seq.push(() => {
               const nextIndex = (index + 1) % titles.length;
               setCurrentRole(titles[nextIndex]);
           });
        });
        return seq;
    }, [content.hero.titles]);


    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 pt-10 lg:pt-0">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="pb-8 lg:pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
                             <span style={{ display: 'inline-block' }}>Ricardo de Castro</span>
                        </div>
                        <span className="pb-8 lg:pb-16 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent min-h-[60px] lg:min-h-[100px]">
                        <TypeAnimation
                                key={content.hero.titles[0]} // Force re-render on language change
                                sequence={titlesSequence}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                        <p className="pb-8 lg:pb-16 font-light tracking-tighter max-w-xl mx-auto lg:mx-0 px-4 lg:px-0 text-sm lg:text-base leading-relaxed">
                            {content.hero.description}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 h-[300px] lg:h-[500px] flex items-center justify-center relative order-1 lg:order-2 mb-8 lg:mb-0">
                    {/* 3D Morphing Asset */}
                    <div className="w-full h-full absolute inset-0 z-10 lg:-translate-x-12 lg:-translate-y-12">
                         <MorphingAsset role={currentRole} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
