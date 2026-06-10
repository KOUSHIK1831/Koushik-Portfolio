'use client';
import SectionTitle from '@/components/SectionTitle';
import { CERTIFICATIONS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { Award } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Certifications = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'bottom 60%',
                    toggleActions: 'play none none reverse',
                },
            });

            tl.from('.cert-card', {
                y: 60,
                opacity: 0,
                scale: 0.9,
                stagger: 0.2,
                duration: 0.8,
                ease: 'back.out(1.7)',
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="certifications">
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
                            
                            <div className="relative z-10">
                                <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 text-primary">
                                    <Award size={28} />
                                </div>
                                <h3 className="text-2xl font-anton uppercase leading-tight mb-2">
                                    {cert.name}
                                </h3>
                                <p className="text-muted-foreground">
                                    Issued by {cert.issuer}
                                </p>
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
