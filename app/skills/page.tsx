import Head from 'next/head';

export default function () {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>skills</title>
        <meta name="description" content="skills" />
      </Head>

      <header className="bg-blue-600 py-6 text-white text-center shadow-md">
        <h1 className="text-3xl font-bold">skills</h1>
      </header>

      <main className="flex flex-col items-center p-6">
        <section className="max-w-2xl bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mt-4">
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
            <li>react</li>
            <li>nextjs</li>
            <li>express</li>
            <li>mongodb</li>
            
          </p>
        </section>
      </main>
    </div>
  );
}
