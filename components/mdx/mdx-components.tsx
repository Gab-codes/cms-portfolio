import { cn } from "@/lib/utils";

interface CalloutProps {
  children: React.ReactNode;
  type?: "default" | "warning" | "info";
  icon?: string;
}

export function Callout({ children, type = "default", icon }: CalloutProps) {
  return (
    <div
      className={cn("my-6 flex items-start rounded-lg border border-l-4 p-4", {
        "border-slate-900 bg-slate-50": type === "default",
        "border-yellow-900 bg-yellow-50": type === "warning",
        "border-blue-900 bg-blue-50": type === "info",
      })}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}

export function Steps({ children }: { children: React.ReactNode }) {
  return (
    <div className="[&>h3]:step mb-12 ml-4 border-l border-slate-200 pl-6 [counter-reset:step]">
      {children}
    </div>
  );
}

export function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="relative rounded bg-slate-100 py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-slate-900">
      {children}
    </code>
  );
}

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        "prose prose-slate max-w-none dark:prose-invert",
        "prose-headings:font-semibold prose-headings:tracking-tight prose-lead:text-slate-500 dark:prose-lead:text-slate-400",
        "prose-a:font-semibold prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-slate-600 dark:hover:prose-a:text-slate-300",
        "prose-code:rounded prose-code:bg-slate-100 prose-code:px-1 prose-code:font-mono prose-code:font-semibold dark:prose-code:bg-slate-800",
        "prose-pre:rounded-lg prose-pre:border prose-pre:border-slate-200 dark:prose-pre:border-slate-800",
        className
      )}
    >
      {children}
    </div>
  );
}
