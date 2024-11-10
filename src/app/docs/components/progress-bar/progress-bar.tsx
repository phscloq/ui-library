export default function ProgressBarComponent({progress_score, classNames=''}:{ progress_score:number, classNames?:string}){
    return (
        <div className="w-full bg-slate-400 h-[400px] flex justify-center items-center
             rounded-md">
                <p className=" text-2xl font-medium text-slate-800 mr-2">{progress_score * 100}%</p>
            <div className={` w-96 rounded-full bg-gray-200 dark:bg-slate-700 h-3 ${classNames}`}>
                <div
                    className='bg-orange-600    h-3 rounded-full'
                style={{width: `${progress_score * 100}%`}}
                >

                </div>
            </div>
            
        </div>
    )
}