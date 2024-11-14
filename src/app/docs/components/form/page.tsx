'use client'
import Pathway from "@/app/components/pathway"
import { useState } from "react"
import FormComponent from "./components/form"
import TabSwitch from "@/app/components/tab-switch"
import CodePreview from "@/app/components/code-preview"

export default function Switch(){
const code = `<div className=' min-h-[100dvh]  bg-slate-900 flex flex-col justify-center items-center'>
    <div className='mx-auto w-full  max-w-md space-y-2 bg-slate-600 border border-slate-300  text-slate-200'>
        <div className="flex flex-col p-6 space-y-1">
            <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">Login</h3>
            <p className="text-sm text-muted-foreground">Enter your email and password to access your account</p>
        </div>
        <form className='flex flex-col gap-2  px-6 py-8'>  
            <div className='flex flex-col gap-3'>
                <label className='text-sm font-medium leading-none' htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required 
                className='rounded-sm h-10 px-3'/>
            </div>
            <div className='flex flex-col gap-3'>
                <label className='text-sm font-medium leading-none' htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required 
                className='h-10 px-3
                mb-2 rounded-sm'/>
            </div>
            <div className='flex gap-6'>
                <button /* formAction={login} import login from action.ts file */
                className='bg-slate-200 text-black px-3 py-1 rounded-md flex-1
                hover:bg-slate-300  active:bg-slate-500 active:text-slate-100
                h-10
                '
                >Log in
                </button>

                <button /* formAction={signup} import signup from action.ts file */
                className='bg-slate-200 text-black px-3 py-1 rounded-md flex-1
                h-10
                hover:bg-slate-300  active:bg-slate-500 active:text-slate-100'
                >Sign up
                </button>
            </div>  
        </form>
    </div>
</div>`;
const [preview, setPreview] = useState(true)
    return (
        <div className="">
            <Pathway page="form"/>
                    
            <h1 className="text-2xl mb-8">Switch</h1>
            <div className="flex gap-1 mb-4">
                <p className=" font-medium">Purpose:</p>
                <p>The Form component is...</p>    
            </div>
            <div>
                <TabSwitch preview={preview} setPreview={setPreview} />
                
                {preview ? <FormComponent /> :  <CodePreview>{code}</CodePreview>}
            </div>
            
            
        </div>
    )
}
