// app/page.tsx (نسخه فارسی - کامل شده با SwiftUI)
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiSwift, SiApple } from "react-icons/si";
import Header from "./components/Header";
import ClientButtons from "./components/ClientButtons";
import ProjectCard from "./components/ProjectCard";

export default function HomePage() {
    return (
        <div className="container" dir="rtl" lang="fa">
            <Header />

            {/* HERO SECTION */}
            <section id="home" className="hero">
                <div className="hero-content">
                    <Image
                        src="/profile.jpg"
                        alt="محمد مهاجر - برنامه نویس iOS و فرانت اند"
                        width={150}
                        height={150}
                        className="avatar"
                        priority
                    />
                    <h1>محمد مهاجر</h1>
                    <p className="subtitle">📱 توسعه دهنده iOS • Swift • SwiftUI • UIKit</p>
                    <p className="subtitle" style={{marginTop:10}}>💻 توسعه دهنده فرانت اند • React.js • Next.js</p>
                    <ClientButtons />
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="card">
                <h2>درباره من</h2>
                <p>
                    حدود هشت سالی می‌شود که به عنوان توسعه‌دهنده فرانت‌اند فریلنسر کار می‌کنم — از وبسایت یک شرکت خدماتی گرفته تا یک داشبورد داخلی برای مدیریت سفارش‌ها. همه‌شان را خودم از صفر تا تحویل پیش بردم و سعی کردم تجربه کاربری خوبی ارائه بدهم.
                </p>

                <p>
                    <strong>از دو سال پیش به طور جدی وارد دنیای توسعه اپلیکیشن‌های iOS شدم</strong> و با <strong>SwiftUI</strong> و <strong>UIKit</strong> اپلیکیشن‌های بومی برای iOS و iPadOS توسعه می‌دهم. طراحی اپل، تجربه کاربری روان و معماری <strong>MVVM</strong> را خیلی دوست دارم و سعی می‌کنم بهترین تمرین‌های اپل را در پروژه‌هایم پیاده‌سازی کنم.
                </p>

                <p>
                    چیزی که فریلنسری واقعاً به من یاد داد، مدیریت مستقل پروژه است. یاد گرفتم چطور به ضرب‌الاجل‌ها پایبند باشم بدون اینکه کیفیت فدا شود. نگاهی به <a href="#projects" className="internal-link">نمونه کارهای اخیر من</a> بیندازید.
                </p>

                <p>
                    حالا می‌خواهم وارد یک تیم حرفه‌ای شوم. دوست دارم کنار توسعه‌دهندگان باتجربه‌تر کار کنم، از آن‌ها یاد بگیرم و در ساخت محصولی که واقعاً به کار مردم می‌آید، نقش داشته باشم.
                    <br />
                    <a href="#contact" className="internal-link">با من تماس بگیرید</a> اگر فرصتی دارید.
                </p>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects">
                <h2>نمونه کارها</h2>
                <p className="section-subtitle">برخی از جدیدترین پروژه‌های من به عنوان <strong>توسعه دهنده iOS و فرانت اند</strong></p>

                {/* پروژه‌های iOS */}
                <h3 className="skills-category">📱 پروژه‌های iOS</h3>
                <div className="grid">
                    <ProjectCard
                        name="رویاپی"
                        desc="Swift • Core Data  • جستجوی پیشرفته • تگ‌گذاری هوشمند"
                        link="#"
                    />
                    <ProjectCard
                        name="مدیریت فضاهای شهرداری"
                        desc="SwiftUI • Combine • Core Data • نمودارهای تعاملی • یادآوری‌های هوشمند • iCloud Sync"
                        link="#"
                    />
                    <ProjectCard
                        name="اپلیکیشن تناسب اندام"
                        desc="UIKit • HealthKit • Core Motion • انیمیشن‌های سفارشی • Widget • اعلان‌های محلی"
                        link="#"
                    />
                    <ProjectCard
                        name="یادداشت‌های هوشمند"
                        desc="SwiftUI • Core Data • CloudKit • اشتراک‌گذاری iCloud • جستجوی پیشرفته • تگ‌گذاری هوشمند"
                        link="#"
                    />

                    <ProjectCard
                        name="سیمرغ"
                        desc="Swift • Core Data  • جستجوی پیشرفته • تگ‌گذاری هوشمند"
                        link="#"
                    />
                    <ProjectCard
                        name="پی پاد"
                        desc="Swift • Core Data  • جستجوی پیشرفته • تگ‌گذاری هوشمند"
                        link="#"
                    />


                </div>

                {/* پروژه‌های وب */}
                <h3 className="skills-category">💻 پروژه‌های وب</h3>
                <div className="grid">
                    <ProjectCard
                        name="سمیرغ تجارت"
                        desc="React.js • Tailwind CSS • BEM • واکنش‌گرا • بهینه‌سازی سئو"
                        link="https://stts.ir/"
                    />
                    <ProjectCard
                        name="mybajet"
                        desc="React.js • Tailwind CSS • BEM • واکنش‌گرا • بهینه‌سازی سئو"
                        link="https://mybajet.ir/"
                    />
                    <ProjectCard
                        name="Sahim"
                        desc="React 18 • Axios • Tailwind CSS • Lucide Icons • اعتبارسنجی با AJV • داشبورد لحظه‌ای با نوتیفیکیشن"
                        link="http://iranmcs.ir/sahimnew"
                    />
                    <ProjectCard
                        name="Nikyar"
                        desc="React 19 • TypeScript • Framer Motion • Styled Components • انیمیشن‌های پیشرفته • افکت کنفتی"
                        link="https://iranmbm.ir/"
                    />
                    <ProjectCard
                        name="IranMJS"
                        desc="React.js • Context API • Chart.js • داشبورد مصورسازی داده • مدیریت state پیشرفته"
                        link="https://iranmjs.ir/"
                    />
                    <ProjectCard
                        name="IranCyar"
                        desc="React.js • SASS • BEM • معماری تمیز • کاملاً واکنش‌گرا از صفر"
                        link="https://irancyar.ir/"
                    />
                    <ProjectCard
                        name="DrAliAhmadi"
                        desc="React.js • Tailwind CSS • BEM • واکنش‌گرا • بهینه‌سازی سئو"
                        link="https://draliahmadii.ir/"
                    />
                    <ProjectCard
                        name="ezlink"
                        desc="React.js • Tailwind CSS • BEM • واکنش‌گرا • بهینه‌سازی سئو"
                        link="https://tosansoha.com/ezlink/"
                    />
                    <ProjectCard
                        name="ezpay"
                        desc="React.js • Tailwind CSS • BEM • واکنش‌گرا • بهینه‌سازی سئو"
                        link="https://ezpay.ir/"
                    />
                    <ProjectCard
                        name="grand-bazaar"
                        desc="React.js • Tailwind CSS • BEM • واکنش‌گرا • بهینه‌سازی سئو"
                        link="https://grand-bazaar.ir/"
                    />
                    <ProjectCard
                        name="suna"
                        desc="React.js • Tailwind CSS • BEM • واکنش‌گرا • بهینه‌سازی سئو"
                        link="https://pep.co.ir/suna/"
                    />
                    <ProjectCard
                        name="avand"
                        desc="React.js • Tailwind CSS • BEM • واکنش‌گرا • بهینه‌سازی سئو"
                        link="https://panel.avandclub.ir/"
                    />
                    <ProjectCard
                        name="pep"
                        desc="React.js • Tailwind CSS • BEM • واکنش‌گرا • بهینه‌سازی سئو"
                        link="https://pep.co.ir/"
                    />
                    <ProjectCard
                        name="podicom"
                        desc="React.js • Tailwind CSS • BEM • واکنش‌گرا • بهینه‌سازی سئو"
                        link="https://pep.co.ir/podicom/"
                    />
                    <ProjectCard
                        name="pay-pod"
                        desc="React.js • Tailwind CSS • BEM • واکنش‌گرا • بهینه‌سازی سئو"
                        link="https://web.pay-pod.ir/"
                    />

                </div>
            </section>

            {/* SKILLS SECTION - کامل با SwiftUI */}
            <section id="skills">
                <h2>مهارت‌های فنی</h2>
                <p className="section-subtitle">فناوری‌ها و ابزارهایی که روزانه با آنها کار می‌کنم</p>

                {/* iOS & SwiftUI */}
                <h3 className="skills-category">📱 توسعه iOS</h3>
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
                            {s.includes("Swift") ? <SiSwift className="inline-icon" /> :
                                s.includes("UIKit") || s.includes("Core") ? <SiApple className="inline-icon" /> : null}
                            {s}
                        </div>
                    ))}
                </div>

                {/* هسته فرانت اند */}
                <h3 className="skills-category">🎯 هسته فرانت اند</h3>
                <div className="grid small">
                    {["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* استایل و UI */}
                <h3 className="skills-category">🎨 استایل و رابط کاربری</h3>
                <div className="grid small">
                    {["Tailwind CSS", "SASS/SCSS", "CSS Modules", "Framer Motion", "طراحی واکنش‌گرا", "BEM", "Styled Components", "Human Interface Guidelines (HIG)"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* ارتباط با سرور */}
                <h3 className="skills-category">🔗 ارتباط با سرور</h3>
                <div className="grid small">
                    {["REST APIs", "Axios", "Fetch API", "URLSession", "Alamofire", "GraphQL (Apollo)", "WebSocket"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* مدیریت State */}
                <h3 className="skills-category">📦 مدیریت state</h3>
                <div className="grid small">
                    {["Context API", "React Query", "useState", "useReducer", "SwiftUI @State", "@ObservedObject", "@EnvironmentObject", "Combine Publishers"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* ابزارها و کنترل نسخه */}
                <h3 className="skills-category">🛠️ ابزارها و کنترل نسخه</h3>
                <div className="grid small">
                    {[
                        "🐙 Git & GitHub",
                        "💻 VS Code",
                        "⚡ WebStorm",
                        "📦 npm / yarn",
                        "▲ Vercel",
                        "🔍 Chrome DevTools",
                        "✅ ESLint",
                        "✨ Prettier",
                        "🐳 Postman",
                        "📊 React DevTools",
                        "🎨 Figma",
                        "📝 Notion / Trello",
                        "🍎 Xcode",
                        "🔧 Swift Package Manager",
                        "📱 TestFlight"
                    ].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* مهارت‌های نرم */}
                <h3 className="skills-category">💡 مهارت‌های نرم</h3>
                <div className="grid small">
                    {["حل مسئله", "مدیریت زمان", "همکاری تیمی", "توجه به جزئیات", "یادگیری مستمر", "ارتباط مؤثر", "تفکر طراحی (Design Thinking)"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>
            </section>

            {/* CONTACT SECTION */}
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