"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";

interface Question {
    id: string;
    question: string;
    authorId: string;
    createdAt: string;
}

export default function RegisterUser() {
    const [question, setQuestion] = useState("");
    const [questions, setQuestions] = useState<Question[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fetch questions on component mount
    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        try {
            const response = await fetch('/api/questions');
            if (response.ok) {
                const data = await response.json();
                setQuestions(data);
            }
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!question.trim()) return;

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question: question.trim() }),
            });

            if (response.ok) {
                setQuestion(""); // Clear the input
                fetchQuestions(); // Refresh the questions list
            }
        } catch (error) {
            console.error('Error creating question:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

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
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-black to-zinc-400 mb-6">
                        Share Your Questions
                    </h1>
                    <p className="text-xl text-zinc-700 max-w-2xl mx-auto leading-relaxed">
                        Ask anything you want to know. Get honest, anonymous feedback from real people.
                    </p>
                </div>

                {/* Question Form */}
                <div className="max-w-2xl mx-auto mb-16">
                    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                        <div className="mb-6">
                            <label className="block text-lg font-semibold text-gray-800 mb-3">
                                What would you like to ask?
                            </label>
                            <div className="flex gap-4">
                                <Input
                                    type="text"
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                    placeholder="e.g., How was your experience with our service?"
                                    className="flex-1 h-12 text-base rounded-xl border-2 border-gray-200 focus:border-black transition-colors"
                                />
                                <SignedIn>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting || !question.trim()}
                                        className="h-12 px-8 bg-gradient-to-r from-black to-zinc-600 hover:from-zinc-800 hover:to-zinc-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Asking..." : "Ask Question"}
                                    </Button>
                                </SignedIn>
                                <SignedOut>
                                    <SignUpButton mode="modal">
                                        <button className="h-12 px-8 bg-gradient-to-r from-black to-zinc-600 hover:from-zinc-800 hover:to-zinc-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                                            Ask Question
                                        </button>
                                    </SignUpButton>
                                </SignedOut>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Questions Display */}
                {questions.length > 0 && (
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-black to-zinc-600">
                            Recent Questions
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {questions.map((question, index) => (
                                <Link
                                    key={question.id}
                                    href={`/question/${question.id}`}
                                    >
                                <div
                                    key={question.id}
                                    className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                    style={{
                                        transform: `rotate(${(index % 3 - 1) * 2}deg)`,
                                    }}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-gradient-to-r from-black to-zinc-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-800 font-medium leading-relaxed">
                                            {question.question}
                                        </p>
                                    </div>
                                </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {questions.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">💭</div>
                        <p className="text-xl text-zinc-600">
                            No questions yet. Be the first to ask something!
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
                <p className="text-sm font-medium text-gray-700">✨ Keep asking!</p>
            </div>
            <div className="absolute bottom-32 right-12 bg-white shadow-lg px-4 py-3 rounded-2xl rotate-[-5deg] opacity-60 hover:opacity-100 transition-all duration-300">
                <p className="text-sm font-medium text-gray-700">🎯 Perfect timing</p>
            </div>
        </div>
    )
}