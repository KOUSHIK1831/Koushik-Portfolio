'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    Passionate about solving real-world problems through software engineering, AI systems, and scalable applications.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    Professional Summary
                </p>

                <div className="grid md:grid-cols-12 mt-9 gap-8">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Koushik.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground">
                            <p className="slide-up-and-fade">
                                I am a final-year Artificial Intelligence and Data Science student at ICFAI Tech Hyderabad (2022-2026). 
                                My journey is driven by a fascination with how data and intelligent algorithms can transform the world.
                            </p>
                            <p className="mt-4 slide-up-and-fade">
                                I have hands-on experience building AI-powered applications using Large Language Models (LLMs), 
                                Retrieval-Augmented Generation (RAG), and Machine Learning. From developing coding assistants 
                                to document-grounded RAG systems, I thrive on bridging the gap between cutting-edge AI research 
                                and practical, user-centric software solutions.
                            </p>
                            <p className="mt-4 slide-up-and-fade">
                                My technical foundation includes deep dives into Prompt Engineering, Cloud Technologies (AWS/Azure), 
                                and Core Computer Science principles like OOP and DSA. I am always eager to learn, collaborate, 
                                and contribute to projects that push the boundaries of what&apos;s possible with AI.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
