// app/posts/[slug]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getMDXComponent } from "next-contentlayer2/hooks";

import { allPosts } from "contentlayer/generated";
import { mdxComponents } from "@/components/shared/mdx-components";

// --------- PAGE PROPS ---------
type PostPageProps = {
  params: Promise<{ slug: string }>;
};

// --------- STATIC PATHS & METADATA ---------
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const slug = (await params).slug;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  if (!post) {
    notFound();
  }
  return {
    title: post.title,
    description: post.summary,
    keywords: ["Som3aware", "Blog", post.tag],
    openGraph: {
      title: post.title,
      description: post.summary,
      url: "https://som3aware.netlify.app/blog/" + slug,
      images: [post.cover],
      siteName: "Som3aware",
    },
    twitter: {
      title: post.title,
      description: post.summary,
      images: [post.cover],
      card: "summary_large_image",
    },
  };
}

// --------- PAGE LAYOUT ---------
export default async function PostPage({ params }: Readonly<PostPageProps>) {
  const slug = (await params).slug;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) {
    notFound();
  }

  const MDXContent = getMDXComponent(post.body.code);
  return (
    <article className="mx-auto flex w-full flex-1 flex-col gap-6 px-4 pt-4 md:px-7 md-pt-6 max-w-3xl">
      <div className="flex justify-start">
        <Link
          href="/blog"
          className="p-2 border border-border rounded-full bg-zinc-50/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-accent-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <Image
          width={640}
          height={320}
          src={post.cover}
          alt={`${post.title}'s cover image`}
          className="rounded-lg w-full shadow-xs shadow-stone-900 dark:shadow-stone-700"
        />
        <div className="space-y-1 text-center tracking-tight">
          <h1 className="font-bold text-2xl md:text-3xl">{post.title}</h1>
          <h2 className="text-muted-foreground font-semibold text-base md:text-lg">
            {post.summary}
          </h2>
          <div className="flex items-center justify-center gap-2 text-xs text-foreground/50 md:text-sm uppercase">
            <time dateTime={post.publishedAt}>
              {format(post.publishedAt, "LLL dd, yyyy")}
            </time>
            <span>&#x2022;</span>
            <span>
              {`${post.readingTime} ${post.readingTime === 1 ? "min" : "mins"}`}{" "}
              read
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className="prose">
        <MDXContent components={mdxComponents} />
      </div>
    </article>
  );
}
