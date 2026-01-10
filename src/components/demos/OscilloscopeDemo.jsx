import React, { useEffect, useRef } from 'react';

const OscilloscopeDemo = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let offset = 0;

        const render = () => {
            offset += 2;
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw Grid
            ctx.strokeStyle = '#333333';
            ctx.lineWidth = 1;
            ctx.beginPath();
            for(let x=0; x<canvas.width; x+=20) { ctx.moveTo(x,0); ctx.lineTo(x,canvas.height); }
            for(let y=0; y<canvas.height; y+=20) { ctx.moveTo(0,y); ctx.lineTo(canvas.width,y); }
            ctx.stroke();

            // Draw Wave
            ctx.beginPath();
            ctx.strokeStyle = '#00ff00';
            ctx.lineWidth = 2;
            for (let x = 0; x < canvas.width; x++) {
                const y = canvas.height / 2 + Math.sin((x + offset) * 0.05) * 40;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => window.cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div className="w-full h-48 bg-black rounded border-4 border-gray-700 relative overflow-hidden">
             <div className="absolute top-2 left-2 text-green-500 text-xs font-mono">CH1: 2V/div 5ms/div</div>
            <canvas ref={canvasRef} width={500} height={192} className="w-full h-full" />
        </div>
    );
};

export default OscilloscopeDemo;
