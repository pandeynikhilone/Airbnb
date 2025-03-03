"use client";
import "./globals.css";
import Progress from "../components/Progress";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <Progress />
      <body>{children}</body>
    </html>
  );
}
