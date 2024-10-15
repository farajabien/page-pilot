import "@/styles/globals.css";
import { cal, inter } from "@/styles/fonts";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

const title =
  "Page Pilot – Your multi-tenant blogging platform for East Africa.";
const description =
  "Page Pilot is a free platform that empowers users to create and manage multiple blogs with custom domains, tailored for SEO, analytics, and monetization.";
const image = "https://fbien.com/path/to/image.png";

export const metadata: Metadata = {
  title,
  description,
  icons: ["https://fbien.com/favicon.ico"],
  openGraph: {
    title,
    description,
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
    creator: "@your_twitter_handle",
  },
  metadataBase: new URL("https://your-domain.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(cal.variable, inter.variable)}>
        <Providers>
          {children}
          <ThemeToggle />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
