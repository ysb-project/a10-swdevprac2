'use client'

import { useState } from "react";
import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { Dayjs } from "dayjs";

export default function Booking() {
    
    const dispatch = useDispatch<AppDispatch>()

    // จัดการ State ของฟอร์มทั้งหมดที่นี่
    const [nameLastname, setNameLastname] = useState<string>("")
    const [tel, setTel] = useState<string>("")
    const [venue, setVenue] = useState<string>("Bloom")
    const [bookDate, setBookDate] = useState<Dayjs | null>(null)

    // ฟังก์ชันที่จะถูกเรียกเมื่อมีการกดปุ่มจอง
    const handleBooking = () => {
        if (nameLastname && tel && bookDate) {
            const item = {
                nameLastname: nameLastname,
                tel: tel,
                venue: venue,
                bookDate: bookDate.format("YYYY/MM/DD")
            }
            // Dispatch action เพื่อเก็บข้อมูลลง Redux Store
            dispatch(addBooking(item))
            alert("Booking Saved!")
        } else {
            alert("Please fill in all fields.")
        }
    }

    return (
        <main className="flex justify-center items-center min-h-screen p-4">
            <div className="bg-white rounded-2xl p-6 w-full md:w-[600px] flex flex-col gap-6 items-center shadow-lg">
                
                <h1 style={{marginTop: '24px'}}  className="text-2xl font-bold text-gray-800 tracking-tight mt-4">
                    Venue Booking
                </h1>
                <hr className="border-gray-100 w-full" />

                <TextField
                    variant="standard"
                    name="Name-Lastname"
                    label="Name-Lastname"
                    className="w-[80%]"
                    onChange={(e) => setNameLastname(e.target.value)}
                />

                <TextField
                    variant="standard"
                    name="Contact-Number"
                    label="Contact-Number"
                    className="w-[80%]"
                    onChange={(e) => setTel(e.target.value)}
                />

                <div className="flex flex-col gap-4 w-[80%]">
                    <h1 className="text-sm font-medium text-gray-600">
                        Pick-Up Date and Location
                    </h1>
                    {/* ส่ง handler functions ไปยังลูก ตามโครงสร้าง Dispatching Action */}
                    <DateReserve 
                        onLocationChange={(val: string) => setVenue(val)}
                        onDateChange={(date: Dayjs) => setBookDate(date)}
                    />
                </div>

                <button 
                    style={{marginBottom: '24px'}}
                    name="Book Venue"
                    onClick={handleBooking}
                    className="w-[40%] h-[50px] rounded-xl bg-sky-600 mb-6
                    transition-all duration-200 px-4 py-3 text-white font-semibold 
                    shadow-md text-sm tracking-wide hover:bg-sky-700"
                >
                    Book Venue
                </button>

            </div>
        </main>
    )
}