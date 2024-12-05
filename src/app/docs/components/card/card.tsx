export default function CardComponent(){
    return(
    <div className="w-full bg-slate-700 dark:bg-slate-300 h-[400px] flex gap-2 justify-center items-center p-4 sm:p-0
        rounded-b-md
       ">
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
    </div>
    )
}