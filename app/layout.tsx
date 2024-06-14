import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/main.scss";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medex frontend Intern",
  description: "Medex Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} /> */}
      </Head>
      <body>
        <div className="main-container">{children}</div>
      </body>
    </html>
  );
}
