"use client";
import React, { useRef, useEffect } from "react";
import { RiCloseFill } from "react-icons/ri";
RiCloseFill
export default function Header({ sw, setSw }) {
    const input = useRef();
    useEffect(() => {
        const agent = window.navigator.userAgent;
        let isIos;
        if(agent.toLowerCase().indexOf('iphone') > -1 || agent.toLowerCase().indexOf('ipad') > -1){
            isIos = true;
        }
        if(isIos){
            input.current?.addEventListener('touchstart', (e) => {
                e.stopPropagation();
                input.current.style.transform = 'translateY(-10000px)'
                input.current.focus();
                setTimeout(function () { 
                    input.current.style.transform = 'none'
                }, 100);
            });

            document.body.addEventListener('touchmove', () => {
                if(input.current == document.activeElement){
                    input.current.blur()
                }
            })
        }
    
    }, [input])
    return (
        <header className="header">
            <div className="search">
                <input type="text" className="bd" placeholder="검색어를 입력해주세요" value={sw} onChange={(e) => setSw(e.target.value)} ref={input} />
                {sw && <button type="button" className="reset-btn" onClick={() => setSw('')}><RiCloseFill/></button>}
            </div>
        </header>
    );
}
