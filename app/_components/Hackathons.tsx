'use client';
import SectionTitle from '@/components/SectionTitle';
import { HACKATHONS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { Trophy } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hackathons = () => {
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

            tl.from('.hackathon-item', {
                x: -50,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="hackathons">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Hackathons" />

                <div className="space-y-10">
                    {HACKATHONS.map((hack, index) => (
                        <div
                            key={index}
                            className="hackathon-item group flex flex-col md:flex-row gap-6 p-8 rounded-2xl border border-muted-foreground/10 bg-muted/20 hover:bg-muted/30 transition-all"
                        >
                            <div className="flex-shrink-0">
                                <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                    <Trophy size={32} />
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-3xl font-anton uppercase mb-2">
                                    {hack.name}
                                </h3>
                                <p className="text-xl text-primary font-medium mb-2">
                                    Project: {hack.project}
                                </p>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {hack.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hackathons;
