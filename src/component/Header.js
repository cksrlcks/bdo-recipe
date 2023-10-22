"use client";
import React, { useEffect, useState } from "react";
export default function Header({ sw, setSw }) {
    return (
        <header className="header">
            <div>
                <input type="text" className="bd" placeholder="검색어를 입력해주세요" value={sw} onChange={(e) => setSw(e.target.value)} />
            </div>
        </header>
    );
}
