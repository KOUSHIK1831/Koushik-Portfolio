'use client';
import SectionTitle from '@/components/SectionTitle';
import { CERTIFICATIONS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { Award, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Certifications = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            });

            tl.fromTo(
                '.cert-card',
                { y: 60, opacity: 0, scale: 0.9 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                }
            );
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to('.cert-card', {
                y: -150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="pb-section" id="certifications">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Certifications" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CERTIFICATIONS.map((cert, index) => (
                        <div
                            key={index}
                            className="cert-card group relative overflow-hidden rounded-2xl border border-muted-foreground/20 bg-muted/30 p-8 transition-all hover:bg-muted/50 hover:border-primary/50"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-30">
                                <Award size={80} />
                            </div>
                            
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 text-primary">
                                        <Award size={28} />
                                    </div>
                                    <h3 className="text-2xl font-anton uppercase leading-tight mb-2">
                                        {cert.name}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        Issued by {cert.issuer}
                                    </p>
                                </div>

                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary hover:text-emerald-400 transition-colors w-fit"
                                    >
                                        View Certificate <ArrowUpRight size={14} />
                                    </a>
                                )}

                                {cert.links && (
                                    <div className="mt-6 space-y-2">
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Credentials:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {cert.links.map((subLink, subIdx) => (
                                                <a
                                                    key={subIdx}
                                                    href={subLink.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 px-2 py-1 rounded bg-muted/60 text-[11px] font-medium text-foreground border border-muted-foreground/10 hover:border-primary/30 hover:bg-muted transition-all"
                                                >
                                                    {subLink.label} <ArrowUpRight size={10} />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
