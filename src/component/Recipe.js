"use client";
import React, { useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import { RiHeartFill, RiAddCircleFill } from "react-icons/ri";

const getLink = (array, name) => {
    return array.filter((item) => item.name == name)[0]?.id;
};

export default function Recipe({ data }) {
    const [like, setLike] = useState(false);
    console.log(data);
    return (
        <div>
            {data && (
                <>
                    <div className="card-list-title">{data.name} 제작 레시피</div>
                    <div className="tool-bar">
                        <button type="button" className={`tool-btn favorite ${like ? "on" : ""}`} onClick={() => setLike((prev) => !prev)}>
                            <RiHeartFill /> <span>즐겨찾기</span>
                        </button>
                        <Link href={`/recipes/${data.id}`} className="tool-btn detail">
                            <RiAddCircleFill /> <span>추가제작 한번에 보기</span>
                        </Link>
                    </div>
                    <div className="recipe-card">
                        <figure className="recipe-icon">
                            <img src={`https://bdocodex.com/${data.iconUrl[0]}`} alt="icon" />
                        </figure>
                        <div className="recipe-title">{data.name}</div>
                        <ul>
                            {data.sub.ingredients.map((item, idx) => (
                                <Item name={item.name} quantity={item.quantity} iconUrl={item.url} key={idx} />
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}

function Item({ name, quantity, iconUrl }) {
    const { data: allDatas } = useSWR("/api/recipe");
    const link = getLink(allDatas, name);

    if (!name) return "";
    if (link) {
        return (
            <li>
                <figure className="icon">
                    <img src={`https://bdocodex.com/${iconUrl}`} alt="icon" />
                </figure>
                <div className="name">
                    <Link href={`/recipe/${link}`} className="underline">
                        {name}
                    </Link>
                </div>
                <div className="number">{quantity}</div>
            </li>
        );
    }
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
