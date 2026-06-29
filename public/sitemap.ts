import { MetadataRoute } from 'next';
import { getAllPosts} from "@/app/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://maedemohajer.ir';
    const posts = await getAllPosts();

    const postUrls = posts.map(post => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/en`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        ...postUrls,
    ];
}