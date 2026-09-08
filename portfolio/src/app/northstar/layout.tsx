import type { ReactNode } from "react";
import { NorthstarNav } from "@/components/NorthstarNav";

export default function NorthstarLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <NorthstarNav />
      {children}
    </>
  );
}
