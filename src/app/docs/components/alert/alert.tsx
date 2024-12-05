import ComponentParent from "@/app/components/component-parent";

export default function AlertComponent(){
    return(
    <ComponentParent>
        <div className="flex flex-col  gap-4">
            <div className="bg-white max-w-lg h-20 shadow-md dark:bg-slate-600 border dark:border-slate-700 rounded-md ">
                <div className="px-6 py-3">
                    <div>
                        <h1 className="text-lg font-semibold 
                        text-gray-800 dark:text-white">
                            Great Job!
                        </h1>
                    </div>
                    <div>
                        <p className=" text-gray-600 dark:text-white">
                            You&apos;ve successfully completed the task.
                        </p>
                    </div>
                    
                </div>
            </div>

            <div className="bg-white max-w-lg shadow-md dark:bg-slate-600 border dark:border-slate-700 rounded-md flex">
                <div className="px-6 py-3 flex items-center">
                    <div>
                        <h1 className="text-lg  font-medium
                        text-gray-800 dark:text-white mr-2">
                            +1
                        </h1>
                    </div>
                    <div>
                        <p className=" text-gray-600 dark:text-white">
                            You&apos;ve gained 1 point.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    </ComponentParent>
        
    )
}