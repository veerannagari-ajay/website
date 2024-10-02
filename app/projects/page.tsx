import Head from 'next/head';

export default function () {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>Investments</title>
        <meta name="description" content="projects" />
      </Head>

      <header className="bg-blue-600 py-6 text-white text-center shadow-md">
        <h1 className="text-3xl font-bold">projects</h1>
      </header>

      <main className="flex flex-col items-center p-6">
        <section className="max-w-2xl bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mt-4">
            <li> i done vlsi backend project in final year.</li>
            <li> i  done an weather app</li>
            <li> i done an e commerce project using mern stack</li>
          </p>
        </section>
      </main>
    </div>
  );
}
