import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

// Shared layout: sticky sidebar + scrollspy + code copy
export const CodeBlock = ({ code, language = "" }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative group my-4 rounded-xl overflow-hidden border border-border">
      <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-border">
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{language}</span>
        <button
          onClick={copy}
          className="text-xs px-3 py-1 rounded-md bg-background border border-border hover:bg-accent transition text-foreground"
        >
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>
      <pre className="bg-[#0d1117] text-[#e6edf3] p-5 overflow-x-auto text-sm leading-relaxed font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export const Note = ({ type = "info", children }) => {
  const styles = {
    info:    "bg-blue-500/10 border-blue-500/40 text-blue-700 dark:text-blue-300",
    tip:     "bg-green-500/10 border-green-500/40 text-green-700 dark:text-green-300",
    warning: "bg-yellow-500/10 border-yellow-500/40 text-yellow-700 dark:text-yellow-300",
    danger:  "bg-red-500/10 border-red-500/40 text-red-700 dark:text-red-300",
  };
  const icons = { info: "ℹ️", tip: "💡", warning: "⚠️", danger: "🚫" };
  return (
    <div className={`flex gap-3 p-4 rounded-lg border my-4 ${styles[type]}`}>
      <span className="text-lg shrink-0">{icons[type]}</span>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
};

export const Table = ({ headers, rows }) => (
  <div className="overflow-x-auto my-4 rounded-xl border border-border">
    <table className="w-full text-sm">
      <thead className="bg-muted">
        <tr>
          {headers.map((h) => (
            <th key={h} className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3 text-muted-foreground font-mono text-xs">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const DocLayout = ({ title, color, icon, sections, navLinks }) => {
  const [active, setActive] = useState(sections[0]?.id || "");
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, [sections]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  const colorMap = {
    orange: { badge: "bg-orange-500/15 text-orange-600 dark:text-orange-400", dot: "bg-orange-500", bar: "bg-orange-500", ring: "ring-orange-500/30" },
    blue:   { badge: "bg-blue-500/15 text-blue-600 dark:text-blue-400",       dot: "bg-blue-500",   bar: "bg-blue-500",   ring: "ring-blue-500/30"   },
    yellow: { badge: "bg-yellow-500/15 text-yellow-600 dark:text-yellow-400", dot: "bg-yellow-500", bar: "bg-yellow-500", ring: "ring-yellow-500/30" },
  };
  const c = colorMap[color] || colorMap.blue;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xl">{icon}</span>
            <span className="font-bold text-base tracking-tight">{title}</span>
            <span className={`hidden sm:inline text-xs px-2 py-0.5 rounded-full font-mono font-semibold ${c.badge}`}>
              Notes
            </span>
          </div>
          <div className="flex items-center gap-2">
            {navLinks.map((l) => (
              <Link key={l.path} to={l.path}
                className="hidden md:inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-border hover:bg-accent transition text-muted-foreground hover:text-foreground">
                {l.icon} {l.label}
              </Link>
            ))}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg border border-border hover:bg-accent transition"
            >
              <span className="text-sm">{mobileOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-30 top-14 bg-background/95 backdrop-blur p-6 overflow-y-auto">
          <nav className="space-y-1">
            {sections.map(({ id, label, icon: sIcon }) => (
              <button key={id} onClick={() => scrollTo(id)}
                className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition
                  ${active === id ? `${c.badge} font-semibold` : "text-muted-foreground hover:bg-accent"}`}>
                <span>{sIcon}</span>{label}
              </button>
            ))}
          </nav>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
        {/* Sidebar */}
        <aside className="hidden md:block w-56 shrink-0">
          <div className="sticky top-20">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3 px-2">On this page</p>
            <nav className="space-y-0.5">
              {sections.map(({ id, label, icon: sIcon }) => (
                <button key={id} onClick={() => scrollTo(id)}
                  className={`w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition group
                    ${active === id
                      ? `${c.badge} font-semibold`
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}>
                  {active === id && <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />}
                  {active !== id && <span className="w-1.5 h-1.5 rounded-full shrink-0 opacity-0 group-hover:opacity-30 bg-foreground" />}
                  <span>{sIcon}</span>
                  <span className="truncate">{label}</span>
                </button>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-border space-y-1">
              {navLinks.map((l) => (
                <Link key={l.path} to={l.path}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition">
                  {l.icon} {l.label}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 max-w-3xl">
          {/* Progress bar */}
          <div className="fixed top-14 left-0 right-0 z-30 h-0.5 bg-border">
            <div
              className={`h-full transition-all duration-300 ${c.bar}`}
              style={{
                width: `${((sections.findIndex(s => s.id === active) + 1) / sections.length) * 100}%`
              }}
            />
          </div>

          {sections.map(({ id, label, icon: sIcon, content }) => (
            <section key={id} id={id} className="mb-16 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-2xl p-2 rounded-xl ${c.badge}`}>{sIcon}</span>
                <h2 className="text-2xl font-bold tracking-tight">{label}</h2>
              </div>
              <div className="prose-like space-y-4 text-muted-foreground leading-relaxed">
                {content}
              </div>
            </section>
          ))}

          {/* Bottom nav */}
          <div className="flex gap-3 mt-12 pt-8 border-t border-border">
            {navLinks.map((l) => (
              <Link key={l.path} to={l.path}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-semibold text-sm transition hover:opacity-80 ${c.badge} border-current`}>
                {l.icon} {l.label}
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocLayout;