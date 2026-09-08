export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
        Northstar Data Platform
      </p>

      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
        Architecture Decisions
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Engineering decisions, alternatives considered, tradeoffs, and architectural rationale.
      </p>

      <div className="mt-10 rounded-xl border border-dashed border-slate-300 bg-white p-8">
        <p className="font-medium text-slate-700">
          Evidence will appear here as this part of Northstar is implemented.
        </p>
      </div>
    </main>
  );
}
