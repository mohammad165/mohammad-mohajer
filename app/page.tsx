import type { Metadata } from "next";
import Image from "next/image";
import Header from "./components/Header";
import ClientButtons from "./components/ClientButtons";
import ProjectCard from "./components/ProjectCard";
import BlogCard from "./components/BlogCard";
import { Mail, Phone } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { getLatestPosts } from "@/app/lib/posts";

export const metadata: Metadata = {
    title: 'محمد مهاجر',
    description: 'محمد مهاجر، توسعه‌دهنده iOS',
};

export default async function HomePage() {
    const latestPosts = await getLatestPosts(3);

    return (
        <div className="container" dir="rtl" lang="fa">
            <Header />

            {/* HERO */}
            <section id="home" className="hero">
                <div className="hero-content">
                    <Image
                        src="/profile.jpg"
                        alt="محمد مهاجر - برنامه‌نویس فرانت‌اند و iOS"
                        width={150}
                        height={150}
                        className="avatar"
                        priority
                    />
                    <h1>محمد مهاجر</h1>
                    <div className="subtitle-group">
                        <p className="subtitle">توسعه‌دهنده iOS </p>
                        <p className="subtitle">توسعه‌دهنده فرانت‌اند • React.js • Next.js</p>
                    </div>
                    <ClientButtons />
                </div>
            </section>



            {/* PROJECTS */}
            <section id="projects">
                <h2>نمونه کارها</h2>
                <p className="section-subtitle">برخی از جدیدترین پروژه‌های من به عنوان <strong>توسعه‌دهنده iOS و فرانت‌اند</strong></p>

                <h3 className="skills-category">پروژه‌های iOS</h3>
                <div className="grid">
                    <ProjectCard name="رویاپی" desc="Swift • Core Data • Spotlight Search • Tagging" link="https://github.com/mohammad165" />
                    <ProjectCard name="مدیریت فضاهای شهرداری" desc="SwiftUI • MapKit • Core Data • Charts • Sync" link="https://github.com/mohammad165" />
                    <ProjectCard name="اپلیکیشن تناسب اندام" desc="UIKit • HealthKit • Core Motion • Widget • Animation" link="https://github.com/mohammad165" />
                    <ProjectCard name="سیمرغ" desc="Swift • Core Data • پرداخت موبایل • مالی" link="https://github.com/mohammad165" />
                    <ProjectCard name="پی‌پاد" desc="Swift • Core Data • پرداخت موبایل • کیف پول" link="https://github.com/mohammad165" />
                </div>

                <h3 className="skills-category">پروژه‌های وب</h3>
                <div className="grid">
                    <ProjectCard name="سیمرغ تجارت" desc="React • Tailwind • معاملات • سرمایه‌گذاری" link="https://stts.ir/" external />
                    <ProjectCard name="mybajet" desc="React • Tailwind • بودجه • هزینه‌ها" link="https://mybajet.ir/" external />
                    <ProjectCard name="Sahim" desc="React 18 • Axios • اعتبارسنجی • نوتیفیکیشن" link="http://iranmcs.ir/sahimnew" external />
                    <ProjectCard name="Nikyar" desc="React 19 • TypeScript • Framer • انیمیشن" link="https://iranmbm.ir/" external />
                    <ProjectCard name="IranMJS" desc="React • Chart.js • داشبورد • مصورسازی" link="https://iranmjs.ir/" external />
                    <ProjectCard name="IranCyar" desc="React • SASS • تمیز • واکنش‌گرا" link="https://irancyar.ir/" external />
                    <ProjectCard name="DrAliAhmadi" desc="React • Tailwind • نوبت‌دهی • پزشکی" link="https://draliahmadii.ir/" external />
                    <ProjectCard name="ezlink" desc="React • Tailwind • لینک • مدیریت" link="https://tosansoha.com/ezlink/" external />
                    <ProjectCard name="ezpay" desc="React • Tailwind • پرداخت • درگاه" link="https://ezpay.ir/" external />
                    <ProjectCard name="grand-bazaar" desc="React • Tailwind • فروشگاه • بازارچه" link="https://grand-bazaar.ir/" external />
                    <ProjectCard name="suna" desc="React • Tailwind • خدمات • پنل" link="https://pep.co.ir/suna/" external />
                    <ProjectCard name="avand" desc="React • Tailwind • باشگاه • مشتریان" link="https://panel.avandclub.ir/" external />
                    <ProjectCard name="pep" desc="React • Tailwind • مالی • پرداخت" link="https://pep.co.ir/" external />
                    <ProjectCard name="podicom" desc="React • Tailwind • ارتباطات • محتوا" link="https://pep.co.ir/podicom/" external />
                    <ProjectCard name="pay-pod" desc="React • Tailwind • کیف پول • موبایل" link="https://web.pay-pod.ir/" external />
                </div>
            </section>

            {/* SKILLS */}
            <section id="skills">
                <h2>مهارت‌های فنی</h2>
                <p className="section-subtitle">فناوری‌ها و ابزارهایی که روزانه با آنها کار می‌کنم</p>

                <h3 className="skills-category">توسعه iOS</h3>
                <div className="grid small">
                    {["Swift 5.9", "SwiftUI", "UIKit", "Combine", "Core Data", "CloudKit", "HealthKit", "Core Motion", "AVFoundation", "Push Notifications", "WidgetKit", "Swift Package Manager", "CocoaPods", "Xcode", "Instruments", "App Store Connect", "TestFlight", "MVVM Architecture", "SwiftLint", "Unit Testing (XCTest)"].map(s => <div key={s} className="card center">{s}</div>)}
                </div>

                <h3 className="skills-category">هسته فرانت‌اند</h3>
                <div className="grid small">
                    {["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"].map(s => <div key={s} className="card center">{s}</div>)}
                </div>

                <h3 className="skills-category">استایل و UI</h3>
                <div className="grid small">
                    {["Tailwind CSS", "SASS/SCSS", "CSS Modules", "Framer Motion", "طراحی واکنش‌گرا", "BEM", "Styled Components", "Human Interface Guidelines (HIG)"].map(s => <div key={s} className="card center">{s}</div>)}
                </div>

                <h3 className="skills-category">ارتباط با سرور</h3>
                <div className="grid small">
                    {["REST APIs", "Axios", "Fetch API", "URLSession", "Alamofire", "GraphQL (Apollo)", "WebSocket"].map(s => <div key={s} className="card center">{s}</div>)}
                </div>

                <h3 className="skills-category">مدیریت State</h3>
                <div className="grid small">
                    {["Context API", "React Query", "useState", "useReducer", "SwiftUI @State", "Combine Publishers"].map(s => <div key={s} className="card center">{s}</div>)}
                </div>

                <h3 className="skills-category">ابزارها و کنترل نسخه</h3>
                <div className="grid small">
                    {["Git & GitHub", "VS Code", "WebStorm", "npm / yarn", "Vercel", "Chrome DevTools", "ESLint", "Prettier", "Postman", "React DevTools", "Figma", "Notion / Trello", "Xcode", "Swift Package Manager", "TestFlight"].map(s => <div key={s} className="card center">{s}</div>)}
                </div>

                <h3 className="skills-category">مهارت‌های نرم</h3>
                <div className="grid small">
                    {["حل مسئله", "مدیریت زمان", "همکاری تیمی", "توجه به جزئیات", "یادگیری مستمر", "ارتباط مؤثر", "تفکر طراحی (Design Thinking)"].map(s => <div key={s} className="card center">{s}</div>)}
                </div>
            </section>

            {/* BLOG SECTION (جدید) */}
            <section id="blog">
                <h2>مقالات</h2>
                <p className="section-subtitle">جدیدترین نوشته‌های من در مورد برنامه‌نویسی و توسعه</p>
                <div className="grid blog-grid">
                    {latestPosts.map(post => (
                        <BlogCard key={post.slug} {...post} />
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <a href="/blog" className="internal-link">مشاهده همه مقالات →</a>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="contact">
                <h2>ارتباط با من</h2>
                <div className="icons">
                    <a className="contact-item" href="tel:09124164734"><Phone size={20} /><span>09124164734</span></a>
                    <a className="contact-item" href="mailto:mohammad165@gmail.com"><Mail size={20} /><span>mohammad165@gmail.com</span></a>
                    <a className="contact-item" href="https://github.com/mohammad165" target="_blank" rel="noopener noreferrer nofollow"><FaGithub size={20} /><span>github.com/mohammad165</span></a>
                </div>
                <div className="back-to-top">
                    <a href="#home" className="internal-link">↑ بازگشت به بالا</a>
                </div>
            </section>
        </div>
    );
}