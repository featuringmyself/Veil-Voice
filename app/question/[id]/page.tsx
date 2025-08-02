import prisma from "@/lib/prisma";
import Form from 'next/form'
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AnswerQuestion({ params }: PageProps) {
  const { id } = await params;
  const qId = parseInt(id);

  if (isNaN(qId)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-lg p-12 border border-gray-100 text-center max-w-md">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-black to-zinc-400 mb-4">
            Invalid Question ID
          </h1>
          <p className="text-zinc-700 mb-6">The question ID you provided is not valid.</p>
          <Link
            href="/register-user"
            className="inline-block bg-gradient-to-r from-black to-zinc-600 hover:from-zinc-800 hover:to-zinc-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Browse Questions
          </Link>
        </div>
      </div>
    );
  }

  const question = await prisma.question.findUnique({
    where: {
      id: qId
    }
  });

  if (!question) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-lg p-12 border border-gray-100 text-center max-w-md">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-black to-zinc-400 mb-4">
            Question Not Found
          </h1>
          <p className="text-zinc-700 mb-6">The question you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link
            href="/register-user"
            className="inline-block bg-gradient-to-r from-black to-zinc-600 hover:from-zinc-800 hover:to-zinc-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Browse Questions
          </Link>
        </div>
      </div>
    );
  }

  async function submitAnswer(formData: FormData) {
    'use server'

    const answer = formData.get('answer') as string;
    const questionId = formData.get('questionId') as string;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/answers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questionId,
          answer
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit answer');
      }

      const result = await response.json();
      console.log('Answer submitted successfully:', result);
    } catch (error) {
      console.error('Error submitting answer:', error);
      throw error; // Re-throw to let Next.js handle it
    }
  }

  const answers = await prisma.answer.findMany({
    where: {
      questionId: qId
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image src={logo} alt="logo" width={40} height={40} />
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-zinc-600">
            Veil Voice
          </span>
        </Link>
        <Link
          href="/register-user"
          className="text-zinc-700 hover:text-black font-medium transition-colors"
        >
          ← Back to Questions
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Question Display */}
        <div className="text-center mb-16">
          <div className="text-4xl mb-6">💭</div>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-black to-zinc-400 mb-8 leading-tight">
            {question.question}
          </h1>
          <p className="text-xl text-zinc-700 max-w-2xl mx-auto">
            Share your honest thoughts anonymously. Your feedback matters.
          </p>
        </div>

        {/* Answer Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <Form action={submitAnswer} className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <input type="hidden" name="questionId" value={qId} />
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-800 mb-3">
                Your Answer
              </label>
              <div className="flex gap-4">
                <Input
                  type="text"
                  name="answer"
                  placeholder="Share your thoughts..."
                  className="flex-1 h-12 text-base rounded-xl border-2 border-gray-200 focus:border-black transition-colors"
                  required
                />
                <Button
                  type="submit"
                  className="h-12 px-8 bg-gradient-to-r from-black to-zinc-600 hover:from-zinc-800 hover:to-zinc-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit Answer
                </Button>
              </div>
            </div>
          </Form>
        </div>

        {/* Answers Display */}
        {answers.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-black to-zinc-600">
              Anonymous Responses ({answers.length})
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {answers.map((answer, index) => (
                <div
                  key={answer.id}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    transform: `rotate(${(index % 3 - 1) * 2}deg)`,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-black to-zinc-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-800 font-medium leading-relaxed">
                      {answer.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {answers.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🤔</div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-zinc-600 mb-4">
              No Responses Yet
            </h3>
            <p className="text-xl text-zinc-600">
              Be the first to share your thoughts on this question!
            </p>
          </div>
        )}
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 bg-white shadow-lg px-4 py-3 rounded-2xl rotate-[-8deg] opacity-60 hover:opacity-100 transition-all duration-300">
        <p className="text-sm font-medium text-gray-700">💡 Great question!</p>
      </div>
      <div className="absolute top-32 right-16 bg-white shadow-lg px-4 py-3 rounded-2xl rotate-[6deg] opacity-60 hover:opacity-100 transition-all duration-300">
        <p className="text-sm font-medium text-gray-700">🤔 Interesting...</p>
      </div>
      <div className="absolute bottom-20 left-20 bg-white shadow-lg px-4 py-3 rounded-2xl rotate-[12deg] opacity-60 hover:opacity-100 transition-all duration-300">
        <p className="text-sm font-medium text-gray-700">✨ Share honestly!</p>
      </div>
      <div className="absolute bottom-32 right-12 bg-white shadow-lg px-4 py-3 rounded-2xl rotate-[-5deg] opacity-60 hover:opacity-100 transition-all duration-300">
        <p className="text-sm font-medium text-gray-700">🎯 Your voice matters</p>
      </div>
    </div>
  );
}
