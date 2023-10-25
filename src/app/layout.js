import React from "react";
import Finder from "../component/Finder";
import SWRConfigContext from "../provider/SWRConfigContext";
import AuthContext from "../provider/Auth";
import Nav from "../component/Nav";
import ScrollToTop from '../component/ScrollToTop'
import { Noto_Sans_KR } from "next/font/google";
import "./css/globals.css";

const notoSans = Noto_Sans_KR({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
});

export const metadata = {
    title: "검은사막 - 나의 레시피",
    description: "검은사막 - 레시피",
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
        viewportFit : 'cover'
      },
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
                                <ScrollToTop />
                                {children}
                                <footer className="footer">
                                    <div className="hash-list">
                                        <div className="hash"># 부산에 거주하는 광기의 웹디자이너의 취미작</div>
                                        <div className="hash">
                                            <a href="https://black.inven.co.kr/" target="_blank">
                                                # 검벤 바로가기
                                            </a>
                                        </div>
                                        <div className="hash">
                                            <a href="https://payment.kr.playblackdesert.com/Shop/Coupon/" target="_blank">
                                                # 검사쿠폰등록 바로가기
                                            </a>
                                        </div>
                                    </div>
                                </footer>
                            </main>
                        </SWRConfigContext>
                    </AuthContext>
                </div>
            </body>
        </html>
    );
}
