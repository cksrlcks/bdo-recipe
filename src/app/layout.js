import { Noto_Sans_KR } from "next/font/google";
import Finder from "../component/Finder";
import React from "react";
import Cheerio from "cheerio";
import ItemProvder from "../context/ItemProvider";
import "./globals.css";
const notoSans = Noto_Sans_KR({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
});

export const metadata = {
    title: "검은사막 - 나의 레시피",
    description: "검은사막 - 레시피",
};
const fetchAllData = async () => {
    const res = await fetch("https://bdocodex.com/query.php?a=recipes&type=alchemy&l=kr", {
        headers: {
            "Content-Type": "application/json",
            cache: "force-cache",
        },
    });

    const data = await res.json();
    const formatted = data.aaData.map((item) => {
        return {
            id: item[0],
            name: Cheerio.load(item[2]).text(),
            iconUrl: Cheerio.load(item[1])
                .text()
                .match(/(?<=src\=")(.*?)(?=\")/g),
        };
    });

    return formatted;
};

export default async function RootLayout({ children }) {
    const data = await fetchAllData();
    return (
        <html lang="ko">
            <body className={notoSans.className}>
                <div id="app">
                    <ItemProvder>
                        <Finder initialData={data} />
                        <main className="container">{children}</main>
                    </ItemProvder>
                </div>
            </body>
        </html>
    );
}
