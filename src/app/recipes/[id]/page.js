"use client";
import React, { useEffect, useState } from "react";
import { useItem } from "../../../context/ItemContext";

const getLink = (array, name) => {
    return array.filter((item) => item.name == name)[0]?.id;
};

async function getRecipes(id, setSubItems, setLoading) {
    if (setLoading) setLoading(true);
    const res = await fetch(`/api/recipe?id=${id}`);
    const data = await res.json();
    setSubItems((prev) => {
        if (setLoading) setLoading(false);
        if (!prev.filter((item) => item.name == data.name).length) {
            return [...prev, data];
        } else {
            return prev;
        }
    });
}

export default function page({ params }) {
    const rootId = params.id;
    const [subItems, setSubItems] = useState([]);

    useEffect(() => {
        getRecipes(rootId, setSubItems);
    }, []);
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
    const [isLoading, setLoading] = useState(false);
    return (
        <div className="recipe-card">
            <div class="recipe-title">{data.name}</div>
            <ul>
                {data.ingredients.map((item, idx) => (
                    <Item name={item.name} quantity={item.quantity} key={idx} setSubItems={setSubItems} setLoading={setLoading} />
                ))}
            </ul>
            <br />
            {isLoading && <div>하위 재료 로딩중</div>}
        </div>
    );
}

function Item({ name, quantity, setSubItems, setLoading }) {
    const { allDatas } = useItem();
    useEffect(() => {
        const id = allDatas.filter((item) => item.name == name)[0]?.id;
        id && getRecipes(id, setSubItems, setLoading);
    }, []);
    return (
        <li>
            {}
            {name} x {quantity}
        </li>
    );
}
