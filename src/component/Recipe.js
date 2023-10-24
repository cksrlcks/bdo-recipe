"use client";
import React, { useEffect, useState } from "react";
import { useItem } from "../context/ItemContext";
import Link from "next/link";
import useSWR from 'swr'

const getLink = (array, name) => {
    return array.filter((item) => item.name == name)[0]?.id;
};

export default function Recipe({ data }) {
    return (
        <div>
            {data && <>
                <div>{data.name} 제작 레시피</div>
                <br />
                <hr />
                <br />
                <ul>
                    {data.sub.ingredients.map((item, idx) => (
                        <Item name={item.name} quantity={item.quantity} key={idx} />
                    ))}
                </ul>
                <br />
                <hr />
                <br />
                <Link href={`/recipes/${data.id}`}>추가제작 한번에 보기</Link>
                </>}
           
        </div>
    );
}

function Item({ name, quantity }) {
    const {data:allDatas } = useSWR('/api/recipe')
    const link = getLink(allDatas, name);

    if (!name) return "";

    if (link) {
        return (
            <li className="font-bold underline">
                <Link href={`/recipe/${link}`} className="underline">
                    {name}
                </Link>{" "}
                x {quantity}
            </li>
        );
    }
    return (
        <li>
            {name} x {quantity}
        </li>
    );
}
