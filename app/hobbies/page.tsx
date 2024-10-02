import Head from 'next/head';

export default function () {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>hobbies</title>
        <meta name="description" content="hobbies." />
      </Head>

      <header className="bg-blue-600 py-6 text-white text-center shadow-md">
      <h1 className="text-3xl font-bold">hobbies</h1>
      </header>

      <main className="flex flex-col items-center p-6">
        <section className="max-w-2xl bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mt-4">
            <li>playing chess</li>
            <li>doing maths</li>
            <li>playing cricket</li>
          </p>
        </section>
      </main>
    </div>
  );
}
