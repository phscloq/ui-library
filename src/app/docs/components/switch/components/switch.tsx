export default function SwitchComponent(){
    return (
        <div className="w-full bg-slate-400 h-[400px] flex gap-2 justify-center items-center
             rounded-md
            ">
                <label
                className="bg-slate-300 has-[:checked]:bg-black 
                relative w-16 h-8 rounded-full
                transition-all duration-200
                cursor-pointer
                "
                >
                    <input type="checkbox" id="holidaymode" className=" sr-only peer" />
                    <span className="w-2/5  h-4/5  bg-slate-50 absolute
                     rounded-full left-1 top-[3px] 
                     peer-checked:left-[35px]
                     transition-all duration-200"></span>
                </label>

                <label className="text-[21px] text-black font-normal"
                 htmlFor="holidaymode">Holiday Mode</label>
                
            </div> 
    )
}