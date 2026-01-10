import React, { useState, useRef, useEffect } from 'react';

const MarqueeDemo = () => {
    const containerRef = useRef(null);
    const [selectionBox, setSelectionBox] = useState(null);
    const [selectedItems, setSelectedItems] = useState(new Set());
    
    // Grid items (mock files)
    const items = Array.from({ length: 12 }, (_, i) => i);

    const handleMouseDown = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const startX = e.clientX - rect.left;
        const startY = e.clientY - rect.top;

        setSelectionBox({ startX, startY, width: 0, height: 0 });
        setSelectedItems(new Set()); // Clear selection on new drag

        const handleMouseMove = (moveEvent) => {
            const currentX = moveEvent.clientX - rect.left;
            const currentY = moveEvent.clientY - rect.top;

            setSelectionBox(prev => {
                if(!prev) return null;
                const width = currentX - prev.startX;
                const height = currentY - prev.startY;
                
                // Simple collision detection
                const newSelected = new Set();
                const boxLeft = Math.min(prev.startX, prev.startX + width);
                const boxRight = Math.max(prev.startX, prev.startX + width);
                const boxTop = Math.min(prev.startY, prev.startY + height);
                const boxBottom = Math.max(prev.startY, prev.startY + height);

                // Check each item
                document.querySelectorAll('.marquee-item').forEach((el) => {
                    const elRect = el.getBoundingClientRect();
                    const containerRect = containerRef.current.getBoundingClientRect();
                    
                    // Relative coordinates of the item inside the container
                    const itemLeft = elRect.left - containerRect.left;
                    const itemTop = elRect.top - containerRect.top;
                    const itemRight = itemLeft + elRect.width;
                    const itemBottom = itemTop + elRect.height;

                    if (
                        boxLeft < itemRight &&
                        boxRight > itemLeft &&
                        boxTop < itemBottom &&
                        boxBottom > itemTop
                    ) {
                         newSelected.add(parseInt(el.dataset.index));
                    }
                });
                setSelectedItems(newSelected);

                return { ...prev, width, height };
            });
        };

        const handleMouseUp = () => {
            setSelectionBox(null);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div 
            ref={containerRef}
            onMouseDown={handleMouseDown}
            className="w-full h-64 bg-neutral-900 border border-dashed border-neutral-600 rounded relative overflow-hidden cursor-crosshair select-none"
        >
            <div className="absolute top-2 left-2 text-neutral-500 text-xs pointer-events-none">
                Interactive Demo: Drag to select
            </div>
            
            <div className="grid grid-cols-4 gap-4 p-8 pointer-events-none">
                {items.map(i => (
                    <div 
                        key={i}
                        data-index={i}
                        className={`marquee-item w-12 h-12 rounded flex items-center justify-center transition-colors duration-150 ${
                            selectedItems.has(i) ? 'bg-cyan-500 text-black font-bold scale-110' : 'bg-neutral-800 text-neutral-600'
                        }`}
                    >
                        {i + 1}
                    </div>
                ))}
            </div>

            {selectionBox && (
                <div 
                    className="absolute border border-cyan-400 bg-cyan-400/20 pointer-events-none"
                    style={{
                        left: Math.min(selectionBox.startX, selectionBox.startX + selectionBox.width),
                        top: Math.min(selectionBox.startY, selectionBox.startY + selectionBox.height),
                        width: Math.abs(selectionBox.width),
                        height: Math.abs(selectionBox.height),
                    }}
                />
            )}
        </div>
    );
};

export default MarqueeDemo;
