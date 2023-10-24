"use client";
import React from "react";
import Recipe from "../../../component/Recipe";
import useSWR from "swr";

export default function page({ params }) {
    const {data} = useSWR('/api/recipe');
    const item = data?.filter(item => item.id == params.id)[0]
    return <Recipe data={item} id={params.id} />;
}
