import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96 transform transition-all hover:scale-105">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Welcome to MediReach</h1>
        <Link href="/auth/login">
          <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}