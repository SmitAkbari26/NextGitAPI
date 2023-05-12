import "./globals.css";
import Header from "./components/header";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Next with Git api",
  description: "Web development",
  keyword: "web, html, css, javascript, jsx",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
