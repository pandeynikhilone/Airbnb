// app/ProgressProvider.js (Client Component)
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "bar-of-progress",
  delay: 100,
});

export default function ProgressProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    progress.start();
    const timer = setTimeout(() => progress.finish(), 500); // Simulate loading

    return () => clearTimeout(timer);
  }, [pathname]); // Runs when the route changes

  return <>{children}</>;
}
