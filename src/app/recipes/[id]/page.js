"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

export default function page({ params }) {
    const { data } = useSWR("/api/recipe");
    const [subItems, setSubItems] = useState([]);

    useEffect(() => {
        data && setSubItems((prev) => [data.filter((item) => item.id == params.id)[0]]);
    }, [data]);

    return (
        <div>
            <div className="card-list-title">{subItems[0] && `${subItems[0].name} 하위 재료 제작 레시피`}</div>
            <div className="card-list">
                {subItems.map((item, idx) => (
                    <Card data={item} setSubItems={setSubItems} key={idx} />
                ))}
            </div>
        </div>
    );
}

function Card({ data, setSubItems }) {
    return (
        <div className="recipe-card">
            <figure className="recipe-icon">
                <img src={`https://bdocodex.com/${data.iconUrl[0]}`} alt="icon" />
            </figure>
            <div className="recipe-title">{data.name}</div>
            <ul>
                {data.sub.ingredients.map((item, idx) => (
                    <Item name={item.name} quantity={item.quantity} iconUrl={item.url} key={idx} setSubItems={setSubItems} />
                ))}
            </ul>
        </div>
    );
}

function Item({ name, quantity, iconUrl, setSubItems }) {
    const { data: allDatas } = useSWR("/api/recipe");
    useEffect(() => {
        const data = allDatas.filter((item) => item.name == name)[0];
        data &&
            setSubItems((prev) => {
                if (!prev.filter((item) => item.name == data.name).length) {
                    return [...prev, data];
                } else {
                    return prev;
                }
            });
    }, []);
    return (
        <li>
            <figure className="icon">
                <img src={`https://bdocodex.com/${iconUrl}`} alt="icon" />
            </figure>
            <div className="name">{name}</div>
            <div className="number">{quantity}</div>
        </li>
    );
}
