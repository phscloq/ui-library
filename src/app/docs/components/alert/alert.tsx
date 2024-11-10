export default function AlertComponent(){
    return(
    <div className="w-full bg-slate-400 h-[400px] flex gap-2 justify-center items-center
        rounded-md
       ">
        <div className="flex flex-col  gap-4">
            <div className="bg-white max-w-lg h-20 shadow-md dark:bg-slate-600 border dark:border-white rounded-md ">
                <div className="px-6 py-3">
                    <div>
                        <h1 className="text-lg font-semibold 
                        text-gray-800 dark:text-black">
                            Great Job!
                        </h1>
                    </div>
                    <div>
                        <p className=" text-gray-600 dark:text-slate-300">
                            You've successfully completed the task.
                        </p>
                    </div>
                    
                </div>
            </div>

            <div className="bg-white max-w-lg shadow-md dark:bg-slate-600 border dark:border-white rounded-md flex">
                <div className="px-6 py-3 flex items-center">
                    <div>
                        <h1 className="text-lg  font-medium
                        text-gray-800 dark:text-black mr-2">
                            +1
                        </h1>
                    </div>
                    <div>
                        <p className=" text-gray-600 dark:text-slate-300">
                            You've gained 1 point.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
        
        
    </div>
    )
}