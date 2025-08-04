import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { userId } = await auth();

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Find the user in your database
        const dbUser = await prisma.user.findUnique({
            where: {
                clerkId: userId
            },
            select: {
                id: true
            }
        });

        if (!dbUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Get user's questions
        const questions = await prisma.question.findMany({
            where: {
                authorId: dbUser.id
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        return NextResponse.json({ questions });
    } catch (error) {
        console.error("Error fetching user questions:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}