import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Job Board | WorkWithThomas.com</title>
        <meta name='description' content='Job board app to connect job seekers to opportunities' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
          <h1>Find Remote Jobs - Latest post about 3 hours ago</h1>
      </main>
    </>
  );
}