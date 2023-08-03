import "@styles/global.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Head from 'next/head';

export const metadata = {
  title: "Promptland",
  description: "Discover and Share AI Prompts",
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
    <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
      <Provider>
        <div className="main nft-gradient">
          <div className="gradient" />
        </div>

        <main className="app">
        <Nav/>
            {children}
        </main>
      </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
