import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Lafen Lesley | MERN Stack Developer</title>
        <meta
          name="description"
          content="My name is Lafen Lesley. I am passionate full-stack javascript developer with an obsession for code."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Hello world</main>
    </div>
  );
};

export default Home;
