import { currentUser } from "@clerk/nextjs/server";
import prisma from "./prisma";

export async function syncUser() {
    const clerkUser = await currentUser();

    if(!clerkUser)
        return null;

    let user = await prisma.user.findUnique({
        where: {clerkId: clerkUser.id}
    });

    if(!user) {
        user = await prisma.user.create({
            data:{
                clerkId: clerkUser.id
            }
        })
    }
    return user;
}

export async function getCurrentUser(){
    return await syncUser();
}
