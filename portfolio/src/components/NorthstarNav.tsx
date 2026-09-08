import Link from "next/link";

const navigation = [
  { href: "/northstar", label: "Overview" },
  { href: "/northstar/analytics", label: "Analytics" },
  { href: "/northstar/pipeline", label: "Pipeline" },
  { href: "/northstar/infrastructure", label: "Infrastructure" },
  { href: "/northstar/data-quality", label: "Data Quality" },
  { href: "/northstar/lineage", label: "Lineage" },
  { href: "/northstar/costs", label: "Costs" },
  { href: "/northstar/decisions", label: "Decisions" },
  { href: "/northstar/live-demo", label: "Live Demo" },
];

export function NorthstarNav() {
  return (
    <nav
      aria-label="Northstar navigation"
      className="border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl overflow-x-auto px-6">
        <ul className="flex min-w-max gap-6">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-4 text-sm font-medium text-slate-600 transition hover:text-slate-950"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
