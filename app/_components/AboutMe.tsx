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
                                I studied at ICFAI University, Hyderabad, from July 2022 to May 2026 and earned a B.Tech in Data Science and Artificial Intelligence. I&apos;m interested in how data and intelligent algorithms can solve practical problems.
                            </p>
                            <p className="mt-4 slide-up-and-fade">
                                During my six-month AI Developer internship at Viswam AI, I worked on document-grounded Q&amp;A, multilingual interfaces, and open-source healthcare software. My projects include coding-assistant prompts, machine learning experiments, and full-stack apps that make large language models (LLMs) and retrieval-augmented generation (RAG) useful in everyday workflows.
                            </p>
                            <p className="mt-4 slide-up-and-fade">
                                I work with Python, TypeScript, React, FastAPI, and PostgreSQL. My foundation includes prompt engineering, AWS and Azure fundamentals, object-oriented programming, and data structures and algorithms. I enjoy collaborating on search, multilingual software, and developer tools.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
