'use client'
import Image from "next/image";
import styles from "@/components/banner.module.css"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Banner(){
    const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()
    const {data:session} = useSession()

    return (
        <div>
            <div className="block m-0 p-[5px] w-screen h-[80vh] relative" onClick={()=>setIndex(index+1)}>
                <Image src={covers[index%4]} 
                    alt='cover' 
                    fill={true}
                    priority
                    objectFit='cover'  
                />
                <div className="text-white top-1/2 flex flex-col  -translate-y-1/2 z-20 relative 
                    text-center p-[30px] leading-[30px] [text-shadow:_2px_2px_4px_rgba(0,0,0,0.5)] font-mono">
                    <h1 className="pb-[30px] scale-200 font-bold">where every event finds its venue</h1>
                    <h3>Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we're connecting people to the perfect place.</h3>
                    
                </div>
                {
                    session? <div className="z-30 absolute top-5 right-10 font-mono text-yellow text-xl">Welcome {session.user?.name}</div>: null
                }
               <div className="absolute bottom-10 right-10 z-30">
                    <button className="bg-white w-[120%] text-lg
                        hover:bg-blue-600 
                        text-blue-800 hover:text-white 
                        py-3 px-8 border border-white 
                        hover:border-transparent rounded-lg 
                        transition-all duration-300
                        font-mono font-bold shadow-lg
                        whitespace-nowrap"
                        onClick={(e)=>{
                            e.stopPropagation();
                            router.push('/venue')
                        }}>
                        Select Venue
                    </button>
                </div>
                
            </div>
            
        </div>
    );
}