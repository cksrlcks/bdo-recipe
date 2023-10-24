import { Noto_Sans_KR } from "next/font/google";
import Finder from "../component/Finder";
import React from "react";
import ItemProvder from "../context/ItemProvider";
import SwrWrapper from '../component/SwrWrapper'
import "./globals.css";
import Link from "next/link";
const notoSans = Noto_Sans_KR({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
});

export const metadata = {
    title: "검은사막 - 나의 레시피",
    description: "검은사막 - 레시피",
};

export default async function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body className={notoSans.className}>
                <div id="app">
                    <SwrWrapper>
                    <ItemProvder>
                        <Finder />
                        <main className="container">
                            <div className="home-bar">
                                <Link href="/" className="home-icon">
                                    홈
                                </Link>
                            </div>
                            {children}
                        </main>
                    </ItemProvder>
                    </SwrWrapper>
                </div>
            </body>
        </html>
    );
}
