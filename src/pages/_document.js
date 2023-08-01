import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css' rel='stylesheet' />
                {/* eslint-disable-next-line @next/next/no-css-tags */}
                <link rel='stylesheet' href='../app/globals.css' />
            </Head>
            <body>
                <div className='container'>
                    <Main />
                </div>
                <NextScript />
            </body>
        </Html>
    )
};