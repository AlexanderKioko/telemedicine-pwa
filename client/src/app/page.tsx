import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96 transform transition-all hover:scale-105">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">Don&apos;t have an account? </p>
          <Link href="/register" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}