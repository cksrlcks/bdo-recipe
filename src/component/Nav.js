"use client";
import React from "react";
import NavLink from "../component/NavLink";
import { useSession, signIn, signOut } from "next-auth/react";
import { RiHomeSmile2Fill, RiHeartFill, RiQuestionLine, RiLock2Fill } from "react-icons/ri";

export default function Nav() {
    const { data: session } = useSession(); //세션 정보를 가져옴
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
            {session ? (
                <div className="avatar">
                    <div className="tooltip">
                        <button type="button" onClick={() => signOut()}>로그아웃</button>
                    </div>
                    <figure className="frame">
                        <img src={session.user.image ?? undefined} alt="me"/>
                    </figure>
                </div>
            ) : (
                <button type="button" onClick={() => signIn("google")}>
                    <RiLock2Fill />
                </button>
            )}
        </nav>
    );
}
