import Link from 'next/link';
import { Post } from '@/app/lib/posts';

export default function BlogCard({ slug, title, excerpt, date, readingTime, tags }: Post) {
    return (
        <div className="card blog-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Link href={`/blog/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ margin: '0 0 0.5rem' }}>{title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', flex: 1 }}>{excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', fontSize: '0.8rem', color: '#9ca3af' }}>
                    <span>{new Date(date).toLocaleDateString('fa-IR')}</span>
                    <span>{readingTime} دقیقه</span>
                </div>
                {tags && tags.length > 0 && (
                    <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                        {tags.slice(0, 3).map(tag => (
                            <span key={tag} style={{ background: '#f3f4f6', padding: '0.1rem 0.6rem', borderRadius: '999px', fontSize: '0.7rem' }}>
                #{tag}
              </span>
                        ))}
                    </div>
                )}
            </Link>
        </div>
    );
}