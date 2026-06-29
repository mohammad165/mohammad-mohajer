import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/app/lib/posts";
import Link from "next/link";

// متادیتای داینامیک
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = await getPostBySlug(params.slug);
    if (!post) return { title: 'مقاله یافت نشد' };
    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: post.image ? [post.image] : [],
        },
    };
}

// تولید مسیرهای استاتیک برای تمام مقالات
export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map(post => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug);
    if (!post) notFound();

    return (
        <div className="container" dir="rtl" lang="fa">
            <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
                <header>
                    <h1>{post.title}</h1>
                    <p style={{ color: '#6b7280', margin: '0.5rem 0' }}>
                        {new Date(post.date).toLocaleDateString('fa-IR')} • {post.readingTime} دقیقه مطالعه
                    </p>
                    {post.tags && (
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {post.tags.map(tag => (
                                <span key={tag} style={{ background: '#e5e7eb', padding: '0.2rem 0.8rem', borderRadius: '999px', fontSize: '0.8rem' }}>
                  #{tag}
                </span>
                            ))}
                        </div>
                    )}
                </header>

                <div className="blog-content" style={{ marginTop: '2rem', lineHeight: '1.8' }}>
                    {/* محتوای مقاله (از Markdown یا JSON) */}
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                <div style={{ marginTop: '3rem', borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem' }}>
                    <Link href="/blog" className="internal-link">← بازگشت به فهرست مقالات</Link>
                </div>
            </article>
        </div>
    );
}