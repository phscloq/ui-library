'use client'
import React, { useState } from 'react';
import Dialog from './components/dialog';

export default function MyComponent() {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
   <>
      <button className='bg-slate-400 p-2 rounded-md text-slate-50 font-normal' onClick={()=>handleOpen}>Open Dialog</button>
      <Dialog isOpen={isOpen} onClose={handleClose}>
      </Dialog>
    </>
  );
}