"use client";
import React from "react";
import useMe from "../../hooks/useMe";
import useSWR from "swr";
import PageTitle from "../../component/PageTitle";
import ReciepCard from "../../component/ReciepCard";

export default function page() {
    const { data: recipes } = useSWR("/api/recipe");
    const { me, isLoading, setLike } = useMe();
    return (
        <>
            <PageTitle>나의 즐겨찾기 페이지</PageTitle>
            <>
                {!me && !isLoading && <div className="ment">오른쪽 아래 자물쇠 버튼을 눌러서 로그인</div>}
                {isLoading && <div className="ment">사용자 정보를 가져오는중...</div>}
                {me?.like.length == 0 && <div className="ment">즐겨찾기 된 레시피가 없어요</div>}
                <div className="card-list">
                    {me?.like.map((likeItem, idx) => {
                        const data = recipes?.filter((item) => item.id == likeItem)[0];
                        return <ReciepCard data={data} key={idx} setLike={setLike} />;
                    })}
                </div>
            </>
        </>
    );
}
