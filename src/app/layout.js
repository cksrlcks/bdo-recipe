import React from "react";
import Finder from "../component/Finder";
import SWRConfigContext from "../provider/SWRConfigContext";
import AuthContext from "../provider/Auth";
import Nav from "../component/Nav";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

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
                    <AuthContext>
                        <SWRConfigContext>
                            <Finder />
                            <main className="container">
                                <Nav />
                                {children}
                            </main>
                        </SWRConfigContext>
                    </AuthContext>
                </div>
            </body>
        </html>
    );
}
