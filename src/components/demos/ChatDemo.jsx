import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaRobot, FaUser } from 'react-icons/fa';

const ChatDemo = ({ title }) => {
    const [started, setStarted] = useState(false);

    return (
        <div className="w-full h-64 bg-neutral-900 rounded-lg flex flex-col border border-neutral-700 overflow-hidden text-xs">
            {/* Header */}
            <div className="bg-neutral-800 p-2 border-b border-neutral-700 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="ml-2 font-mono text-neutral-400">{title || "C.R.I.S Terminal"}</span>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 font-mono overflow-y-auto space-y-3">
                <div className="flex gap-2 text-cyan-400">
                    <FaRobot className="mt-1" />
                    <div>
                        <p>System Online. Knowledge Base: Active.</p>
                        <p>How can I assist you today agent?</p>
                    </div>
                </div>

                {!started && (
                    <button 
                        onClick={() => setStarted(true)}
                        className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 px-3 py-1 rounded border border-neutral-600 transition-colors"
                    >
                        &gt; Ask about "Kian"
                    </button>
                )}

                {started && (
                    <>
                         <div className="flex gap-2 justify-end text-neutral-300">
                            <div>
                                <p>Who is Kian?</p>
                            </div>
                            <FaUser className="mt-1" />
                        </div>
                        <div className="flex gap-2 text-cyan-400">
                            <FaRobot className="mt-1" />
                            <div className="max-w-[80%]">
                                <TypeAnimation
                                    sequence={[
                                        'Searching database...',
                                        500,
                                        'Kian is a central figure in the Ordo Realitas universe. Known for his connection to the "Calamidade", he possesses knowledge that transcends normal understanding. [RAG Source: Wiki_Entry_404]',
                                    ]}
                                    speed={70}
                                    cursor={true}
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ChatDemo;
