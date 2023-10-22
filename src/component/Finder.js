"use client";
import React, { useEffect, useState } from "react";
import { useItem } from "../context/ItemContext";
import Header from "./Header";
import List from "./List";

export default function Finder({ initialData }) {
    const { setAllDatas } = useItem();
    useEffect(() => {
        setAllDatas((prev) => initialData);
    }, []);
    const [sw, setSw] = useState("");
    const filteredList = sw ? initialData.filter((item) => item.name.includes(sw)) : initialData;

    return (
        <div className="finder">
            <Header sw={sw} setSw={setSw} />
            <List list={filteredList} />
        </div>
    );
}
