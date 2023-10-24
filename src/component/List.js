"use client";
import React from "react";
import useSWR from "swr";
import Link from "next/link";

export default function List({ list }) {
    const {data, error} = useSWR('/api/recipe')   
    return (
        <div className="finder-list-wrapper">
            {data?.map((item) => {
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
