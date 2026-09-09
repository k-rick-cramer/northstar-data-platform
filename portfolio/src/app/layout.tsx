import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rick Cramer | Data Engineer",
    template: "%s | Rick Cramer",
  },
  description:
    "Data engineering portfolio featuring AWS, SQL, Python, PySpark, cloud data platforms, and the Northstar Data Platform project.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-950 antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />

          <div className="flex-1">
            {children}
          </div>

          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
