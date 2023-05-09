import { useRouter } from "next/router";
import Head from "next/head";
import { Inter } from "next/font/google";

import config from "@/config";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pathname } = useRouter();

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = config.metadata;

  const seo = {
    title: defaultTitle,
    description: defaultDescription,
    image: `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <html lang="en">
      <Head>
        <title>{seo.title}</title>
        <meta name="twitter:title" content={seo.title} />
        <meta property="og:title" content={seo.title} />

        <meta name="description" content={seo.description} />
        <meta property="og:description" content={seo.description} />
        <meta name="twitter:description" content={seo.description} />

        <meta name="image" content={seo.image} />
        <meta property="og:image" content={seo.image} />
        <meta name="twitter:image" content={seo.image} />

        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={twitterUsername} />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
