import Cheerio from "cheerio";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const res = await fetch(`https://bdocodex.com/tip.php?id=recipe--${id}&l=kr`, {
        headers: {
            "Content-Type": "text/html; charset=UTF-8",
            cache: "no-cache",
        },
    });
    const data = await res.text();
    const result = [];
    const $ = Cheerio.load(data);
    const name = $("#item_name").text();
    const lvl = $("td>span").eq(3).text();
    const category = $(".yellow_text").slice(0).eq(0).text();
    const qtty1 = $("a.qtooltip").slice(0).eq(0).text().trim().padStart(1, 1);
    const mats1 = $("a.qtooltip").slice(0).eq(1).text().trim().padStart(1, 1);
    const qtty2 = $("a.qtooltip").slice(0).eq(2).text().trim().padStart(1, 1);
    const mats2 = $("a.qtooltip").slice(0).eq(3).text().trim().padStart(1, 1);
    const qtty3 = $("a.qtooltip").slice(0).eq(4).text().trim().padStart(1, 1);
    const mats3 = $("a.qtooltip").slice(0).eq(5).text().trim().padStart(1, 1);
    const qtty4 = $("a.qtooltip").slice(0).eq(6).text().trim().padStart(1, 1);
    const mats4 = $("a.qtooltip").slice(0).eq(7).text().trim().padStart(1, 1);
    const qtty5 = $("a.qtooltip").slice(0).eq(8).text().trim().padStart(1, 1);
    const mats5 = $("a.qtooltip").slice(0).eq(9).text().trim().padStart(1, 1);
    if (mats4 == name) {
        result.push({
            lvl: lvl,
            category: category,
            name: name,
            ingredients: [
                { name: mats1, quantity: qtty1 },
                { name: mats2, quantity: qtty2 },
                { name: mats3, quantity: qtty3 },
            ],
        });
    } // 3 items materials
    else if (mats5 == name) {
        result.push({
            lvl: lvl,
            category: category,
            name: name,
            ingredients: [
                { name: mats1, quantity: qtty1 },
                { name: mats2, quantity: qtty2 },
                { name: mats3, quantity: qtty3 },
                { name: mats4, quantity: qtty4 },
            ],
        });
    } // 4 items materials
    else {
        result.push({
            lvl: lvl,
            category: category,
            name: name,
            ingredients: [
                { name: mats1, quantity: qtty1 },
                { name: mats2, quantity: qtty2 },
                { name: mats3, quantity: qtty3 },
                { name: mats4, quantity: qtty4 },
                { name: mats5, quantity: qtty5 },
            ],
        });
    } // 5 items materials
    return Response.json(result[0]);
}
