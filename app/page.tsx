import Link from 'next/link';
import Head from 'next/head';

const Portfolio = () => {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-800">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="about me" />
      </Head>

      {/* Sidebar */}
      <aside className="w-64 bg-gray-600 text-black flex flex-col p-6 mt-1">
        <h2 className="text-2xl font-bold mb-6">About</h2>
        <Link href="/studies" className="bg-blue-700 hover:bg-blue-800 py-2 px-4 rounded mb-4 block">
          Studies
        </Link>
        <Link href="/skills" className="bg-blue-700 hover:bg-blue-800 py-2 px-4 rounded mb-4 block">
          Skills
        </Link>
        <Link href="/projects" className="bg-blue-700 hover:bg-blue-800 py-2 px-4 rounded mb-4 block">
          Projects
        </Link>
        <Link href="/github" className="bg-blue-700 hover:bg-blue-800 py-2 px-4 rounded mb-4 block">
          GitHub
        </Link>
        <Link href="/hobbies" className="bg-blue-700 hover:bg-blue-800 py-2 px-4 rounded mb-4 block">
          Hobbies
        </Link>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="w-full bg-blue-600 py-6 text-white text-center shadow-md">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">VEERANNAGARI AJAY</h1>
          <p className="mt-2 text-base sm:text-lg">I REALLY LOVE SOFTWARE</p>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
          <section className="w-full max-w-md sm:max-w-xl md:max-w-3xl bg-white rounded-lg shadow-lg p-4 sm:p-4">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">WELCOME</h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Hey Hi. Welcome to my portfolio website and my blog. I will share all my experiences on this site.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

Portfolio.displayName = 'Portfolio';
export default Portfolio;
