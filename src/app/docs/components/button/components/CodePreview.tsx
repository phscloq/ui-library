export default function CodePreview() {
    const code = `
    <button
    className="bg-slate-200 text-black px-3 py-1 rounded-md 
    hover:bg-slate-300  active:bg-slate-500 active:text-slate-100
    "
    >
    Button
    </button> 
    `;
    
    return (
      <div className="w-full bg-slate-400 h-[400px] p-4
      rounded-md overflow-auto relative
     ">
       <pre className=""><code className="text-black">{code}</code></pre>
       <button
       className="bg-slate-300 text-black px-2 py-1 
       rounded-md absolute top-2 right-9 " 
       onClick={() => navigator.clipboard.writeText(code)}>Copy</button> 
      </div>
    );
  }