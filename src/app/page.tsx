import Link from "next/link";

export default function Home() {
  
  return (
    <main className=""> 
    <h1 className=" text-3xl mb-4">Welcome to Baran UI</h1> 
    <h3 className=" font-normal">What &apos;s this site for?</h3>
    <div className="flex flex-col gap-4">
            <p>Baran UI is kinda ui library. &quot;Kinda&quot; because it is not a package.</p>
               <p>Over the course of my journey at web development I felt the need for ready-to-use components.
               And as a learning experience I have decided to built mine. This will help me to code from zero every web app that I am building.
            </p>
            <p>It is free to use. No citetation necessary.
                If you think there is a better way to code better the components you see here, you can edit on  
                <Link 
                className="ml-1 hover:text-sky-500  underline" 
                href="https://github.com/phscloq/ui-library">github</Link>.
            </p>
            </div>
 </main>
  )
}
