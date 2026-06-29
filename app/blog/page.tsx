import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/app/lib/posts";
import BlogCard from "@/app/components/BlogCard";

export const metadata: Metadata = {
    title: 'مقالات برنامه‌نویسی | محمد مهاجر',
    description: 'مقالات آموزشی و تجربیات محمد مهاجر در زمینه توسعه iOS، React.js، Next.js و برنامه‌نویسی فرانت‌اند',
};

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <div className="container" dir="rtl" lang="fa">
            <header style={{ padding: '2rem 0' }}>
                <h1>مقالات</h1>
                <p className="section-subtitle">جدیدترین نوشته‌های من در مورد برنامه‌نویسی، توسعه نرم‌افزار و تجربیات شخصی</p>
            </header>

            <section>
                <div className="grid blog-grid">
                    {posts.map(post => (
                        <BlogCard key={post.slug} {...post} />
                    ))}
                </div>
            </section>
        </div>
    );
}