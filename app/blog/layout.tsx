import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Toru Gabriel",
  description:
    "Technical articles and insights about web development, software engineering, and technology.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">{children}</div>
    </div>
  );
}
