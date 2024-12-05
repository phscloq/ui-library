export default function Tips({children, className}:{children: React.ReactNode, className?:string}){
    return (
        <section className="mt-8">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Tips</h3>
            <ul className=" ">
            {children}
            </ul>
        </section>
    )    

}