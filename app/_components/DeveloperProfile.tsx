'use client';
import SectionTitle from '@/components/SectionTitle';
import { DEVELOPER_PROFILES } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { Github, GitMerge } from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const DeveloperProfile = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                    end: 'bottom 60%',
                    toggleActions: 'play none none reverse',
                },
            });

            tl.from('.profile-card', {
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power3.out',
            });
        },
        { scope: containerRef },
    );

    const getIcon = (name: string) => {
        switch (name.toLowerCase()) {
            case 'github':
                return <Github size={32} />;
            case 'gitlab':
                return <GitMerge size={32} />;
            default:
                return (
                    <Image 
                        src="/logo/swecha-birds-icon.png" 
                        alt="Swecha Icon" 
                        width={32} 
                        height={32} 
                        className="brightness-0 invert transition-all"
                    />
                );
        }
    };

    return (
        <section className="py-section" id="developer-profiles">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Developer Showcase" />

                <div className="grid md:grid-cols-3 gap-8">
                    {DEVELOPER_PROFILES.map((profile, index) => (
                        <a
                            key={index}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-card group flex flex-col p-8 rounded-3xl border border-muted-foreground/10 bg-muted/20 hover:bg-muted/40 hover:border-primary/50 transition-all duration-500"
                        >
                            <div className="mb-6 p-4 w-fit rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                                {getIcon(profile.name)}
                            </div>
                            
                            <h3 className="text-3xl font-anton uppercase mb-4 tracking-wide">
                                {profile.name}
                            </h3>
                            
                            <p className="text-muted-foreground text-lg leading-relaxed grow">
                                {profile.description}
                            </p>
                            
                            <div className="mt-8 flex items-center gap-2 text-primary font-medium uppercase text-sm tracking-widest group-hover:gap-4 transition-all duration-300">
                                View Profile <span>&rarr;</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DeveloperProfile;
