import { NextResponse } from "next/server";
import { withSession } from "../../../utill/withSession";
import { getUser } from "../../service/user";

export async function GET() {
    return withSession(async (user) => {
        const data = await getUser(user.email);
        return NextResponse.json(data);
    });
}
