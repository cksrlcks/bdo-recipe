import React from "react";
import ItemIcon from "./ItemIcon";
import Item from "./Item";
import { RiHeartFill } from "react-icons/ri";

export default function ReciepCard({ data, setSubItems, setLike }) {
    return (
        <div className="recipe-card">
            {setLike && (
                <button type="button" className="tool-btn favorite circle on" onClick={() => setLike(data.id, false)}>
                    <RiHeartFill />
                </button>
            )}
            <figure className="recipe-icon">
                <ItemIcon url={data.iconUrl} name={data.name} width={30} height={30} />
            </figure>
            <div className="recipe-title">{data.name}</div>
            <ul>
                {data.sub.map((item, idx) => (
                    <Item name={item.name} quantity={item.quantity} iconUrl={item.url} key={idx} setSubItems={setSubItems} />
                ))}
            </ul>
        </div>
    );
}
