"use client";
import React from "react";
import useSWR from "swr";
import useMe from "../../../hooks/useMe";
import ReciepCard from "../../../component/ReciepCard";
import PageTitle from "../../../component/PageTitle";
import { RiHeartFill, RiAddCircleFill } from "react-icons/ri";
import Link from "next/link";

export default function page({ params }) {
    const { data:allList } = useSWR("/api/recipe");
    const { me, isLoading, setLike } = useMe();
    const data = allList?.filter((item) => item.id == params.id)[0];
    const like = me?.like?.includes(data.id);
    const handleLike = () => {
        if (isLoading) {
            return alert("정보를 가져오는중입니다.");
        }
        if (!me) {
            return alert("로그인이 필요합니다.");
        }
        setLike(data.id, !like);
    };
    return (
        <>
            {data && (
                <>
                    <PageTitle>{data.name} 제작 레시피</PageTitle>
                    <div className="tool-bar">
                        <button type="button" className={`tool-btn favorite ${like ? "on" : ""}`} onClick={handleLike}>
                            <RiHeartFill /> <span>즐겨찾기</span>
                        </button>
                        <Link href={`/recipes/${data.id}`} className="tool-btn detail">
                            <RiAddCircleFill /> <span>추가제작 한번에 보기</span>
                        </Link>
                    </div>
                    <ReciepCard data={data} />
                </>
            )}
        </>
    );
}
