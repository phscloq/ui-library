'use client'
import Pathway from "@/app/components/pathway"
import { useState } from "react"
import FormComponent from "./form"
import TabSwitch from "@/app/components/tab-switch"
import Tips from "@/app/components/tips"
import { CodeBlock } from "@/app/components/code-block"

export default function Form(){
const code = `<div className=' mx-auto w-full  max-w-md space-y-2 bg-white  dark:bg-slate-600 border border-slate-300  dark:text-hite '>

          {/* Form Title */}
          <div className="flex flex-col p-6 space-y-1  justify-center items-center">
            <h1 className="whitespace-nowrap tracking-tight text-2xl font-bold">Login</h1>
            <h3 className="text-sm text-muted-foreground">Enter your email and password to access your account</h3>
          </div>
          <form className='flex flex-col gap-2  px-6 py-8'>  
            <div className='flex flex-col gap-3'>
              <label className='text-sm font-medium leading-none' htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required 
              className='rounded-md h-10 px-3 text-black bg-gray-200 '/>
            </div>
            <div className='flex flex-col gap-3 mt-3'>
              <label className='text-sm font-medium leading-none' htmlFor="password">Password:</label>
              <input id="password" name="password" type="password" required 
              className='h-10 px-3 text-black bg-gray-200 
              mb-2 rounded-md'/>
            </div>
            <div className='flex gap-6'>
              <button /* formAction={login} */
              className=' bg-orange-600 hover:bg-orange-700 dark:bg-slate-200 text-white font-bold dark:text-black px-3 py-1 rounded-md flex-1
              dark:hover:bg-slate-300  dark:active:bg-slate-500 dark:active:text-slate-100
                h-10'
              >
              Log in
              </button>    
            </div>
              
              
          
              
          </form>
          <div className='pl-6 py-2'>
            <Link href="/sign-up" className='text-sm hover:underline'>Don't have an account? Sign up</Link>
          </div>

      </div>`;
const [preview, setPreview] = useState(true)
    return (
        <div className="">
            <Pathway page="form"/>
                    
            <h1 className="text-2xl mb-8">Form</h1>
            <div className="flex gap-1 mb-4">
                <p className=" font-medium">Purpose:</p>
                <p>The Form component is...</p>    
            </div>
            <div>
                <TabSwitch preview={preview} setPreview={setPreview} />
                
                {preview ? <FormComponent /> :  <CodeBlock code={code} language="tsx" filename="form.tsx"/>}
            </div>
            <Tips>
                <li>Add your login action to the button&apos;s formSubmit property.</li>
                <li>Add link path to the Link component.</li>
                <li>You need to set the parent div css that form component will be in.</li>
            </Tips>
            
            
        </div>
    )
}
