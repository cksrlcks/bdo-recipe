"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import ReciepCard from "../../../component/ReciepCard";
import PageTitle from "../../../component/PageTitle";

export default function page({ params }) {
    const { data } = useSWR("/api/recipe");
    const [subItems, setSubItems] = useState([]);

    useEffect(() => {
        data && setSubItems((prev) => [data.filter((item) => item.id == params.id)[0]]);
    }, [data]);

    return (
        <>
            <PageTitle>{subItems[0] && `${subItems[0].name} 하위 재료 제작 레시피`}</PageTitle>
            {data && (
                <div className="card-list">
                    {subItems.map((item, idx) => (
                        <ReciepCard data={item} setSubItems={setSubItems} key={idx} />
                    ))}
                </div>
            )}
        </>
    );
}
