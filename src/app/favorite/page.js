"use client";
import React from "react";
import useMe from "../../hooks/useMe";
import useSWR from "swr";
import ItemIcon from "../../component/ItemIcon";
import Item from "../../component/Item";
import { RiHeartFill } from "react-icons/ri";

export default function page() {
    const { data: recipes } = useSWR("/api/recipe");
    const { me, isLoading, setLike } = useMe();
    const deleteLike = (recipeId) => {
      setLike(recipeId, false)
    }
    return (
        <div>
            <div className="card-list-title">나의 즐겨찾기 페이지</div>
            <div>
                {!me && !isLoading && <div className="ment">오른쪽 아래 자물쇠 버튼을 눌러서 로그인</div>}
                {isLoading && <div className="ment">사용자 정보를 가져오는중...</div>}
                {me?.like.length == 0 && <div className="ment">즐겨찾기 된 레시피가 없어요</div>}
                <div className="card-list">
                    {me?.like.map((likeItem, idx) => {
                        const data = recipes?.filter((item) => item.id == likeItem)[0];
                        return (
                            <div className="recipe-card" key={idx}>
                                <button type="button" className="tool-btn favorite circle on" onClick={() => deleteLike(data.id)}>
                                    <RiHeartFill />
                                </button>
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
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
