"use client";
import Image from "next/image";
import React from "react";

export default function Home() {
    return (
        <div className="home">
            <figure className="logo">
                <Image src="/img/logo.png" width={1500} height={1261} alt="bdo recipe"/>
            </figure>
        </div>
    );
}
