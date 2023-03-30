import "@/styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Yuki Terasaka: Frontend Developer</title>
        <meta name="description" content="Yuki's Web Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
