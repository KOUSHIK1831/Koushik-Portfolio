'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { FolderGit2, GitPullRequest, CircleDot, GitCommit } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const InternshipContributions = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            });

            tl.fromTo(
                '.contrib-header-el',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: 'power2.out',
                }
            );

            tl.fromTo(
                '.contrib-card',
                { scale: 0.9, y: 40, opacity: 0 },
                {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.5,
                    ease: 'back.out(1.2)',
                },
                '-=0.3'
            );
        },
        { scope: sectionRef }
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to('.contrib-card, .contrib-header-el', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: sectionRef }
    );

    const cards = [
        {
            icon: FolderGit2,
            iconBg: 'bg-emerald-500/10 text-emerald-400',
            number: '16',
            label: 'Contributed Projects',
        },
        {
            icon: GitPullRequest,
            iconBg: 'bg-purple-500/10 text-purple-400',
            number: '54',
            label: 'Merge Requests',
        },
        {
            icon: CircleDot,
            iconBg: 'bg-amber-500/10 text-amber-400',
            number: '28',
            label: 'Issues',
        },
        {
            icon: GitCommit,
            iconBg: 'bg-blue-500/10 text-blue-400',
            number: '529',
            label: 'Total Commits',
        },
    ];

    const handleScrollToCommunity = () => {
        const target = document.getElementById('community');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section ref={sectionRef} className="pb-section border-t border-muted-foreground/5 bg-background relative overflow-hidden" id="internship-contributions">
            {/* Background subtle glowing circles */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container relative z-10">
                {/* Header Section */}
                <div className="text-left mb-16 space-y-3">
                    <p className="contrib-header-el opacity-0 text-[10px] font-bold tracking-[0.25em] uppercase text-primary">
                        VISWAM AI INTERNSHIP
                    </p>
                    <h2 className="contrib-header-el opacity-0 text-4xl sm:text-5xl md:text-6xl font-anton uppercase tracking-tight leading-none text-foreground">
                        My <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-400">Contributions</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, i) => {
                        const IconComponent = card.icon;
                        return (
                            <button
                                key={i}
                                onClick={handleScrollToCommunity}
                                className="contrib-card opacity-0 text-left w-full group relative rounded-2xl border border-muted-foreground/10 bg-muted/5 p-6 hover:bg-muted/10 hover:border-primary/25 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1"
                            >
                                {/* Top colored highlight bar on hover */}
                                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/40 group-hover:to-emerald-400/40 transition-all duration-300" />
                                
                                {/* Icon container */}
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${card.iconBg}`}>
                                    <IconComponent size={22} />
                                </div>

                                {/* Number count */}
                                <div className="text-4xl sm:text-5xl font-anton text-primary bg-clip-text text-transparent bg-gradient-to-br from-primary to-emerald-400 mb-2">
                                    {card.number}
                                </div>

                                {/* Label */}
                                <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                    {card.label}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default InternshipContributions;
