import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/user';

export async function GET() {
    try {
        const questions = await prisma.question.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return NextResponse.json(questions);
    } catch (error) {
        console.error('Error fetching questions:', error);
        return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { question } = await request.json();
        
        if (!question || !question.trim()) {
            return NextResponse.json({ error: 'Question is required' }, { status: 400 });
        }

        const user = await getCurrentUser();
        
        if (!user) {
            return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
        }

        const newQuestion = await prisma.question.create({
            data: {
                question: question.trim(),
                authorId: user.id
            }
        });

        return NextResponse.json(newQuestion, { status: 201 });
    } catch (error) {
        console.error('Error creating question:', error);
        return NextResponse.json({ error: 'Failed to create question' }, { status: 500 });
    }
}