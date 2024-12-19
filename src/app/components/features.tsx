export default function Features({children, className}:{children: React.ReactNode, className?:string}){
    return (
        <section className="mt-8">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Features</h3>
            <ul className=" ">
            {children}
            </ul>
        </section>
    )    

}