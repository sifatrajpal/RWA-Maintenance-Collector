// components/organisms/Footer.tsx
import Link from "next/link";

type FooterColumn = {
  heading: string;
  links: { label: string; href: string }[];
};

const footerColumns: FooterColumn[] = [
  {
    heading: 'Product',
    links: [
      { label: 'How it works', href: '/public/how-it-works' },
      { label: 'Pricing', href: '/public/pricing' },
      { label: 'Admin dashboard', href: '/admin/dues-overview/dues-overview' },
      { label: 'Resident portal', href: '/resident/resident' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/public/about' },
      { label: 'Security & RLS', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    heading: 'Account',
    links: [
      { label: 'Log in', href: '/login/login' },
      { label: 'Get started', href: '/login/login' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#16231B] text-[#EDE4CC] pt-12 md:pt-14 pb-7">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between flex-wrap gap-10 pb-9 border-b border-[#3A4A3C]">
          <div className="max-w-[280px]">
            <div className="font-serif text-xl font-semibold text-[#F5F1E6] mb-3.5">Bahi</div>
            <p className="text-sm opacity-70 leading-relaxed">
              The society ledger, kept in one place — built for Resident Welfare Associations across India.
            </p>
          </div>

          <div className="flex gap-10 md:gap-16 flex-wrap">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h4 className="font-mono text-[11px] tracking-widest uppercase text-[#E7C989] mb-3.5">
                  {col.heading}
                </h4>
                {col.links.map((link) => (
                  <Link key={link.label} href={link.href} className="block text-sm opacity-80 mb-2">
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 pt-5.5 text-xs opacity-55">
          <span>© 2026 Bahi. Built for societies, not spreadsheets.</span>
          <span>Made in India</span>
        </div>
      </div>
    </footer>
  );
}