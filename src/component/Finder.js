"use client";
import React, { useEffect, useState } from "react";
import { useItem } from "../context/ItemContext";
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
