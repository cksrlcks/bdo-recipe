"use client";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Link from "next/link";
import ItemIcon from '../component/ItemIcon'

export default function List({ sw, setSw }) {
    const { data, isLoading, error } = useSWR("/api/recipe");
    const [list, setList] = useState(data ?? []);
    const handleSearch = () => {
        if(window.matchMedia("screen and (max-width: 1200px)").matches){
            setSw('')
        }
    }
    useEffect(() => {
        data && setList(data);
    }, [data]);
    const filteredList = sw ? list.filter((item) => item.name.includes(sw)) : list;
    return (
        <div className={`finder-list-wrapper ${sw.length ? 'on': ''}`}>
            {isLoading && <div className="loading">리스트 가져오는중...</div>}
            {!isLoading && !filteredList.length && <div className="loading">검색결과가 없습니다.</div>}
            {filteredList.map((item) => {
                return (
                    <Link key={item.id} href={`/recipe/${item.id}`} className="finder-item" onClick={handleSearch}>
                        <ItemIcon url={item.iconUrl} width={40} height={40} name={item.name}/>
                        {item.name}
                    </Link>
                );
            })}
        </div>
    );
}
