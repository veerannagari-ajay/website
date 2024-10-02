import Head from 'next/head';
import Link from 'next/link';

export default function () {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>GitHub</title>
        <meta name="description" content="Github" />
      </Head>

      <header className="bg-blue-600 py-6 text-white text-center shadow-md">
        <h1 className="text-3xl font-bold">GitHub</h1>
      </header>

      <main className="flex flex-col items-center p-6">
        <section className="max-w-2xl bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mt-4">
            What I believe is quantity is greater than quality; that's why my GitHub has no great repositories. In the future, I am sure I will have great projects. Anyway, here's the link for my GitHub.
          </p>
          <div className="mt-4">
            <Link href="https://github.com/veerannagari-ajay" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Visit my GitHub
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
