import Head from 'next/head';

export default function Meta() {
  const title = "Sunless Dawn";
  const description = "Tactical Cyberpunk Action";
  const url = "https://sunlessdawn.net";
  const twitter = "@SunlessDawnNFT";

  return (
    <>
      <Head>
        <title>{title}: {description}</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link rel="canonical" href="https://sunlessdawn.net/" />

        <meta charSet="utf-8" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="referrer" content="no-referrer-when-downgrade" />

        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="article:publisher" content={url} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:site" content={twitter} />
      </Head>
    </>
  );
}
