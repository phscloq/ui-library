import ComponentParent from "@/app/components/component-parent";

export default function CardComponent(){
    return(
    <ComponentParent>
        <div className="bg-white max-w-md shadow-md dark:bg-slate-600 border dark:border-slate-700 rounded-md max-h-72 ">
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2
                 text-gray-800 dark:text-stone-100">
                    Title
                </h3>
                <p className=" text-gray-600 dark:text-stone-300 max-h-40  line-clamp-4">
                    This is an example of card. You can use this card to display information in a structured way.
                    By changing the width of the card div, you can adjust the size of the card.
                </p>
            </div>
        </div>
    </ComponentParent>
    )
}