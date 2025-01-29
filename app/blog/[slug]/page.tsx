import { notFound } from "next/navigation";
import { CustomMDX } from "@/app/blog/components/mdx";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { baseUrl } from "app/sitemap";
import clsx from "clsx";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: Props) {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Miro Rauhala",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title mb-4 font-serif text-5xl font-semibold tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="mb-8 mt-2 flex items-center justify-between text-sm">
        <p className="text-lg text-white/50">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article
        className={clsx([
          "[&_table]:w-full",
          "[&_table]:rounded",
          "[&_table]:table-auto",
          "[&_table]:mt-2",
          "[&_table]:mb-6",
          "[&_table_th]:border",
          "[&_table_th]:border-[#1D1F2F]",
          "[&_table_th]:bg-white/5",
          "[&_table_th]:p-2",
          "[&_table_td]:border-[#1D1F2F]",
          "[&_table_td]:border",
          "[&_table_td]:p-2",
          "[&_h1]:pb-2 [&_h1]:pt-1 [&_h1]:text-3xl [&_h1]:font-bold",
          "[&_h2]:pb-2 [&_h2]:pt-1 [&_h2]:text-2xl [&_h2]:font-bold",
          "[&_h3]:pb-2 [&_h3]:pt-1 [&_h3]:text-xl [&_h3]:font-bold",
          "[&_h3]:pb-2 [&_h3]:pt-1 [&_h3]:text-lg [&_h3]:font-bold",
          "[&_ul]:m b-2 [&_li]:pl-2 [&_ul]:list-disc [&_ul]:pl-6",
          "[&_pre]:my-4",
        ])}
      >
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
