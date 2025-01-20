// import type { Metadata } from "next";
// import localFont from "next/font/local";
"use client";

import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Testing project",
//   description: "This is the Testing project to test the new ui and logic",
//   openGraph: {
//     title: "OpenGraph Testing project",
//     description:
//       "OpenGraph This is the Testing project to test the new ui and logic",
//     images: [
//       {
//         url: "/assets/testing_image.jpg",
//         width: 600,
//         height: 600,
//         alt: "Description of the image",
//       },
//     ],
//   },
// };

// Create a client
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </QueryClientProvider>
  );
}
