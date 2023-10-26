import { authOptions } from "../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export async function withSession(callback) {
    const session = await getServerSession(authOptions);
    const user = session?.user;

    if (!user) {
        return new Response("Authentication Error", { status: 401 });
    }

    return callback(user);
}
