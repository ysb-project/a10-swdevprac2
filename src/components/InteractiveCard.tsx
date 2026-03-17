'use client'
import React from "react";

export default function InteractiveCard({ children }: { children: React.ReactNode }) {
    function onCardMouseAction(event: React.SyntheticEvent) {
        if (event.type == 'mouseover') {
            event.currentTarget.classList.remove('shadow-lg', 'bg-white')
            event.currentTarget.classList.add('shadow-2xl', 'bg-neutral-200')
        } else {
            event.currentTarget.classList.remove('shadow-2xl', 'bg-neutral-200')
            event.currentTarget.classList.add('shadow-lg', 'bg-white')
        }
    }
    return (
        <div className='w-[400px] h-[480px] rounded-lg shadow-lg shadow-purple-500/50 bg-white flex flex-col items-center overflow-hidden'
            onMouseOver={(e) => onCardMouseAction(e)}
            onMouseOut={(e) => onCardMouseAction(e)}
        >
            {children}
        </div>
    );
}