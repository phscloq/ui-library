export default function CodePreview() {
    const code = `<label
    className="bg-slate-300 has-[:checked]:bg-black 
    relative w-16 h-8 rounded-full
    transition-all duration-200"
    >

    <input type="checkbox" id="holidaymode" 
      className="sr-only peer" />

    <span className="w-2/5  h-4/5  bg-slate-50 absolute
         rounded-full left-1 top-[3px] 
         peer-checked:left-[35px]
         transition-all duration-200">
    </span>
</label>`;
    
    return (
      <div className="w-full bg-slate-400 h-[400px] p-4
      rounded-md overflow-x-auto relative
     ">
       <pre className=""><code className="text-black">{code}</code></pre>
       <button
       className="bg-slate-300 text-black px-2 py-1 rounded-md  absolute z-10 top-2 right-9" 
       onClick={() => navigator.clipboard.writeText(code)}>Copy</button> 
      </div>
    );
  }