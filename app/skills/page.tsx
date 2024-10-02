import Head from 'next/head';

const Myskills = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>Skills</title>
        <meta name="description" content="skills" />
      </Head>

      <header className="bg-blue-600 py-6 text-white text-center shadow-md">
        <h1 className="text-3xl font-bold">Skills</h1>
      </header>

      <main className="flex flex-col items-center p-6">
        <section className="max-w-2xl bg-white rounded-lg shadow-lg p-6">
          <ul className="text-gray-600 mt-4">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

Myskills.displayName = 'Myskills';
export default Myskills;
