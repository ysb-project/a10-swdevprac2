'use client'

import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"
import { Dayjs } from "dayjs"

// รับ handler function จาก parent ตามแบบในรูปภาพ
export default function DateReserve({ onDateChange, onLocationChange }: 
    { onDateChange: Function, onLocationChange: Function }) {

    return (
        <div className="bg-slate-100 rounded-lg space-y-3 md:space-y-0 md:space-x-5 
            w-full px-5 py-4 flex flex-col md:flex-row justify-center items-center">
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                    className="bg-white w-full" 
                    onChange={(value) => onDateChange(value)} // เรียกใช้ handler เมื่อเปลี่ยนวันที่
                />
            </LocalizationProvider>

            <Select
                variant="standard"
                name="venue"
                id="venue"
                defaultValue="Bloom"
                onChange={(e) => onLocationChange(e.target.value)} // เรียกใช้ handler เมื่อเปลี่ยนสถานที่
                className="w-full"
            >
                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                <MenuItem value="Spark">Spark Space</MenuItem>
                <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>
        </div>
    )
}