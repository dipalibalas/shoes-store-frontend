import "./globals.css";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: "Online Shoe Store",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={oswald.className}>
      <body>{children}</body>
    </html>
  );
}
