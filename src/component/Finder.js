"use client";
import React, { useEffect, useState } from "react";
import { useItem } from "../context/ItemContext";
import Header from "./Header";
import List from "./List";


export default function Finder() {
    //const {data, error} = useSWR('/api/recipe')   
    const [sw, setSw] = useState("");
    //const filteredList = sw ? initialData.filter((item) => item.name.includes(sw)) : initialData;

    return (
        <div className="finder">
            <Header sw={sw} setSw={setSw} />
            <List sw={sw}/>
        </div>
    );
}
