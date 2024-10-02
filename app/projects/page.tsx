import Head from 'next/head';

const Myprojects = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>Investments</title>
        <meta name="description" content="projects" />
      </Head>

      <header className="bg-blue-600 py-6 text-white text-center shadow-md">
        <h1 className="text-3xl font-bold">Projects</h1>
      </header>

      <main className="flex flex-col items-center p-6">
        <section className="max-w-2xl bg-white rounded-lg shadow-lg p-6">
          <ul className="text-gray-600 mt-4">
            <li>I did a VLSI backend project in my final year.</li>
            <li>I did a weather app.</li>
            <li>I did an e-commerce project using the MERN stack.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

Myprojects.displayName = 'Myprojects';
export default Myprojects;
