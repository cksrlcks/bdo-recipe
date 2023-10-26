import useSWR from 'swr';
import {getLink} from '../utill/Item'
import Link from 'next/link';
import ItemIcon from './ItemIcon';

export default function Item({ name, quantity, iconUrl }) {
    const { data: allDatas } = useSWR("/api/recipe");
    const link = getLink(allDatas, name);

    if (!name) return "";
    if (link) {
        return (
            <li>
                <figure className="icon">
                    <ItemIcon url={iconUrl} name={name} width={30} height={30} />
                </figure>
                <div className="name">
                    <Link href={`/recipe/${link}`} className="underline">
                        {name}
                    </Link>
                </div>
                <div className="number">{quantity}</div>
            </li>
        );
    }
    return (
        <li>
            <figure className="icon">
                <ItemIcon url={iconUrl} name={name} width={30} height={30} />
            </figure>
            <div className="name">{name}</div>
            <div className="number">{quantity}</div>
        </li>
    );
}
