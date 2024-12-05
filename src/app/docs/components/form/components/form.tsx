import ComponentParent from "@/app/components/component-parent";
export default function FormComponents(){
    return (
      <ComponentParent className=" h-[480px]">
        <div className=' mx-auto w-full  max-w-md space-y-2 bg-white  dark:bg-slate-600 border border-slate-300  dark:text-hite '>

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
            <p className='text-sm hover:underline hover:cursor-pointer'>Don't have an account? Sign up</p>
          </div>

      </div>
     </ComponentParent>
    )
}