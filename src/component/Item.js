import React, {useEffect} from 'react'
import useSWR from "swr";
import Link from "next/link";
import ItemIcon from "./ItemIcon";

const getLink = (array, name) => {
    return array.filter((item) => item.name == name)[0]?.id;
};

export default function Item({ name, quantity, iconUrl, setSubItems }) {
    const { data: allDatas } = useSWR("/api/recipe");
    const link = getLink(allDatas, name);

    useEffect(() => {
        const data = allDatas.filter((item) => item.name == name)[0];
        data &&
            setSubItems &&
            setSubItems((prev) => {
                if (!prev.filter((item) => item.name == data.name).length) {
                    return [...prev, data];
                } else {
                    return prev;
                }
            });
    }, []);

    if (!name) return "";
    return (
        <li>
            <figure className="icon">
                <ItemIcon url={iconUrl} name={name} width={30} height={30} />
            </figure>
            <div className="name">
                {link ? (
                    <Link href={`/recipe/${link}`} className="underline">
                        {name}
                    </Link>
                ) : (
                    name
                )}
            </div>
            <div className="number">{quantity}</div>
        </li>
    );
}
