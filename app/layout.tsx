// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: 'محمد مهاجر | برنامه نویس فرانت اند',
    description: 'رزومه و نمونه کارهای محمد مهاجر، برنامه نویس متخصص React.js و Next.js',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html>
        <body className="min-h-full flex flex-col">
        {children}
        </body>
        </html>
    );
}