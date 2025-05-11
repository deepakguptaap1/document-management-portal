import PageLayout from "@/components/HOC/pageLayout";
import ContextProvider from "@/store/contextProvider";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <PageLayout className={`${geistSans.variable} ${geistMono.variable}`}>
        <Component {...pageProps} />
      </PageLayout>
    </ContextProvider>
  );
}
