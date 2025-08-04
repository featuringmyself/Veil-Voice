"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { Switch } from "@/components/ui/switch";

interface Question {
    id: string;
    question: string;
    createdAt: string;
    published: boolean;
    showOnCommunity: boolean;
}

export default function User() {
    const { isLoaded, isSignedIn, user } = useUser();
    const router = useRouter();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isLoaded && !isSignedIn) {
            router.push("/login");
        }
    }, [isLoaded, isSignedIn, router]);

    useEffect(() => {
        if (isLoaded && isSignedIn && user) {
            fetchUserQuestions();
        }
    }, [isLoaded, isSignedIn, user]);

    const fetchUserQuestions = async () => {
        try {
            const response = await fetch('/api/user/questions');
            if (response.ok) {
                const data = await response.json();
                setQuestions(data.questions);
            }
        } catch (error) {
            console.error('Error fetching questions:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateQuestionToggle = async (questionId: string, field: 'published' | 'showOnCommunity', value: boolean) => {
        try {
            const response = await fetch(`/api/questions/${questionId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ [field]: value }),
            });

            if (response.ok) {
                // Update local state
                setQuestions(prev => prev.map(q => 
                    q.id === questionId ? { ...q, [field]: value } : q
                ));
            }
        } catch (error) {
            console.error(`Error updating ${field}:`, error);
        }
    };

    if (!isLoaded || loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
                    <p className="text-lg text-zinc-600">Loading your dashboard...</p>
                </div>
            </div>
        );
    }

    if (!isSignedIn) {
        return null;
    }

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
                    className="px-6 py-2 bg-gradient-to-r from-black to-zinc-600 hover:from-zinc-800 hover:to-zinc-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    Ask New Question
                </Link>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* User Profile Section */}
                <div className="text-center mb-16">
                    <div className="w-24 h-24 bg-gradient-to-br from-black to-zinc-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                            {user?.firstName?.charAt(0) || user?.emailAddresses[0].emailAddress.charAt(0).toUpperCase()}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-black to-zinc-400 mb-4">
                        Welcome back, {user?.firstName || 'User'}!
                    </h1>
                    <p className="text-xl text-zinc-700 max-w-2xl mx-auto">
                        {user?.emailAddresses[0].emailAddress}
                    </p>
                </div>

                {/* Questions Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-black to-zinc-600">
                        Your Questions ({questions.length})
                    </h2>

                    {questions.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {questions.map((question, index) => (
                                <div
                                    key={question.id}
                                    className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
                                    style={{
                                        transform: `rotate(${(index % 3 - 1) * 1.5}deg)`,
                                    }}
                                >
                                    {/* Question Content */}
                                    <div className="flex items-start gap-3 mb-4">
                                        <div className="w-2 h-2 bg-gradient-to-r from-black to-zinc-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <Link 
                                            href={`/question/${question.id}`}
                                            className="text-gray-800 font-medium leading-relaxed line-clamp-4 hover:text-black transition-colors"
                                        >
                                            {question.question}
                                        </Link>
                                    </div>

                                    {/* Date */}
                                    <div className="flex items-center justify-between text-sm text-zinc-500 mb-4">
                                        <span>Asked on</span>
                                        <span className="font-medium">
                                            {new Date(question.createdAt).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </div>

                                    {/* Status Indicators */}
                                    <div className="flex gap-2 mb-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            question.published 
                                                ? 'bg-green-100 text-green-800' 
                                                : 'bg-gray-100 text-gray-600'
                                        }`}>
                                            {question.published ? '✓ Published' : '○ Draft'}
                                        </span>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            question.showOnCommunity 
                                                ? 'bg-blue-100 text-blue-800' 
                                                : 'bg-gray-100 text-gray-600'
                                        }`}>
                                            {question.showOnCommunity ? '👥 Community' : '🔒 Private'}
                                        </span>
                                    </div>

                                    {/* Toggle Controls */}
                                    <div className="space-y-3 pt-3 border-t border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <label className="text-sm font-medium text-gray-700">
                                                    Published
                                                </label>
                                                <p className="text-xs text-gray-500">
                                                    Make question visible to others
                                                </p>
                                            </div>
                                            <Switch
                                                checked={question.published}
                                                onCheckedChange={(checked) => 
                                                    updateQuestionToggle(question.id, 'published', checked)
                                                }
                                                className="data-[state=checked]:bg-black"
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <label className="text-sm font-medium text-gray-700">
                                                    Show in Community
                                                </label>
                                                <p className="text-xs text-gray-500">
                                                    Display in community feed
                                                </p>
                                            </div>
                                            <Switch
                                                checked={question.showOnCommunity}
                                                onCheckedChange={(checked) => 
                                                    updateQuestionToggle(question.id, 'showOnCommunity', checked)
                                                }
                                                className="data-[state=checked]:bg-black"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-6">🤔</div>
                            <h3 className="text-2xl font-bold text-zinc-800 mb-4">No questions yet</h3>
                            <p className="text-xl text-zinc-600 mb-8 max-w-md mx-auto">
                                Start your journey by asking your first question and getting honest feedback.
                            </p>
                            <Link
                                href="/register-user"
                                className="inline-block px-8 py-4 bg-gradient-to-r from-black to-zinc-600 hover:from-zinc-800 hover:to-zinc-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Ask Your First Question
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute top-20 left-10 bg-white shadow-lg px-4 py-3 rounded-2xl rotate-[-8deg] opacity-60 hover:opacity-100 transition-all duration-300 hidden lg:block">
                <p className="text-sm font-medium text-gray-700">📊 Your insights</p>
            </div>
            <div className="absolute top-32 right-16 bg-white shadow-lg px-4 py-3 rounded-2xl rotate-[6deg] opacity-60 hover:opacity-100 transition-all duration-300 hidden lg:block">
                <p className="text-sm font-medium text-gray-700">💭 Keep exploring</p>
            </div>
            <div className="absolute bottom-20 left-20 bg-white shadow-lg px-4 py-3 rounded-2xl rotate-[12deg] opacity-60 hover:opacity-100 transition-all duration-300 hidden lg:block">
                <p className="text-sm font-medium text-gray-700">✨ Great questions!</p>
            </div>
            <div className="absolute bottom-32 right-12 bg-white shadow-lg px-4 py-3 rounded-2xl rotate-[-5deg] opacity-60 hover:opacity-100 transition-all duration-300 hidden lg:block">
                <p className="text-sm font-medium text-gray-700">🎯 Keep asking</p>
            </div>
        </div>
    );
}