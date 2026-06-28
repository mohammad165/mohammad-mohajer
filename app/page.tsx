// app/page.tsx (نسخه فارسی - بدون آیکون)
import Image from "next/image";
import Header from "./components/Header";
import ClientButtons from "./components/ClientButtons";
import ProjectCard from "./components/ProjectCard";
import { Mail, Phone } from "lucide-react";
import { FaGithub } from "react-icons/fa";
export default function HomePage() {
    return (
        <div className="container" dir="rtl" lang="fa">
            <Header />

            {/* HERO SECTION */}
            <section id="home" className="hero">
                <div className="hero-content">
                    <Image
                        src="/profile.jpg"
                        alt="عکس پروفایل محمد مهاجر"
                        width={150}
                        height={150}
                        className="avatar"
                        priority
                    />
                    <h1>محمد مهاجر</h1>
                    <div className="subtitle-group">
                        <p className="subtitle">توسعه دهنده iOS • Swift • SwiftUI • UIKit</p>
                        <p className="subtitle">توسعه دهنده فرانت اند • React.js • Next.js</p>
                    </div>
                    <ClientButtons />
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="card">
                <h2>درباره من</h2>

                <p style={{ marginBottom: '1rem' }}>
                    محمد مهاجر هستم. توسعه‌دهنده فرانت‌اند و iOS با تمرکز بر SwiftUI، UIKit و React.js.
                </p>

                <p style={{ marginBottom: '1rem' }}>
                    از پروژه‌های کوچک شروع کردم تا سیستم‌های پیچیده؛
                    همیشه با تعهد به کیفیت و تحویل به‌موقع.
                </p>

                <p style={{ marginBottom: '1rem' }}>
                    امروز به دنبال تیمی حرفه‌ای هستم برای رشد، یادگیری
                    و ساختن محصولاتی که واقعاً کاربردی باشند.
                </p>

                <p>
                    <a href="#contact" className="internal-link">ارتباط با من</a>
                </p>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects">
                <h2>نمونه کارها</h2>
                <p className="section-subtitle">برخی از جدیدترین پروژه‌های من به عنوان <strong>توسعه دهنده iOS و فرانت اند</strong></p>

                {/* پروژه‌های iOS */}
                <h3 className="skills-category">پروژه‌های iOS</h3>
                <div className="grid">
                    <ProjectCard
                        name="رویاپی"
                        desc="Swift • Core Data • Spotlight Search • Tagging"
                        link="#"
                    />

                    <ProjectCard
                        name="مدیریت فضاهای شهرداری"
                        desc="SwiftUI • MapKit • Core Data • Charts • Sync"
                        link="#"
                    />

                    <ProjectCard
                        name="اپلیکیشن تناسب اندام"
                        desc="UIKit • HealthKit • Core Motion • Widget • Animation"
                        link="#"
                    />

                    <ProjectCard
                        name="سیمرغ"
                        desc="Swift • Core Data • پرداخت موبایل • مالی"
                        link="#"
                    />

                    <ProjectCard
                        name="پی پاد"
                        desc="Swift • Core Data • پرداخت موبایل • کیف پول"
                        link="#"
                    />
                </div>

                {/* پروژه‌های وب */}
                <h3 className="skills-category">پروژه‌های وب</h3>
                <div className="grid">
                    <ProjectCard
                        name="سیمرغ تجارت"
                        desc="React • Tailwind • معاملات • سرمایه‌گذاری"
                        link="https://stts.ir/"
                    />

                    <ProjectCard
                        name="mybajet"
                        desc="React • Tailwind • بودجه • هزینه‌ها"
                        link="https://mybajet.ir/"
                    />

                    <ProjectCard
                        name="Sahim"
                        desc="React 18 • Axios • اعتبارسنجی • نوتیفیکیشن"
                        link="http://iranmcs.ir/sahimnew"
                    />

                    <ProjectCard
                        name="Nikyar"
                        desc="React 19 • TypeScript • Framer • انیمیشن"
                        link="https://iranmbm.ir/"
                    />

                    <ProjectCard
                        name="IranMJS"
                        desc="React • Chart.js • داشبورد • مصورسازی"
                        link="https://iranmjs.ir/"
                    />

                    <ProjectCard
                        name="IranCyar"
                        desc="React • SASS • تمیز • واکنش‌گرا"
                        link="https://irancyar.ir/"
                    />

                    <ProjectCard
                        name="DrAliAhmadi"
                        desc="React • Tailwind • نوبت‌دهی • پزشکی"
                        link="https://draliahmadii.ir/"
                    />

                    <ProjectCard
                        name="ezlink"
                        desc="React • Tailwind • لینک • مدیریت"
                        link="https://tosansoha.com/ezlink/"
                    />

                    <ProjectCard
                        name="ezpay"
                        desc="React • Tailwind • پرداخت • درگاه"
                        link="https://ezpay.ir/"
                    />

                    <ProjectCard
                        name="grand-bazaar"
                        desc="React • Tailwind • فروشگاه • بازارچه"
                        link="https://grand-bazaar.ir/"
                    />

                    <ProjectCard
                        name="suna"
                        desc="React • Tailwind • خدمات • پنل"
                        link="https://pep.co.ir/suna/"
                    />

                    <ProjectCard
                        name="avand"
                        desc="React • Tailwind • باشگاه • مشتریان"
                        link="https://panel.avandclub.ir/"
                    />

                    <ProjectCard
                        name="pep"
                        desc="React • Tailwind • مالی • پرداخت"
                        link="https://pep.co.ir/"
                    />

                    <ProjectCard
                        name="podicom"
                        desc="React • Tailwind • ارتباطات • محتوا"
                        link="https://pep.co.ir/podicom/"
                    />

                    <ProjectCard
                        name="pay-pod"
                        desc="React • Tailwind • کیف پول • موبایل"
                        link="https://web.pay-pod.ir/"
                    />
                </div>
            </section>

            {/* SKILLS SECTION - بدون آیکون */}
            <section id="skills">
                <h2>مهارت‌های فنی</h2>
                <p className="section-subtitle">فناوری‌ها و ابزارهایی که روزانه با آنها کار می‌کنم</p>

                {/* iOS & SwiftUI */}
                <h3 className="skills-category">توسعه iOS</h3>
                <div className="grid small">
                    {[
                        "Swift 5.9",
                        "SwiftUI",
                        "UIKit",
                        "Combine",
                        "Core Data",
                        "CloudKit",
                        "HealthKit",
                        "Core Motion",
                        "AVFoundation",
                        "Push Notifications",
                        "WidgetKit",
                        "Swift Package Manager",
                        "CocoaPods",
                        "Xcode",
                        "Instruments",
                        "App Store Connect",
                        "TestFlight",
                        "MVVM Architecture",
                        "SwiftLint",
                        "Unit Testing (XCTest)"
                    ].map((s) => (
                        <div key={s} className="card center">
                            {s}
                        </div>
                    ))}
                </div>

                {/* هسته فرانت اند */}
                <h3 className="skills-category">هسته فرانت اند</h3>
                <div className="grid small">
                    {["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* استایل و UI */}
                <h3 className="skills-category">استایل و رابط کاربری</h3>
                <div className="grid small">
                    {["Tailwind CSS", "SASS/SCSS", "CSS Modules", "Framer Motion", "طراحی واکنش‌گرا", "BEM", "Styled Components", "Human Interface Guidelines (HIG)"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* ارتباط با سرور */}
                <h3 className="skills-category">ارتباط با سرور</h3>
                <div className="grid small">
                    {["REST APIs", "Axios", "Fetch API", "URLSession", "Alamofire", "GraphQL (Apollo)", "WebSocket"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* مدیریت State */}
                <h3 className="skills-category">مدیریت state</h3>
                <div className="grid small">
                    {["Context API", "React Query", "useState", "useReducer", "SwiftUI @State", "@ObservedObject", "@EnvironmentObject", "Combine Publishers"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* ابزارها و کنترل نسخه */}
                <h3 className="skills-category">ابزارها و کنترل نسخه</h3>
                <div className="grid small">
                    {[
                        "Git & GitHub",
                        "VS Code",
                        "WebStorm",
                        "npm / yarn",
                        "Vercel",
                        "Chrome DevTools",
                        "ESLint",
                        "Prettier",
                        "Postman",
                        "React DevTools",
                        "Figma",
                        "Notion / Trello",
                        "Xcode",
                        "Swift Package Manager",
                        "TestFlight"
                    ].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* مهارت‌های نرم */}
                <h3 className="skills-category">مهارت‌های نرم</h3>
                <div className="grid small">
                    {["حل مسئله", "مدیریت زمان", "همکاری تیمی", "توجه به جزئیات", "یادگیری مستمر", "ارتباط مؤثر", "تفکر طراحی (Design Thinking)"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>
            </section>

            {/* CONTACT SECTION - بدون آیکون */}
            <section id="contact" className="contact">
                <h2>ارتباط با من</h2>
                <div className="icons">
                    <a className="contact-item" href="tel:09124164734">
                        <Phone size={20} />
                        <span>09124164734</span>
                    </a>

                    <a className="contact-item" href="mailto:mohammad165@gmail.com">
                        <Mail size={20} />
                        <span>mohammad165@gmail.com</span>
                    </a>

                    <a className="contact-item" href="https://github.com/mohammad165" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} />
                        <span>github.com/mohammad165</span>
                    </a>
                </div>

                {/* لینک برگشت به بالا */}
                <div className="back-to-top">
                    <a href="#home" className="internal-link">↑ بازگشت به بالا</a>
                </div>
            </section>
        </div>
    );
}