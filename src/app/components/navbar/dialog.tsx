'use client'

import { useContext, useEffect, useState } from "react";
import { DialogProps } from "@/app/types";
import { MobileMenuContext } from "@/app/contexts";

export function DialogComponent({ children }: {children: React.ReactNode}){
  const {onCloseMobileNavMenu, openMobileNavMenu, mobileMenuOpen} = useContext(MobileMenuContext);
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = ''; // Enable scroll
    }
    return () => {
      document.body.style.overflow = ''; // Cleanup on unmount
    };
  }, [mobileMenuOpen]);

  if (!mobileMenuOpen) return null; // Don't render if not open
  
  return (
    <>
    {/* Background overlay */}
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40"/>
    {/* Dialog content */}
    <div className="fixed inset-0 flex items-center justify-center  z-50 px-6"
     onClick={onCloseMobileNavMenu}>
      <div className="bg-slate-100 dark:bg-slate-600 dark:shadow-slate-800 fixed  w-4/5  p-4 rounded-md  top-4 right-4
              shadow-lg  "
      onClick={(e)=>e.stopPropagation()} // Prevent closing when clicking the content
      >
        {/* Close button */}
        <button className="absolute top-2 right-2 " onClick={onCloseMobileNavMenu}>
          &times;
        </button>
        {/* Modal content */}
        {children}
      </div>
    </div>
  </>
  )
}