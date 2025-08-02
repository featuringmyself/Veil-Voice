import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
    const { questionId, answer } = await req.json()
    
    if (!questionId || !answer) {
        return NextResponse.json(
            { error: "Missing required fields: questionId and answer" },
            { status: 400 }
        )
    }
    
    try {
        const newAnswer = await prisma.answer.create({
            data: {
                questionId: parseInt(questionId),
                answer
            }
        })
        console.log(newAnswer);
        
        return NextResponse.json(newAnswer, { status: 201 })
    } catch (error) {
        console.error("Error creating answer:", error);
        return NextResponse.json(
            { error: "Failed to create answer", details: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        )
    }
}
