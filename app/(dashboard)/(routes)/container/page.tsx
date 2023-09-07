import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Head from 'next/head';
import router from 'next/navigation';
import React from 'react'


const Container = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const meta = {
        title: "Kevin Kipkemboi - Developer, Trader, Cook and Creator",
        description: `I've been creating websites for over 4 years. Get in touch to learn more`,
        image: "/avatar.png",
        type: "website",
        date: "right now"
    }
    return (
        <div>
          <Head>
            <title>{meta.title}</title>
            <meta name="robots" content="follow, index" />
            <meta content={meta.description} name="description" />
            <meta

            />
            <link
            />
            <meta property="og:type" content={meta.type} />
            <meta property="og:site_name" content="Manu Arora" />
            <meta property="og:description" content={meta.description} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:image" content={meta.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@mannupaaji" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={meta.image} />
            {meta.date && (
              <meta property="article:published_time" content={meta.date} />
            )}
          </Head>
          <main className="dark:bg-gray-800 w-full">
            <Navbar />
            <div>{children}</div>
            <Footer />
          </main>
        </div>
      );
    }

export default Container