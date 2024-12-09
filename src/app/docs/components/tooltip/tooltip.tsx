import ComponentParent from "@/app/components/component-parent";

export default function TooltipComponent({children, text}:{children:React.ReactNode, text:string}){

return (
    <ComponentParent>
        <div className="relative inline-block group">
            {children}
            <div className=" absolute -top-1 left-0  bg-black text-white text-xs rounded-md p-2
            transform    -translate-x-[17px] -translate-y-full
            whitespace-nowrap opacity-0 group-hover:opacity-100  transition-opacity duration-300 pointer-events-none
            ">
                {text}
            </div>
        </div>
    </ComponentParent>
)

}