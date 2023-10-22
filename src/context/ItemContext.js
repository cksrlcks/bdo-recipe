"use client";
import React, { useState, createContext, useContext } from "react";

const ItemContext = createContext();

export function ItemProvider({ children }) {
    const [allDatas, setAllDatas] = useState([]);

    return (
        <ItemContext.Provider value={{ allDatas, setAllDatas }} set>
            {children}
        </ItemContext.Provider>
    );
}

export const useItem = () => useContext(ItemContext);
