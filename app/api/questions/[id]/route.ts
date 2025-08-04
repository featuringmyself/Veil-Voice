import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/user';

export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { published, showOnCommunity } = await request.json();
        const questionId = parseInt(params.id);

        if (isNaN(questionId)) {
            return NextResponse.json({ error: 'Invalid question ID' }, { status: 400 });
        }

        const user = await getCurrentUser();
        
        if (!user) {
            return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
        }

        // Check if the question belongs to the user
        const existingQuestion = await prisma.question.findUnique({
            where: { id: questionId },
            select: { authorId: true }
        });

        if (!existingQuestion) {
            return NextResponse.json({ error: 'Question not found' }, { status: 404 });
        }

        if (existingQuestion.authorId !== user.id) {
            return NextResponse.json({ error: 'Unauthorized to modify this question' }, { status: 403 });
        }

        // Update the question
        const updatedQuestion = await prisma.question.update({
            where: { id: questionId },
            data: {
                ...(published !== undefined && { published: Boolean(published) }),
                ...(showOnCommunity !== undefined && { showOnCommunity: Boolean(showOnCommunity) })
            }
        });

        return NextResponse.json(updatedQuestion);
    } catch (error) {
        console.error('Error updating question:', error);
        return NextResponse.json({ error: 'Failed to update question' }, { status: 500 });
    }
}