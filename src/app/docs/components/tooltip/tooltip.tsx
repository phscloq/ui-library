import ComponentParent from "@/app/components/component-parent";

export default function TooltipComponent({children, text}:{children:React.ReactNode, text:string}){

return (
    <ComponentParent>
        <div className="relative inline-block group">
            {children}
            <div className=" bg-black text-white text-xs rounded-md p-1 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-full
            whitespace-nowrap opacity-0 group-hover:opacity-100  transition-opacity duration-300
            ">
                {text}
            </div>
        </div>
    </ComponentParent>
)

}