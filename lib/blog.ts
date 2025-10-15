import type { BlogPost } from "@/types/blog";

// This is a placeholder implementation. In a real application,
// you would fetch this data from a CMS, database, or API
export async function getAllPosts(): Promise<BlogPost[]> {
  // Example posts - replace with real data source
  return [
    {
      id: "1",
      title: "Building a Modern Web Application with Next.js and TypeScript",
      description:
        "A comprehensive guide to creating robust web applications using Next.js 13+ and TypeScript, including best practices and advanced patterns.",
      date: "2025-10-14",
      author: {
        name: "Toru Gabriel",
        image: "/images/avatar.svg",
      },
      content: `In this article, we explore how to build a modern web application using Next.js and TypeScript. We'll cover project setup, routing, API integration, and advanced patterns for scalability.\n\n**Key topics:**\n- Project structure\n- Type safety with TypeScript\n- API routes\n- SSR and SSG\n- Deployment tips`,
      slug: "building-modern-web-application-nextjs-typescript",
      tags: ["Next.js", "TypeScript", "Web Development"],
      image: "/images/techcare.webp",
      readingTime: "8 min read",
    },
    {
      id: "2",
      title: "Why You Should Use MDX for Your Developer Blog",
      description:
        "MDX lets you write Markdown with embedded React components. Learn why it's perfect for technical blogs and how to set it up in Next.js.",
      date: "2025-10-10",
      author: {
        name: "Toru Gabriel",
        image: "/images/avatar.svg",
      },
      content: `MDX combines Markdown and JSX, allowing you to use React components in your blog posts.\n\n**Benefits:**\n- Interactive code samples\n- Custom components\n- Easy content management\n\n**Setup:**\n1. Install @next/mdx\n2. Configure next.config.js\n3. Create .mdx files in your blog directory.\n\nMDX is ideal for developer portfolios and technical documentation.`,
      slug: "why-use-mdx-for-developer-blog",
      tags: ["MDX", "Blog", "Next.js"],
      image: "/images/web.svg",
      readingTime: "6 min read",
    },
    {
      id: "3",
      title: "Optimizing Performance in React and Next.js Apps",
      description:
        "Performance is key for user experience. Discover strategies for optimizing React and Next.js applications, including code splitting and caching.",
      date: "2025-09-28",
      author: {
        name: "Toru Gabriel",
        image: "/images/avatar.svg",
      },
      content: `Fast web apps delight users and improve SEO.\n\n**Optimization strategies:**\n- Code splitting with dynamic imports\n- Image optimization\n- Memoization and useCallback\n- Server-side caching\n- Analyzing bundle size\n\nApply these techniques to boost your Next.js and React projects.`,
      slug: "optimizing-performance-react-nextjs",
      tags: ["Performance", "React", "Next.js"],
      image: "/images/3d-portfolio.webp",
      readingTime: "7 min read",
    },
  ];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export async function getRelatedPosts(
  currentPost: BlogPost
): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts
    .filter((post) => post.id !== currentPost.id)
    .filter((post) => post.tags.some((tag) => currentPost.tags.includes(tag)))
    .slice(0, 3);
}
