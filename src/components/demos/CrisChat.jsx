import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const CrisChat = () => {
    const { content } = useLanguage();
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'SISTEMA ONLINE. AGENTE, IDENTIFIQUE-SE OU ENVIE SUA SOLICITAÇÃO.' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const containerRef = useRef(null);
    const [isTyping, setIsTyping] = useState(false);

    const API_URL = "https://ricsrdocasro-c-r-i-s-backend.hf.space/chat";

    const scrollToBottom = () => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const formatText = (text) => {
        let formatted = text
            .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
            .replace(/\*(.*?)\*/g, '<i>$1</i>');

        const keywords = {
            'sangue': '#ff3333',
            'morte': '#a0a0a0',
            'conhecimento': '#ffcc00',
            'energia': '#bf00ff',
            'medo': '#ffffff',
            'kian': '#ffffff',
            'membrana': '#00ff41'
        };

        Object.keys(keywords).forEach(key => {
            const regex = new RegExp(`\b${key}\b`, 'gi');
            formatted = formatted.replace(regex, `<span style="color: ${keywords[key]}; text-shadow: 0 0 5px ${keywords[key]}; font-weight: bold;">$&</span>`);
        });

        return formatted;
    };

    const handleSend = async () => {
        if (!input.trim() || loading || isTyping) return;

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

            if (!response.ok) throw new Error("Erro na conexão");

            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            
            setLoading(false);
            setIsTyping(true);
            
            setMessages(prev => [...prev, { sender: 'bot', text: '' }]);

            let accumulatedText = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                
                const chunk = decoder.decode(value, { stream: true });
                accumulatedText += chunk;
                
                setMessages(prev => {
                    const newMsgs = [...prev];
                    newMsgs[newMsgs.length - 1].text = accumulatedText;
                    return newMsgs;
                });
            }

            setIsTyping(false);

        } catch (error) {
            setLoading(false);
            setMessages(prev => [...prev, { sender: 'bot', text: '<span style="color: #ff3333">[ERRO CRÍTICO]: FALHA NA COMUNICAÇÃO COM O SERVIDOR.</span>' }]);
        }
    };

    return (
        <div className="flex flex-col h-full w-full bg-[#050505] text-[#00ff41] font-['Share_Tech_Mono'] border border-[#008F11] rounded overflow-hidden shadow-[0_0_10px_rgba(0,255,65,0.2)]">
            <div className="bg-[#001100] border-b border-[#008F11] p-2 text-xs flex justify-between items-center select-none">
                <span>/// C.R.I.S. TERMINAL_V2.0</span>
                <span className="animate-pulse">ONLINE</span>
            </div>

            <div ref={containerRef} className="flex-1 overflow-y-auto p-4 space-y-4 font-['Fira_Code'] text-sm scrollbar-thin scrollbar-thumb-[#008F11] scrollbar-track-black">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                        <div className={`max-w-[90%] break-words ${msg.sender === 'user' ? 'text-[#aaa]' : 'text-[#00ff41]'}`}>
                            <span className="font-bold text-xs mb-1 block">
                                {msg.sender === 'user' ? '> AGENTE:' : '[C.R.I.S]:'}
                            </span>
                            <div 
                                className={`pl-2 border-l-2 ${msg.sender === 'user' ? 'border-[#555]' : 'border-[#00ff41]'}`}
                                dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
                            />
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="text-[#00ff41] text-xs animate-pulse">
                        {content.ui.processing}
                    </div>
                )}
            </div>

            <div className="bg-black p-2 border-t border-[#008F11] flex gap-2">
                <span className="text-[#00ff41] font-bold py-2">&gt;</span>
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={content.ui.waitingInput}
                    className="flex-1 bg-transparent border-none outline-none text-[#00ff41] font-['Fira_Code'] placeholder-[#00ff41]/30"
                    autoComplete="off"
                />
                <button 
                    onClick={handleSend}
                    disabled={loading || isTyping}
                    className="px-4 py-1 border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-colors font-bold text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {content.ui.send}
                </button>
            </div>
        </div>
    );
};

export default CrisChat;