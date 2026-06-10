'use client';
import { GENERAL_INFO } from '@/lib/data';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
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

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ContactCard = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.contact-card-anim', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="contact" ref={containerRef}>
            <div className="container flex justify-center">
                <div className="contact-card-anim w-full max-w-[950px] bg-muted/20 border border-muted-foreground/10 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-5/12">
                        <h2 className="text-5xl md:text-6xl font-anton uppercase leading-none mb-6">
                            Let&apos;s <span className="text-primary">Connect</span>
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            I&apos;m currently open to opportunities and collaborations on exciting AI projects. 
                            Feel free to reach out through any of these platforms!
                        </p>
                    </div>

                    <div className="md:w-7/12 w-full grid gap-6">
                        <a 
                            href={`mailto:${GENERAL_INFO.email}`}
                            className="flex items-center gap-4 p-5 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/30 hover:bg-muted/50 transition-all group"
                        >
                            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                <Mail size={24} />
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                                <p className="text-lg font-medium truncate">{GENERAL_INFO.email}</p>
                            </div>
                        </a>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <a 
                                href={GENERAL_INFO.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/30 hover:bg-muted/50 transition-all group"
                            >
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                    <Linkedin size={20} />
                                </div>
                                <p className="text-[10px] font-bold uppercase tracking-widest">LinkedIn</p>
                            </a>
                            <a 
                                href={GENERAL_INFO.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/30 hover:bg-muted/50 transition-all group"
                            >
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                    <Github size={20} />
                                </div>
                                <p className="text-[10px] font-bold uppercase tracking-widest">GitHub</p>
                            </a>
                            <a 
                                href={GENERAL_INFO.gitlabUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/30 hover:bg-muted/50 transition-all group"
                            >
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                    <GitLabIcon size={20} />
                                </div>
                                <p className="text-[10px] font-bold uppercase tracking-widest">GitLab</p>
                            </a>
                            <a 
                                href={GENERAL_INFO.swechaUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/30 hover:bg-muted/50 transition-all group"
                            >
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                    <Image 
                                        src="/logo/swecha-birds-icon.png" 
                                        alt="Swecha" 
                                        width={20} 
                                        height={20} 
                                        className="brightness-0 invert group-hover:brightness-0 group-hover:invert transition-all"
                                    />
                                </div>
                                <p className="text-[10px] font-bold uppercase tracking-widest">Swecha</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCard;
