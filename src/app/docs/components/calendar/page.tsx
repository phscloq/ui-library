'use client'
import Pathway from "@/app/components/pathway"
import TabSwitch from "@/app/components/tab-switch"
import { useState } from "react"
import CalendarComponent from "./calendar"
import { CodeBlock } from "@/app/components/code-block"

export default function CalendarPage(){
    const code = `
'use client'
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { format, isToday } from "date-fns";
import { generateCalendarGrid } from "./calendarUtils";
import ComponentParent from "@/app/components/component-parent";



export default function CalendarComponent(){
    const currentDate = new Date();
    const [month, setMonth] = useState(currentDate.getMonth());
    const [year, setYear] = useState(currentDate.getFullYear());
    const handlePrevMonth = () => {
        
            if(month === 0){
                setMonth(11);
                setYear(year - 1);
            }else{
                setMonth(month - 1);
            }
        
        
    };
    const handleNextMonth = () => {
        if(month === 11){
            setMonth(0);
            setYear(year + 1);
        }else{
            setMonth(month + 1);
        }
    };
    
    const calendarGrid = generateCalendarGrid(year,month);
    
    const monthYearLabel = format(new Date(year, month), "MMMM yyyy");
    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


    return (
        <ComponentParent>
        <div className=" w-96 mx-auto p-4 ">
            <div className="flex justify-between  bg-slate-800 p-2 rounded-md text-white ">
                <button onClick={()=>handlePrevMonth()} className="group">
                    <ArrowLeftIcon  className=" group-hover:scale-110  "/>
                </button>
                <h2>{monthYearLabel}</h2>
                <button onClick={()=>handleNextMonth()} className="group">
                    <ArrowRightIcon  className="group-hover:scale-110"/>
                </button>

            </div>
        <div className="grid grid-cols-7 gap-2 justify-items-center bg-white dark:bg-slate-600 py-2 rounded-md">
            {weekDays.map(day => (
                <div key={day} className="text-center font-medium text-gray-500 text-sm h-8 w-8">
                    {day}
                </div>
            ))}
            {calendarGrid.map((data, index) => {
                return (
                    <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center
                        font-bold text-2xl relative group cursor-default z-20
                        isToday(new Date(data.date)) ? 'bg-blue-500 text-white' : ''}
                        data.currentMonth ? 'text-black dark:text-white' : 'text-gray-300'}
                       
                        "
                    >
                        {data.day}
                    </div>
                  

                )
            })}
        </div>
        </div>
        </ComponentParent>
    )
}




    `;


    const [preview, setPreview] = useState(true)
    return (
        <div className="">
            <Pathway page="calendar"/>
                    
            <h1 className="text-2xl mb-8">Calendar</h1>
            <div className="flex gap-1 mb-4">
                <p className=" font-medium">Purpose:</p>
                <p>The Calendar component is a versatile and user-friendly element designed to facilitate toggling between two states in your web applications.</p>    
            </div>
            <div>
                <TabSwitch preview={preview} setPreview={setPreview} />
                
                {preview ? <CalendarComponent /> :  <CodeBlock code={code} language="tsx" filename="calendar.tsx"/>}
            </div>
            
            
        </div>
    )
}