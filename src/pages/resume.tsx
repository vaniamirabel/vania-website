import React from 'react';
import Head from "next/head";
import PDFViewer from '~/components/PDFViewer';
import Link from "next/link";

const ResumePage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Vania's First Website &lt;3</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#8052c1] to-[#ffffff]">
            
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/"
              
            >
              <h3 className="text-2xl font-bold">← Home</h3>
          
            </Link>
                <PDFViewer />
            
            </main>
        </>
    );
};

export default ResumePage;