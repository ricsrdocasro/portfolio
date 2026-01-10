import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const FoddaciChat = () => {
    const { content } = useLanguage();
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Fala tu. O pai tá on.' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesContainerRef = useRef(null);
    const [shake, setShake] = useState(false);
    const containerRef = useRef(null);

    const API_URL = "https://ricsrdocasro-foddacitronbackend.hf.space/chat";

    const scrollToBottom = () => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const formatText = (text) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<b class="bg-[#FF0055] text-white font-black px-1 shadow-[2px_2px_0_black] -rotate-1 inline-block">$1</b>')
            .replace(/\*(.*?)\*/g, '<i class="font-[\'VT323\'] text-xl text-[#9D00FF] bg-black/5 px-1 not-italic border-b-2 border-[#9D00FF]">$1</i>')
            .replace(/\n/g, '<br>');
    };

    const triggerShake = () => {
        setShake(true);
        setTimeout(() => setShake(false), 500);
    };

    const handleSend = async () => {
        if (!input.trim() || loading) return;

        const userMsg = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setLoading(true);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMsg.text })
            });

            if (!response.ok) throw new Error("Backend Error");

            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            
            setLoading(false);
            
            // Add placeholder for bot message
            setMessages(prev => [...prev, { sender: 'bot', text: '' }]);
            
            let accumulatedText = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                
                const chunk = decoder.decode(value, { stream: true });
                accumulatedText += chunk;

                // Check for shake trigger
                if (chunk.includes('!') && chunk.includes('**')) {
                    triggerShake();
                }
                
                // Update last message
                setMessages(prev => {
                    const newMsgs = [...prev];
                    newMsgs[newMsgs.length - 1].text = accumulatedText;
                    return newMsgs;
                });
            }

        } catch (error) {
            setLoading(false);
            setMessages(prev => [...prev, { sender: 'bot', text: '[ERRO: O VITO TROPEÇOU NO SERVIDOR]' }]);
        }
    };

    return (
        <div ref={containerRef} className={`flex flex-col h-full w-full bg-[#FBFF00] font-['Space_Mono'] border-4 border-black text-black overflow-hidden relative ${shake ? 'animate-shake' : ''}`}>
             <style>{`
                @keyframes shake {
                    0% { transform: translate(1px, 1px) rotate(0deg); }
                    10% { transform: translate(-1px, -2px) rotate(-1deg); }
                    20% { transform: translate(-3px, 0px) rotate(1deg); }
                    30% { transform: translate(3px, 2px) rotate(0deg); }
                    40% { transform: translate(1px, -1px) rotate(1deg); }
                    50% { transform: translate(-1px, 2px) rotate(-1deg); }
                    60% { transform: translate(-3px, 1px) rotate(0deg); }
                    70% { transform: translate(3px, 1px) rotate(-1deg); }
                    80% { transform: translate(-1px, -1px) rotate(1deg); }
                    90% { transform: translate(1px, 2px) rotate(0deg); }
                    100% { transform: translate(1px, -2px) rotate(-1deg); }
                }
                .animate-shake {
                    animation: shake 0.5s infinite;
                }
            `}</style>

            {/* Header */}
            <div className="bg-black text-white p-2 flex justify-between items-center border-b-4 border-black border-t-[6px] border-t-[#FF0055]">
                <span className="font-['Archivo_Black'] uppercase text-sm">FODDACITRON V.2.0</span>
                <span className="text-xs">REC ●</span>
            </div>

                        {/* Messages */}
                        <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fafafa] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px]">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                                     <div 
                                        className={`relative max-w-[90%] p-3 text-sm border-2 border-black ${
                                            msg.sender === 'bot' 
                                            ? 'bg-white shadow-[6px_6px_0_0_black] ml-4 border-l-[8px]' 
                                            : 'bg-black text-[#FBFF00] shadow-[-6px_6px_0_0_#00FF33] border-[3px] border-[#FBFF00]'
                                        }`}
                                     >
                                        <span dangerouslySetInnerHTML={{ __html: formatText(msg.text) }} />
                                     </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="text-black font-bold text-xs animate-pulse pl-4">
                                    {content.ui.processing}
                                </div>
                            )}
                        </div>
                        {/* Input */}
            <div className="bg-[#FBFF00] p-2 border-t-4 border-black flex gap-2">
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={content.ui.typeMe}
                    className="flex-1 border-2 border-black p-2 font-bold outline-none text-black bg-white focus:bg-[#fffbe6] focus:shadow-[inset_4px_4px_0_rgba(0,0,0,0.1)] transition-colors placeholder:text-black/30"
                />
                <button 
                    onClick={handleSend}
                    disabled={loading}
                    className="bg-[#00FF33] border-2 border-black px-4 font-['Archivo_Black'] hover:bg-[#4dff73] active:translate-x-1 active:translate-y-1 active:shadow-none shadow-[4px_4px_0_0_black] transition-all disabled:opacity-50 disabled:shadow-none"
                >
                    {content.ui.send}
                </button>
            </div>
        </div>
    );
};

export default FoddaciChat;
