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

export async function setLike(email, recipeId, like) {

    const user = await getUser(email);

    let filtered;

    if(like){
        const updateLike = [...user.like, recipeId]
        filtered = [...new Set(updateLike)];
    }else{
        filtered = user.like?.filter(item => item !== recipeId)
    }   

    const updateUser = await prisma.user.update({
        where: {
            email: email,
        },
        data : {
            like : filtered
        }
    });

    return updateUser;
}

