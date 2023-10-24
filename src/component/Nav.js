import React from "react";
import NavLink from '../component/NavLink'
import { RiHomeSmile2Fill, RiHeartFill, RiQuestionLine } from "react-icons/ri";

export default function Nav() {
    return (
        <nav className="nav">
            <NavLink href="/">
                <RiHomeSmile2Fill />
            </NavLink>
            <NavLink href="/favorite">
                <RiHeartFill />
            </NavLink>
            <NavLink href="/tip">
                <RiQuestionLine />
            </NavLink>
        </nav>
    );
}
