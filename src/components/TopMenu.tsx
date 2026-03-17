import Image from 'next/image'
import TopMenuItem from './TopMenuItem';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export default async function TopMenu() {
    const session = await getServerSession(authOptions)

    return (
        <div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-40 border-b border-gray-200 flex flex-row items-center px-5">
            
       
            <div className='flex items-center h-full font-mono text-[14px] font-bold text-black'>
                {
                    session ? (
                        <Link href='/api/auth/signout' className='flex items-center h-full'>
                            <div className='hover:text-red-600 transition-colors'>Sign-Out</div>
                        </Link>
                    ) : (
                        <Link href='/api/auth/signin' className='flex items-center h-full'>
                            <div className='hover:text-sky-600 transition-colors'>Sign-In</div>
                        </Link>
                    )
                }
            </div>

            <div className="flex flex-row items-center gap-5 ml-10 h-full font-mono text-[14px] font-bold text-black flex-grow">
                <TopMenuItem title='My Booking' pageRef='/mybooking' />
            </div>

            
            <div className="flex flex-row items-center gap-6 h-full font-mono text-[14px] font-bold text-black">
                <TopMenuItem title='Booking' pageRef='/booking' />
                <Link href="/" className="flex items-center h-full border border-gray-200">
                    <Image src={'/img/logo.png'} 
                        alt='logo'
                        className="h-full w-auto relative"
                        width={0} height={0}
                        sizes='100vh'
                    />
                </Link>
            </div>
        </div>
    );
}