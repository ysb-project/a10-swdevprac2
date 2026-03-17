import styles from '@/components/topmenu.module.css'
import Link from 'next/link';

export default function TopMenuItem({title, pageRef}: {title: string, pageRef: string}){
    return (
        <Link className="
            w-[120px] h-full !text-black
            flex items-center justify-center  
            font-mono text-14px 
            font-bold
        " 
        href={pageRef}>
            {title}
        </Link>
    );
}