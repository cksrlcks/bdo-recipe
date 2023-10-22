"use client";
import Link from "next/link";
import React from "react";

export default function List({ list }) {
    return (
        <div className="finder-list-wrapper">
            {list.map((item) => {
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
