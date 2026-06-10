'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Experience Timeline" />

                <div className="grid gap-20">
                    {MY_EXPERIENCE.map((item, index) => (
                        <div key={`${item.title}-${index}`} className="experience-item grid md:grid-cols-12 gap-4">
                            <div className="md:col-span-4">
                                <p className="text-xl text-primary font-medium">
                                    {item.duration}
                                </p>
                                <p className="text-2xl mt-1">
                                    {item.company}
                                </p>
                            </div>
                            <div className="md:col-span-8">
                                <p className="text-4xl sm:text-5xl font-anton leading-none mb-4 uppercase">
                                    {item.title}
                                </p>
                                {item.description && (
                                    <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground text-lg">
                                        {item.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
