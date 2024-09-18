"use client"

import { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
export default function ScrollToTop(){
    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = () => {
        if(window.scrollY > 100){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    return(
        <button className={`fixed bottom-0 right-0 bg-secondary rounded-full p-2 mr-6 mb-[71px] shadow-xl z-50 text-xs text-white cursor-pointer opacity-0 transition-opacity ${isVisible ? 'opacity-100' : ''}`} onClick={scrollToTop}>
            <MdKeyboardArrowUp className="w-8 h-8" />
        </button>
    )
}