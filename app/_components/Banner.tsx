'use client';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Terminal, Sparkles } from 'lucide-react';
import Image from 'next/image';

// Custom GitLab Icon component
const GitLabIcon = ({ size = 24 }: { size?: number }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.06 3.25a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.73-6.88a.74.74 0 0 0 .27-.83Z"></path>
    </svg>
);

// Typewriter hook
const useTypewriter = (texts: string[], speed = 80, deleteSpeed = 40, pauseTime = 2000) => {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentFullText = texts[textIndex];

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentFullText.length) {
                    setDisplayText(currentFullText.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentFullText.slice(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? deleteSpeed : speed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, textIndex, texts, speed, deleteSpeed, pauseTime]);

    return displayText;
};

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const typedRole = useTypewriter(
        ['AI Engineer', 'ML Enthusiast', 'Problem Solver', 'Software Developer'],
        90,
        50,
        2500
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );

            // Entrance animations
            const entranceTl = gsap.timeline({ delay: 0.2 });

            entranceTl.fromTo(
                '.banner-left-line',
                { scaleY: 0 },
                { scaleY: 1, duration: 0.8, ease: 'power3.out', transformOrigin: 'top' },
            );

            entranceTl.fromTo(
                '.banner-greeting',
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' },
                '-=0.4',
            );

            entranceTl.fromTo(
                '.banner-name-word',
                { opacity: 0, y: 80, rotateX: 40 },
                { opacity: 1, y: 0, rotateX: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12 },
                '-=0.2',
            );

            entranceTl.fromTo(
                '.banner-role-line',
                { opacity: 0, width: 0 },
                { opacity: 1, width: '100%', duration: 0.6, ease: 'power2.out' },
                '-=0.3',
            );

            entranceTl.fromTo(
                '.banner-desc',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
                '-=0.2',
            );

            entranceTl.fromTo(
                '.banner-cta-btn',
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.5)', stagger: 0.1 },
                '-=0.2',
            );

            entranceTl.fromTo(
                '.banner-social-link',
                { opacity: 0, x: -15 },
                { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', stagger: 0.06 },
                '-=0.1',
            );

            entranceTl.fromTo(
                '.banner-terminal',
                { opacity: 0, y: 30, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out' },
                '-=0.5',
            );

            entranceTl.fromTo(
                '.banner-stats-item',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', stagger: 0.1 },
                '-=0.3',
            );

            // Floating glow animation
            gsap.to('.glow-orb', {
                y: -20,
                duration: 3,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
            });
        },
        { scope: containerRef },
    );

    const handleScrollToWork = () => {
        const section = document.getElementById('selected-projects');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    const handleGetInTouch = () => {
        const section = document.getElementById('contact');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    const firstName = GENERAL_INFO.name.split(' ')[0];
    const restOfName = GENERAL_INFO.name.split(' ').slice(1).join(' ');

    return (
        <section className="relative overflow-hidden" id="banner">
            {/* Ambient glow orbs */}
            <div className="glow-orb absolute top-[15%] right-[10%] w-[350px] h-[350px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none" />
            <div className="glow-orb absolute bottom-[20%] left-[5%] w-[250px] h-[250px] rounded-full bg-secondary/[0.03] blur-[80px] pointer-events-none" style={{ animationDelay: '1.5s' }} />

            {/* Dot grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
            }} />

            <div
                className="container h-[100svh] min-h-[750px] flex items-center relative z-10"
                ref={containerRef}
            >
                {/* Main Content Grid */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
                    
                    {/* Left - Main Content */}
                    <div className="relative">
                        {/* Decorative left accent line */}
                        <div className="banner-left-line absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-transparent hidden md:block" />

                        {/* Status badge */}
                        <div className="slide-up-and-fade banner-greeting mb-6 flex items-center gap-3">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20">
                                <span className="size-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-xs text-primary font-semibold uppercase tracking-widest">
                                    Open to opportunities
                                </span>
                            </div>
                        </div>

                        {/* Name heading */}
                        <div className="slide-up-and-fade mb-2" style={{ perspective: '600px' }}>
                            <h1 className="leading-[1.05]">
                                <span className="banner-name-word block text-3xl sm:text-4xl md:text-5xl font-roboto-flex font-light text-muted-foreground/70 mb-1">
                                    Hello, I&apos;m
                                </span>
                                <span className="banner-name-word block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-anton text-foreground tracking-tight">
                                    {firstName}
                                </span>
                                <span className="banner-name-word block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-anton tracking-tight">
                                    <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
                                        {restOfName}
                                    </span>
                                </span>
                            </h1>
                        </div>

                        {/* Dynamic role with typewriter */}
                        <div className="slide-up-and-fade mb-6 banner-role-line overflow-hidden">
                            <div className="flex items-center gap-3 py-3 border-b border-dashed border-[#2a2a2a]">
                                <Sparkles size={16} className="text-primary shrink-0" />
                                <span className="text-lg sm:text-xl font-roboto-flex text-foreground/90 font-medium">
                                    {typedRole}
                                    <span className="inline-block w-[2px] h-5 bg-primary ml-1 animate-pulse" />
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="banner-desc slide-up-and-fade text-base sm:text-lg text-muted-foreground max-w-[520px] leading-relaxed mb-8">
                            Building intelligent solutions at the intersection of{' '}
                            <span className="text-foreground font-medium">AI</span>,{' '}
                            <span className="text-foreground font-medium">Machine Learning</span>, and{' '}
                            <span className="text-foreground font-medium">Software Engineering</span>
                            . Turning complex problems into elegant, scalable systems.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-3 mb-10 slide-up-and-fade">
                            <button
                                onClick={handleScrollToWork}
                                className="banner-cta-btn group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary text-background font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:scale-[1.03] active:scale-[0.98]"
                            >
                                <span className="relative z-10">Explore My Work</span>
                                <ChevronDown size={16} className="relative z-10 group-hover:translate-y-0.5 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                            <button
                                onClick={handleGetInTouch}
                                className="banner-cta-btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-[#2a2a2a] text-foreground font-semibold text-sm tracking-wide hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                            >
                                Let&apos;s Connect
                            </button>
                        </div>

                        {/* Social Links - horizontal */}
                        <div className="flex items-center gap-1 slide-up-and-fade">
                            <span className="text-xs text-muted-foreground/50 uppercase tracking-widest mr-3 hidden sm:inline">Find me</span>
                            {[
                                { href: GENERAL_INFO.linkedinUrl, icon: <Linkedin size={18} />, label: 'LinkedIn', external: true },
                                { href: `mailto:${GENERAL_INFO.email}`, icon: <Mail size={18} />, label: 'Email', external: false },
                                { href: GENERAL_INFO.githubUrl, icon: <Github size={18} />, label: 'GitHub', external: true },
                                { href: GENERAL_INFO.gitlabUrl, icon: <GitLabIcon size={18} />, label: 'GitLab', external: true },
                                { href: GENERAL_INFO.swechaUrl, icon: (
                                    <Image 
                                        src="/logo/swecha-birds-icon.png" 
                                        alt="Swecha" 
                                        width={18} 
                                        height={18} 
                                        className="brightness-0 invert opacity-70"
                                    />
                                ), label: 'Swecha', external: true },
                            ].map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.external ? '_blank' : undefined}
                                    rel={link.external ? 'noopener noreferrer' : undefined}
                                    className="banner-social-link p-2.5 rounded-lg text-muted-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-200 flex items-center justify-center"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right - Terminal Card + Stats */}
                    <div className="hidden lg:flex flex-col gap-5 w-[320px]">
                        {/* Terminal-style card */}
                        <div className="banner-terminal slide-up-and-fade rounded-2xl border border-[#1e1e1e] bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden shadow-2xl shadow-black/30">
                            {/* Terminal header */}
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#0e0e0e]">
                                <div className="flex gap-1.5">
                                    <span className="size-3 rounded-full bg-red-500/80" />
                                    <span className="size-3 rounded-full bg-yellow-500/80" />
                                    <span className="size-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="flex items-center gap-1.5 ml-auto text-muted-foreground/40">
                                    <Terminal size={12} />
                                    <span className="text-[10px] font-mono">koushik@dev</span>
                                </div>
                            </div>

                            {/* Terminal body */}
                            <div className="p-4 font-mono text-xs leading-relaxed space-y-2">
                                <div>
                                    <span className="text-primary">$</span>{' '}
                                    <span className="text-muted-foreground">cat about.json</span>
                                </div>
                                <div className="text-muted-foreground/70 pl-2 border-l-2 border-[#1a1a1a]">
                                    <div>{'{'}</div>
                                    <div className="pl-3">
                                        <span className="text-emerald-400">&quot;focus&quot;</span>
                                        <span className="text-muted-foreground/40">: </span>
                                        <span className="text-amber-300">&quot;AI/ML&quot;</span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="text-emerald-400">&quot;passion&quot;</span>
                                        <span className="text-muted-foreground/40">: </span>
                                        <span className="text-amber-300">&quot;Building intelligent systems&quot;</span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="text-emerald-400">&quot;learning&quot;</span>
                                        <span className="text-muted-foreground/40">: </span>
                                        <span className="text-sky-300">true</span>
                                    </div>
                                    <div>{'}'}</div>
                                </div>
                                <div className="flex items-center gap-1 pt-1">
                                    <span className="text-primary">$</span>
                                    <span className="inline-block w-[6px] h-3.5 bg-primary/70 animate-pulse" />
                                </div>
                            </div>
                        </div>

                        {/* Mini Stats */}
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { value: '2+', label: 'Internships' },
                                { value: '8+', label: 'AI Projects' },
                                { value: '6+', label: 'Certifications' },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="banner-stats-item slide-up-and-fade text-center p-3 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a]/50 hover:border-primary/20 transition-colors duration-300"
                                >
                                    <div className="text-2xl font-anton text-primary mb-0.5">
                                        {stat.value}
                                    </div>
                                    <div className="text-[10px] text-muted-foreground/60 uppercase tracking-wider font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 slide-up-and-fade">
                    <div className="flex flex-col items-center gap-2 text-muted-foreground/30 animate-bounce">
                        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
                        <div className="w-[1px] h-6 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
