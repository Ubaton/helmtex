import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="container">
        <Image src="/404gif.gif" alt="Animated Logo" />
        <p>
          The page you&apos;re looking for isn&apos;t here<br />or may have been moved.
        </p>
        <a href="https://helmtex.co.za">Go to Homepage</a>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          background-size: cover;
          background-position: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px 20px;
          background-color: rgba(255, 255, 255, 0.85);
        }

        img {
          width: 80vw;
          max-width: 450px;
        }

        h1 {
          font-size: 64px;
          margin-bottom: 10px;
          color: #3d3d3d;
        }

        p {
          font-size: 18px;
          margin-bottom: 30px;
          line-height: 1.6;
          color: #3d3d3d;
        }

        a {
          display: inline-block;
          padding: 14px 24px;
          margin-bottom: 100px;
          background-color: transparent;
          color: #053FC6;
          border: 2px solid #053FC6;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        a:hover {
          background-color: #053FC6;
          color: #ffffff;
        }

        @media screen and (min-width: 768px) {
          img {
            max-width: 520px;
          }

          h1 {
            font-size: 80px;
          }

          p {
            font-size: 20px;
          }
        }

        @media screen and (min-width: 1024px) {
          .container {
            padding: 80px 40px;
          }

          img {
            max-width: 580px;
          }

          h1 {
            font-size: 96px;
          }

          p {
            font-size: 22px;
          }
        }
      `}</style>
    </>
  );
}
