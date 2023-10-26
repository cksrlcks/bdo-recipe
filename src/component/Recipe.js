"use client";
import React, { useState } from "react";
import useMe from "../hooks/useMe";
import Link from "next/link";
import ItemIcon from "./ItemIcon";
import Item from "../component/Item";

import { RiHeartFill, RiAddCircleFill } from "react-icons/ri";
export default function Recipe({ data }) {
    const { me, isLoading,  setLike } = useMe();
    const like = me?.like?.includes(data.id)
    const handleLike = () => {
        if(isLoading){
            return alert("정보를 가져오는중입니다.");
        }
        if (!me) {
            return alert("로그인이 필요합니다.");
        }
        setLike(data.id, !like)
    };
    return (
        <div>
            {data && (
                <>
                    <div className="card-list-title">{data.name} 제작 레시피</div>
                    <div className="tool-bar">
                        <button type="button" className={`tool-btn favorite ${like ? "on" : ""}`} onClick={handleLike}>
                            <RiHeartFill /> <span>즐겨찾기</span>
                        </button>
                        <Link href={`/recipes/${data.id}`} className="tool-btn detail">
                            <RiAddCircleFill /> <span>추가제작 한번에 보기</span>
                        </Link>
                    </div>
                    <div className="recipe-card">
                        <figure className="recipe-icon">
                            <ItemIcon url={data.iconUrl} name={data.name} width={30} height={30} />
                        </figure>
                        <div className="recipe-title">{data.name}</div>
                        <ul>
                            {data.sub.map((item, idx) => (
                                <Item name={item.name} quantity={item.quantity} iconUrl={item.url} key={idx} />
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}

