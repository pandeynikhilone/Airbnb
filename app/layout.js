import "./globals.css";
import ProgressBar from "@badrap/bar-of-progress";
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
