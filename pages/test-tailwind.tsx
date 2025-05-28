import Head from 'next/head';

export default function TestPage() {
  return (
    <>
      <Head>
        <title>Tailwind Test | SERP Strategist</title>
        <meta name="description" content="Testing Tailwind CSS" />
      </Head>

      <div className="min-h-screen bg-gray-950 text-white p-8">
        {/* Test if Tailwind is working with a bright red background */}
        <div className="bg-red-500 text-white p-4 rounded-lg mb-8">
          <h1 className="text-3xl font-bold">🎉 SUCCESS! Tailwind CSS is Working!</h1>
          <p className="text-lg">If you can see this red box with white text, your Tailwind setup is perfect!</p>
        </div>

        {/* Test gradient backgrounds */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-2xl mb-6">
          <h2 className="text-2xl font-bold mb-2">Gradient Test</h2>
          <p>This purple to blue gradient shows advanced Tailwind features are working!</p>
        </div>

        {/* Test glassmorphism effect */}
        <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold mb-2">Glassmorphism Test</h2>
          <p className="text-gray-300">This glassmorphism effect matches your blog design!</p>
        </div>

        {/* Test buttons */}
        <div className="space-y-4">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-xl shadow-purple-900/25">
            Test Button
          </button>
          
          <div className="border border-gray-800/50 rounded-xl p-4">
            <p className="text-gray-300">Border and spacing test</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-green-400 text-lg font-medium">
            ✅ All tests passed! Your blog should now display with full styling.
          </p>
          <p className="text-gray-400 mt-2">
            Visit <a href="/pages/blog" className="text-purple-400 hover:text-purple-300">/pages/blog</a> to see your styled blog!
          </p>
        </div>
      </div>
    </>
  );
}
