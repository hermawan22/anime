import ApolloWrapper from "@/helper/apollo/wrapper";
import NextAppDirEmotionCacheProvider from "@/helper/emotion";
import { GlobalCss } from "@/helper/style/globalStyle";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../style/pagination.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime List",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="modals">
          <NextAppDirEmotionCacheProvider options={{ key: "gtl" }}>
            <ApolloWrapper>
              <Navbar />
              {children}
              <GlobalCss />
            </ApolloWrapper>
          </NextAppDirEmotionCacheProvider>
        </div>
      </body>
    </html>
  );
}
