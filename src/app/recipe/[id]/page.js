"use client";
import React, { useEffect } from "react";
import useSWR from "swr";
import Recipe from "../../../component/Recipe";

export default function page({ params }) {
    const { data } = useSWR("/api/recipe");

    const item = data?.filter((item) => item.id == params.id)[0];
    return <Recipe data={item} id={params.id} />;
}
