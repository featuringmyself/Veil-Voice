# Veil Voice

**100% Anonymous Reviews Platform**

Veil Voice is an open-source platform that enables people to share honest feedback anonymously. Built with modern web technologies, it provides a safe space for authentic reviews without barriers or fear of judgment.

## ✨ Features

- **Anonymous Feedback**: Share honest thoughts without revealing your identity
- **Question Management**: Create, publish, and manage feedback questions
- **Community Driven**: Browse and respond to community questions
- **Real-time Responses**: See anonymous responses in real-time
- **User Authentication**: Secure authentication with Clerk
- **Responsive Design**: Beautiful UI that works on all devices
- **Open Source**: 100% transparent and trustworthy

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- PostgreSQL database
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/featuringmyself/Veil-Voice.git
   cd Veil-Voice
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/veilvoice"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma db push
   
   # (Optional) Seed the database
   npm run seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
veil-voice/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── question/          # Question pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   └── ui/               # UI components
├── lib/                   # Utility functions
│   ├── prisma.ts         # Database client
│   └── user.ts           # User utilities
├── prisma/               # Database schema and migrations
│   └── schema.prisma     # Database schema
├── types/                # TypeScript type definitions
│   └── index.ts          # Shared types
├── public/               # Static assets
└── middleware.ts         # Next.js middleware
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run seed` - Seed the database

## 🗃️ Database Schema

The application uses three main models:

- **User**: Stores user information linked to Clerk
- **Question**: Stores feedback questions
- **Answer**: Stores anonymous responses to questions

## 🔐 Authentication

Authentication is handled by [Clerk](https://clerk.com/), providing:

- Secure user registration and login
- Social authentication options
- User session management
- Protected routes

## 🚀 Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Environment Variables for Production

Make sure to set these in your production environment:

- `DATABASE_URL`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- All Clerk redirect URLs

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Clerk](https://clerk.com/) for authentication
- [Prisma](https://prisma.io/) for database management
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Radix UI](https://radix-ui.com/) for accessible components

## 📞 Support

If you have any questions or need help, please:

- Open an issue on GitHub
- Check the documentation
- Join our community discussions

---

**Made with ❤️ for honest feedback**
