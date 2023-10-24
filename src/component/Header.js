"use client";
import React, { useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
RiCloseFill
export default function Header({ sw, setSw }) {
    return (
        <header className="header">
            <div className="search">
                <input type="text" className="bd" placeholder="검색어를 입력해주세요" value={sw} onChange={(e) => setSw(e.target.value)} />
                {sw && <button type="button" className="reset-btn" onClick={() => setSw('')}><RiCloseFill/></button>}
            </div>
        </header>
    );
}
