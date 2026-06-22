// app/en/page.tsx (نسخه انگلیسی - کامل شده با iOS & SwiftUI)
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiSwift, SiApple } from "react-icons/si";
import Header from "../components/Header";
import ClientButtons from "../components/ClientButtons";
import ProjectCard from "../components/ProjectCard";

export default function EnglishPage() {
    return (
        <div className="container" dir="ltr" lang="en">
            <Header />

            {/* HERO SECTION */}
            <section id="home" className="hero">
                <div className="hero-content">
                    <Image
                        src="/profile.jpg"
                        alt="Maede Mohajer - iOS & Front-End Developer"
                        width={150}
                        height={150}
                        className="avatar"
                        priority
                    />
                    <h1>Mohammad Mohajer</h1>
                    <p className="subtitle">📱 iOS Developer • Swift • SwiftUI • UIKit</p>
                    <p className="subtitle1" style={{marginTop:10}}>💻 Front-End Developer • React.js • Next.js</p>
                    <ClientButtons />
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="card">
                <h2>About Me</h2>
                <p>
                    I've been working as a freelance front-end developer for about two years — from a service company's website to an internal dashboard for managing orders. I built each one from scratch to delivery, always trying to provide a good user experience.
                </p>

                <p>
                    <strong>For the past two years, I've been seriously diving into iOS app development</strong>, building native applications for iOS and iPadOS using <strong>SwiftUI</strong> and <strong>UIKit</strong>. I'm passionate about Apple's design philosophy, smooth user experiences, and the <strong>MVVM architecture</strong>. I always strive to follow Apple's best practices and Human Interface Guidelines in my projects.
                </p>

                <p>
                    What freelancing really taught me is how to manage projects independently. I learned how to meet deadlines without sacrificing quality. Check out my <a href="#projects" className="internal-link">recent projects</a> below.
                </p>

                <p>
                    Now I want to join a professional team. I'd love to work alongside more experienced developers, learn from them, and play a part in building something that actually helps people.
                    <br />
                    <a href="#contact" className="internal-link">Contact me</a> if you have an opportunity.
                </p>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects">
                <h2>My Projects</h2>
                <p className="section-subtitle">Here are some of my recent works as an <strong>iOS and Front-End Developer</strong></p>

                {/* iOS Projects */}
                <h3 className="skills-category">📱 iOS Projects</h3>
                <div className="grid">
                    <ProjectCard
                        name="Smart Notes"
                        desc="SwiftUI • Core Data • CloudKit • iCloud Sharing • Advanced Search • Smart Tagging • Rich Text Editing"
                        link="#"
                    />
                    <ProjectCard
                        name="Personal Budget Manager"
                        desc="SwiftUI • Combine • Core Data • Interactive Charts • Smart Reminders • iCloud Sync • Expense Tracking"
                        link="#"
                    />
                    <ProjectCard
                        name="Fitness Tracker App"
                        desc="UIKit • HealthKit • Core Motion • Custom Animations • Widget • Local Notifications • Workout History"
                        link="#"
                    />
                    <ProjectCard
                        name="Recipe Book"
                        desc="SwiftUI • Core Data • CloudKit • Image Picker • Search & Filter • Favorites • Shopping List Generator"
                        link="#"
                    />
                </div>

                {/* Web Projects */}
                <h3 className="skills-category">💻 Web Projects</h3>
                <div className="grid">
                    <ProjectCard
                        name="Sahim"
                        desc="React 18 • Axios • React Router • Tailwind CSS • Lucide Icons • Real-time dashboard with AJV validation & toast notifications"
                        link="http://iranmcs.ir/sahimnew"
                    />
                    <ProjectCard
                        name="Nikyar"
                        desc="React 19 • TypeScript • Framer Motion • Styled Components • Corporate website with advanced animations & confetti effects"
                        link="https://iranmbm.ir/"
                    />
                    <ProjectCard
                        name="IranMJS"
                        desc="React.js • Context API • Chart.js • Data visualization dashboard with advanced state management"
                        link="https://iranmjs.ir/"
                    />
                    <ProjectCard
                        name="IranCyar"
                        desc="React.js • SASS • BEM • Clean architecture • Fully responsive from scratch"
                        link="https://irancyar.ir/"
                    />
                    <ProjectCard
                        name="DrAliAhmadi"
                        desc="React.js • Tailwind CSS • BEM • Responsive • SEO optimized"
                        link="https://draliahmadii.ir/"
                    />
                    <ProjectCard
                        name="Grand Bazaar"
                        desc="React.js • Tailwind CSS • BEM • Responsive • SEO optimized • E-commerce UI"
                        link="https://grand-bazaar.ir/"
                    />
                    <ProjectCard
                        name="My Budget"
                        desc="React.js • Tailwind CSS • BEM • Responsive • SEO optimized • Financial Dashboard"
                        link="https://mybajet.ir/"
                    />
                </div>
            </section>

            {/* SKILLS SECTION - کامل با iOS & SwiftUI */}
            <section id="skills">
                <h2>Technical Skills</h2>
                <p className="section-subtitle">Technologies and tools I work with daily</p>

                {/* iOS Development */}
                <h3 className="skills-category">📱 iOS Development</h3>
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
                        "Unit Testing (XCTest)",
                        "UI Testing (XCUITest)",
                        "Core Animation",
                        "MapKit",
                        "StoreKit",
                        "Local Authentication (Face ID / Touch ID)"
                    ].map((s) => (
                        <div key={s} className="card center">
                            {s.includes("Swift") ? <SiSwift className="inline-icon" /> :
                                s.includes("UIKit") || s.includes("Core") || s.includes("Health") || s.includes("Map") || s.includes("Store") ? <SiApple className="inline-icon" /> : null}
                            {s}
                        </div>
                    ))}
                </div>

                {/* Front-End Core */}
                <h3 className="skills-category">🎯 Front-End Core</h3>
                <div className="grid small">
                    {["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* Styling & UI */}
                <h3 className="skills-category">🎨 Styling & UI</h3>
                <div className="grid small">
                    {["Tailwind CSS", "SASS/SCSS", "CSS Modules", "Framer Motion", "Responsive Design", "BEM", "Styled Components", "Human Interface Guidelines (HIG)"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* Server Communication */}
                <h3 className="skills-category">🔗 Server Communication</h3>
                <div className="grid small">
                    {["REST APIs", "Axios", "Fetch API", "URLSession", "Alamofire", "GraphQL (Apollo)", "WebSocket"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* State Management */}
                <h3 className="skills-category">📦 State Management</h3>
                <div className="grid small">
                    {["Context API", "React Query", "useState", "useReducer", "SwiftUI @State", "@ObservedObject", "@EnvironmentObject", "Combine Publishers", "Redux Toolkit"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* Tools & Version Control */}
                <h3 className="skills-category">🛠️ Tools & Version Control</h3>
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
                        "📱 TestFlight",
                        "🛠️ Instruments",
                        "🔍 Safari Web Inspector"
                    ].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* Soft Skills */}
                <h3 className="skills-category">💡 Soft Skills</h3>
                <div className="grid small">
                    {["Problem Solving", "Time Management", "Team Collaboration", "Attention to Detail", "Continuous Learning", "Effective Communication", "Design Thinking", "Agile Methodology", "Scrum"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="contact">
                <h2>Get In Touch</h2>
                <p className="section-subtitle">Let's work together on your next project</p>

                <div className="icons">
                    <a className="contact-item" href="tel:09124164734">
                        <Phone size={20} />
                        <span>+98 912 416 4734</span>
                    </a>

                    <a className="contact-item" href="mailto:mohammadmohajer490@@gmail.com">
                        <Mail size={20} />
                        <span>mohammadmohajer490@gmail.com</span>
                    </a>

                    <a className="contact-item" href="https://github.com/mohammad165" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} />
                        <span>github.com/mohammad165</span>
                    </a>
                </div>

                {/* Back to top link */}
                <div className="back-to-top">
                    <a href="#home" className="internal-link">↑ Back to Top</a>
                </div>
            </section>
        </div>
    );
}