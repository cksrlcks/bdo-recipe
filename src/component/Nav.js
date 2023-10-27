"use client";
import React from "react";
import NavLink from "../component/NavLink";
import { signIn, signOut } from "next-auth/react";
import useMe from "../hooks/useMe";
import { RiHomeSmile2Fill, RiHeartFill, RiQuestionLine, RiLock2Fill } from "react-icons/ri";

export default function Nav() {
    return (
        <nav className="nav">
            <div className="nav-inner">
                <NavLink href="/">
                    <RiHomeSmile2Fill />
                </NavLink>
                <NavLink href="/favorite">
                    <RiHeartFill />
                </NavLink>
                <NavLink href="/tip">
                    <RiQuestionLine />
                </NavLink>
                <AvatarButton />
            </div>
        </nav>
    );
}

function AvatarButton() {
    const { me, isLoading } = useMe();

    if (me) {
        return (
            <div className="avatar">
                <div className="tooltip">
                    <button type="button" onClick={() => signOut()}>
                        로그아웃
                    </button>
                </div>
                <figure className="frame">
                    <img src={me.image ?? undefined} alt="me" />
                </figure>
            </div>
        );
    } else {
        if (isLoading) {
            return <div className="loader"></div>;
        }
        return (
            <button type="button" onClick={() => signIn("google")}>
                <RiLock2Fill />
            </button>
        );
    }
}
