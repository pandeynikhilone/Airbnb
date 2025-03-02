import Head from "next/head";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="A Next.js application" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
