"use client"
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";
import { AppDispatch } from "@/redux/store";

export default function BookingList() {
    const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>();

    if (bookItems.length === 0) {
        return <div className="text-white font-mono font-bold text-3xl text-center mt-10">No Venue Booking</div>;
    }

    return (
        <div className="flex flex-col items-center gap-6 p-5 font-mono w-full h-full">            
            <h1 className="text-white font-bold text-4xl mb-4 tracking-tighter">
                My Bookings
            </h1>
            
            {bookItems.map((item) => (
                <div key={`${item.nameLastname}-${item.bookDate}`} 
                     className="bg-white rounded-2xl w-[95%] md:w-[85%] max-w-[900px] py-8 
                                flex flex-col md:flex-row justify-between items-start md:items-center 
                                shadow-xl border-l-[12px] border-sky-500 ">
                    
                    <div className="flex flex-col gap-2 text-gray-800 ml-12">                        <div className="text-2xl font-black text-black uppercase tracking-tight">
                            {item.nameLastname}
                        </div>
                        <div className="flex flex-col gap-3 text-[15px]">
                            <p><span className="text-gray-400 font-medium">Contact:</span> {item.tel}</p>
                            <p><span className="text-gray-400 font-medium">Venue:</span> 
                                <span className="ml-2 px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-sm font-bold border border-blue-100">
                                    {item.venue}
                                </span>
                            </p>
                            <p><span className="text-gray-400 font-medium">Date:</span> {item.bookDate}</p>
                        </div>
                    </div>

                    <div className="mr-15 mt-6 md:mt-0">
                        <button
                            onClick={() => dispatch(removeBooking(item))}
                            className="px-6 py-2 bg-red-50 text-red-600 border-2 border-red-100
                                       rounded-xl font-bold hover:bg-red-600 hover:text-white 
                                       transition-all duration-200 active:scale-90 whitespace-nowrap"
                        >
                            Remove Booking
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}