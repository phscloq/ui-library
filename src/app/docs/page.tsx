import Link from "next/link";

export default function Docs(){
    return (
        <div className=" ">
            <h1 className=" text-3xl mb-4">Introduction</h1>
            
            <p>1. All the components made with tailwindcss.</p>
            <p>You can check the classnames and use them in your stylesheet but easiest would be using the tailwindcss.</p>
            <p>2. Other than tailwind, you will see that I am using React, and specifically a react framework, NextJS.</p>
            <p>Some of the components functionality reached by useState</p>
            <p>For more information about the technologies:</p> 
            <Link className="hover:text-sky-500 font-normal" href="https://react.dev/learn">React</Link> <Link 
            className="hover:text-sky-500  font-normal"
            href="https://tailwindcss.com/docs">tailwindcss</Link> <Link className="hover:text-sky-500 font-normal" href="https://react.dev/reference/react/useState">useState</Link> <Link className="hover:text-sky-500 font-normal" href="https://nextjs.org/docs">NextJS</Link>
        </div>
    )
}