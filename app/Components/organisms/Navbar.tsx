"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../atoms/Button";

type NavPage = 'home' | 'how-it-works' | 'pricing' | 'about';

const navLinks: { label: string; page: NavPage; href: string }[] = [
  { label: 'Home', page: 'home', href: '/home' },
  { label: 'How it works', page: 'how-it-works', href: '/how-it-works' },
  { label: 'Pricing', page: 'pricing', href: '/pricing' },
  { label: 'About', page: 'about', href: '/about' },
];

type NavbarProps = {
  activePage: NavPage;
};

export default function Navbar({ activePage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40 bg-[#F5F1E6] border-b border-[#DED2AE]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-4 md:py-4.5 flex items-center justify-between">
        <Link href="/home" className="font-serif text-xl font-semibold">
          Bahi
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.page}
              href={link.href}
              className={link.page === activePage ? 'opacity-100 font-semibold' : 'opacity-80'}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4.5">
          <Link href="/login" className="text-sm font-semibold">Log in</Link>
          <Button variant="dark">Try the demo</Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-[1.5px] bg-[#16231B]" />
          <span className="w-6 h-[1.5px] bg-[#16231B]" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-[#DED2AE] px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.page}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={link.page === activePage ? 'font-semibold' : 'opacity-80'}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-[#DED2AE] flex flex-col gap-3">
            <Link href="/login" className="text-sm font-semibold" onClick={() => setIsOpen(false)}>
              Log in
            </Link>
            <Button variant="dark">Try the demo</Button>
          </div>
        </div>
      )}
    </div>
  );
}