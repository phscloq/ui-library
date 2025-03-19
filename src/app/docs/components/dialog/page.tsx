'use client'
import React, { useState } from 'react';
import { DialogTrigger } from './dialog';
import Pathway from '@/app/components/pathway';
import TabSwitch from '@/app/components/tab-switch';
import { CodeBlock } from '@/app/components/code-block';

export default function DialogPage() {
  const code = `
  import { useEffect, useState } from "react";
interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export function DialogComponent({ isOpen, onClose, children }: DialogProps){
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = ''; // Enable scroll
    }
    return () => {
      document.body.style.overflow = ''; // Cleanup on unmount
    };
  }, [isOpen]);

  if (!isOpen) return null; // Don't render if not open
  
  return (
    <>
    {/* Background overlay */}
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40"/>
    {/* Dialog content */}
    <div className="fixed inset-0 flex items-center justify-center z-50 px-6"
     onClick={onClose}>
      <div className="bg-slate-100 dark:bg-slate-800 rounded-md p-8 max-w-lg w-full relative"
      onClick={(e)=>e.stopPropagation()} // Prevent closing when clicking the content
      >
        {/* Close button */}
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
          &times;
        </button>
        {/* Modal content */}
        {children}
      </div>
    </div>
  </>
  )
}

export function DialogTrigger(){
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const openDialog = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const onClose = () => {
    console.log('close modal')
    setIsModalOpen(false)
    console.log(isModalOpen)
  };

  return(
  <>
    <div className="w-full bg-slate-400 h-[400px] flex gap-2 justify-center items-center
    rounded-md">
      <button
      className="bg-slate-200 text-black px-3 py-1 rounded-md 
      hover:bg-slate-300  active:bg-slate-500 active:text-slate-100
      "
      onClick={openDialog}
      >
        Click me
      </button> 
    </div>

    <DialogComponent isOpen={isModalOpen} onClose={onClose}>
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-4">Modal Title</h2>
        <p className="text-gray-600 dark:text-slate-300">This is a modal dialog. Click outside to close.</p>
      </div>
    </DialogComponent>
  </>
  )
}
  `;

  const [preview, setPreview] = useState(true)
  return (
    <div className="">
    <Pathway page="dialog"/>
            
    <h1 className="text-2xl mb-8">Dialog</h1>
    <div className="flex gap-1 mb-4">
        <p className=" font-medium">Purpose:</p>
        <p>The Switch component is a versatile and user-friendly element designed to facilitate toggling between two states in your web applications.</p>    
    </div>
    <div>
        <TabSwitch preview={preview} setPreview={setPreview} />
        
        {preview ? <DialogTrigger /> :  <CodeBlock code={code} language="tsx" filename="dialog.tsx"/>}
    </div>
    
    
</div>
  );
}