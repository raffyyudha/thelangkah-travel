"use client";

import Script from "next/script";

export default function ClientBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <body className={`${className} antialiased`} suppressHydrationWarning>
      <Script
        crossOrigin="anonymous"
        src="//unpkg.com/same-runtime/dist/index.global.js"
      />
      {children}
    </body>
  );
}
