import { useState, useEffect } from 'react';
import { useLanguage } from "../context/LanguageContext";
import MorphingAsset from "./canvas/MorphingAsset";
import ScrambleText from "./ScrambleText";

const Hero = () => {
    const { content } = useLanguage();
    const [roleIndex, setRoleIndex] = useState(0);

    const titles = content.hero.titles;
    const currentRole = titles[roleIndex % titles.length];

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % titles.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [titles.length]);

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 pt-10 lg:pt-0 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="pb-8 lg:pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
                             <span style={{ display: 'inline-block' }}>Ricardo de Castro</span>
                        </div>
                        <span className="pb-8 lg:pb-16 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent min-h-[60px] lg:min-h-[100px]">
                            <ScrambleText text={currentRole} className="" />
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
