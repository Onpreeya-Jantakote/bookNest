import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { booknestAntdTheme } from "@/styles/booknest-antd-theme";
import "@/styles/globals.css";

const bodyFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const headingFont = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Booknest — Discover Your Next Read",
    template: "%s | Booknest",
  },
  description: "Search books by title or author, powered by Open Library.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable}`}
      suppressHydrationWarning
    >
      <body>
        <AntdRegistry>
          <ConfigProvider theme={booknestAntdTheme}>{children}</ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
