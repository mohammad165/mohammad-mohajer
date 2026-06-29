import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: 'محمد مهاجر | برنامه‌نویس فرانت‌اند و iOS',
        template: '%s | محمد مهاجر'
    },
    description: 'رزومه و نمونه کارهای محمد مهاجر، توسعه‌دهنده React.js، Next.js و iOS با بیش از ۵ سال تجربه',
    openGraph: {
        title: 'محمد مهاجر | برنامه‌نویس فرانت‌اند و iOS',
        description: 'رزومه و نمونه کارهای محمد مهاجر، توسعه‌دهنده React.js و iOS',
        url: 'https://maedemohajer.ir',
        siteName: 'محمد مهاجر',
        images: [
            {
                url: 'https://maedemohajer.ir/profile.jpg',
                width: 1200,
                height: 630,
                alt: 'محمد مهاجر - برنامه‌نویس فرانت‌اند و iOS',
            }
        ],
        locale: 'fa_IR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'محمد مهاجر | برنامه‌نویس فرانت‌اند و iOS',
        description: 'رزومه و نمونه کارهای محمد مهاجر',
        images: ['https://maedemohajer.ir/profile.jpg'],
    },
    alternates: {
        canonical: 'https://maedemohajer.ir',
        languages: {
            'fa': 'https://maedemohajer.ir',
            'en': 'https://maedemohajer.ir/en',
        },
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fa" dir="rtl">
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "محمد مهاجر",
                        "jobTitle": "برنامه‌نویس فرانت‌اند و iOS",
                        "url": "https://maedemohajer.ir",
                        "sameAs": [
                            "https://github.com/mohammad165"
                        ],
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Freelancer"
                        },
                        "knowsAbout": ["React.js", "Next.js", "Swift", "iOS Development", "TypeScript"]
                    })
                }}
            />
        </head>
        <body className="min-h-full flex flex-col">
        {children}
        </body>
        </html>
    );
}