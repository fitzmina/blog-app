import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[80rem] mx-auto bg-zinc-100 flex flex-col min-h-screen border-l border-r">
      {children}
    </div>
  );
}
