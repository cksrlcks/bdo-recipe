import { NextResponse } from "next/server";
import { withSession } from "../../../utill/withSession";
import { setLike } from "../../service/user";

export async function PUT(req) {
    return withSession(async (user) => {
        const {id, like} = await req.json();
        const data = await setLike(user.email, id, like)
        return NextResponse.json(data);
    });
}
