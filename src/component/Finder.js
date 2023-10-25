"use client";
import React, { useState } from "react";
import Header from "./Header";
import List from "./List";


export default function Finder() {
    const [sw, setSw] = useState("");
    return (
        <div className="finder">
            <Header sw={sw} setSw={setSw} />
            <List sw={sw}/>
        </div>
    );
}
