import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto text-center text-zinc-400 py-5 px-7 border-t">
      <small>&copy; {new Date().getFullYear()}. Fitz Blog App. </small>
    </footer>
  );
}
