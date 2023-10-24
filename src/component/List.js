"use client";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Link from "next/link";

export default function List({ sw }) {
    const { data, isLoading, error } = useSWR("/api/recipe");
    const [list, setList] = useState(data ?? []);
    useEffect(() => {
        data && setList(data);
    }, [data]);
    const filteredList = sw ? list.filter((item) => item.name.includes(sw)) : list;
    return (
        <div className="finder-list-wrapper">
            {isLoading && <div className="loading">리스트 가져오는중...</div>}
            {filteredList.map((item) => {
                return (
                    <Link key={item.id} href={`/recipe/${item.id}`} className="finder-item">
                        <img src={`https://bdocodex.com${item.iconUrl}`} alt="" />
                        {item.name}
                    </Link>
                );
            })}
        </div>
    );
}
