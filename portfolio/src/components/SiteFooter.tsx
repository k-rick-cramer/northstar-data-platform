import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-slate-950"
            >
              Rick Cramer
            </Link>

            <p className="mt-2 text-sm text-slate-600">
              Data Engineer
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Amherst, Virginia
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a
              href="mailto:k.rick.cramer@gmail.com"
              className="font-medium text-slate-600 transition hover:text-slate-950"
            >
              Email
            </a>

            <a
              href="https://github.com/k-rick-cramer"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-slate-600 transition hover:text-slate-950"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kenneth-%E2%80%9Crick%E2%80%9D-cramer-111b97254/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-slate-600 transition hover:text-slate-950"
            >
              LinkedIn
            </a>

            <Link
              href="/contact"
              className="font-medium text-slate-600 transition hover:text-slate-950"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Rick Cramer</p>

            <p>rickcramer.dev</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
