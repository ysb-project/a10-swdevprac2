'use client'
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";

export default function Card({ venueName, imgSrc, onCompare }: { 
    venueName: string; 
    imgSrc: string; 
    onCompare?: (venue: string, rating: number) => void;
}) 

{
    const [value, setValue] = useState<number>(0);

    /*useEffect(() => {
        onCompare(venueName, 0);
    }, []);*/

    return (
        <InteractiveCard >
            <div style={{ marginTop: '24px' }} className="w-[90%] h-[60%] relative overflow-hidden rounded-t-lg">
                <Image
                    src={imgSrc}
                    alt="party-place"
                    fill={true}
                    className="object-cover"
                />
            </div>
            <div style={{ marginTop: '24px' }} className="w-full h-[10%] flex items-center justify-center px-3
                font-mono bg-gradient-to-b 
                from-[#F8E28F] via-[#C5A021] to-[#8A6628] 
                bg-clip-text text-transparent 
                text-[2em] font-bold text-center leading-tight">
                {venueName}
            </div>
        
        </InteractiveCard>
    );
}

/*<div className="w-full h-[15%] scale-150 flex items-center justify-center">
                <Rating
                    id={`${venueName} Rating`}
                    name={`${venueName} Rating`}
                    data-testid={`${venueName} Rating`}
                    value={value}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    onChange={(event, newValue) => {
                        event.preventDefault();
                        const rating = newValue ?? 0;
                        setValue(rating);
                        onCompare(venueName, rating);
                    }}
                    
                />
            </div>*/