import Head from 'next/head';

export default function () {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>studies</title>
        <meta name="description" content="studies." />
      </Head>

      <header className="bg-blue-600 py-6 text-white text-center shadow-md">
        <h1 className="text-3xl font-bold">studies</h1>
      </header>

      <main className="flex flex-col items-center p-6">
        <section className="max-w-2xl bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold">Welcome</h2>
          <p className="text-gray-600 mt-4">
            i completed my b.tech(ece) from alts college.
          </p>
        </section>
      </main>
    </div>
  );
}
