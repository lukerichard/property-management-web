import Link from "next/link";

const links = [
  { href: "/", label: "Overview" },
  { href: "/properties", label: "Properties" },
  { href: "/maintenance", label: "Maintenance" },
  { href: "/tenants", label: "Tenants" },
  { href: "/stitch-review", label: "Stitch Review" },
];

export function TopNav() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Ops Console</p>
          <p className="text-lg font-semibold text-white">Property Management</p>
        </div>
        <nav className="flex gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
