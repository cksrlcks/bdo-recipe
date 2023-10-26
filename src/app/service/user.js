import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUser(email) {
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    return user;
}
