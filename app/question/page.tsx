import prisma from "@/lib/prisma"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.png"

export default async function Question() {
    const questions = await prisma.question.findMany({
        where: {
            showOnCommunity: true
        },
        orderBy: {
            createdAt: 'desc'
        },
        select: {
            id: true,
            question: true,
            createdAt: true
        }
    })

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6">
                <Link 
                    href="/" 
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                    <Image src={logo} alt="logo" width={40} height={40} />
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-zinc-600">
                        Veil Voice
                    </span>
                </Link>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-black to-zinc-400 mb-6">
                        Community Questions
                    </h1>
                    <p className="text-xl text-zinc-700 max-w-2xl mx-auto leading-relaxed">
                        Explore questions from our community. Share your thoughts and get honest feedback.
                    </p>
                </div>

                {/* Questions Grid */}
                {questions.length > 0 ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {questions.map((question, index) => (
                            <Link
                                key={question.id}
                                href={`/question/${question.id}`}
                                className="block bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                                style={{
                                    transform: `rotate(${(index % 5 - 2) * 1.5}deg)`,
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-3 h-3 bg-gradient-to-r from-black to-zinc-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold text-gray-800 leading-relaxed mb-4 group-hover:text-black transition-colors">
                                            {question.question}
                                        </h2>
                                        <div className="flex items-center justify-between text-sm text-zinc-500">
                                            <span>Question #{question.id}</span>
                                            <span>
                                                {new Date(question.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="text-8xl mb-6">🤔</div>
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-zinc-600 mb-4">
                            No Questions Yet
                        </h2>
                        <p className="text-xl text-zinc-600 mb-8">
                            Be the first to start a conversation!
                        </p>
                        <Link
                            href="/register-user"
                            className="inline-block bg-gradient-to-r from-black to-zinc-600 hover:from-zinc-800 hover:to-zinc-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Ask a Question
                        </Link>
                    </div>
                )}
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute top-20 left-10 bg-white shadow-lg px-4 py-3 rounded-2xl rotate-[-8deg] opacity-60 hover:opacity-100 transition-all duration-300">
                <p className="text-sm font-medium text-gray-700">💭 Great questions!</p>
            </div>
            <div className="absolute top-32 right-16 bg-white shadow-lg px-4 py-3 rounded-2xl rotate-[6deg] opacity-60 hover:opacity-100 transition-all duration-300">
                <p className="text-sm font-medium text-gray-700">🎯 Join the conversation</p>
            </div>
            <div className="absolute bottom-20 left-20 bg-white shadow-lg px-4 py-3 rounded-2xl rotate-[12deg] opacity-60 hover:opacity-100 transition-all duration-300">
                <p className="text-sm font-medium text-gray-700">✨ Share your thoughts</p>
            </div>
            <div className="absolute bottom-32 right-12 bg-white shadow-lg px-4 py-3 rounded-2xl rotate-[-5deg] opacity-60 hover:opacity-100 transition-all duration-300">
                <p className="text-sm font-medium text-gray-700">🚀 Keep exploring</p>
            </div>
        </div>
    )
}