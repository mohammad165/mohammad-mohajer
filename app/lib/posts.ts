import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface Post {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readingTime: number;
    tags?: string[];
    image?: string;
    content: string;
}

export async function getAllPosts(): Promise<Post[]> {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames.map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title || slug,
            excerpt: data.excerpt || '',
            date: data.date || new Date().toISOString(),
            readingTime: Math.ceil(content.split(/\s+/).length / 200),
            tags: data.tags || [],
            image: data.image || '',
            content,
        };
    });

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getLatestPosts(count: number = 3): Promise<Post[]> {
    const all = await getAllPosts();
    return all.slice(0, count);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    const all = await getAllPosts();
    return all.find(p => p.slug === slug) || null;
}