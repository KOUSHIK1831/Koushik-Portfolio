'use client';
import SectionTitle from '@/components/SectionTitle';
import { COMMUNITY_CONTRIBUTIONS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useMemo, useRef } from 'react';
import { cn } from '@/lib/utils';

import TransitionLink from '@/components/TransitionLink';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Community = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { mergeRequests, issues, projectInfos, categories } = COMMUNITY_CONTRIBUTIONS;

    // Build lookups
    const projectData = useMemo(() => {
        const mrsByProject: Record<string, typeof mergeRequests> = {};
        const issuesByProject: Record<string, typeof issues> = {};

        mergeRequests.forEach(mr => {
            if (!mrsByProject[mr.project]) mrsByProject[mr.project] = [];
            mrsByProject[mr.project].push(mr);
        });
        issues.forEach(issue => {
            if (!issuesByProject[issue.project]) issuesByProject[issue.project] = [];
            issuesByProject[issue.project].push(issue);
        });

        const infoMap = new Map(projectInfos.map(p => [p.name, p]));
        return { mrsByProject, issuesByProject, infoMap };
    }, [mergeRequests, issues, projectInfos]);

    // Flat ordered list of projects that have MR contributions
    const projectList = useMemo(() => {
        const ordered: { name: string; category: string }[] = [];
        categories.forEach(cat => {
            cat.projects.forEach(p => {
                const mrs = projectData.mrsByProject[p] || [];
                const iss = projectData.issuesByProject[p] || [];
                if (mrs.length > 0 || iss.length > 0) {
                    ordered.push({ name: p, category: cat.name });
                }
            });
        });
        return ordered;
    }, [categories, projectData]);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'top 80%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.fromTo(
                containerRef.current,
                { y: 150, opacity: 0 },
                { y: 0, opacity: 1 }
            );
        },
        { scope: containerRef },
    );

    let globalIndex = 0;
    let lastCategory = '';

    return (
        <section className="pb-section" id="community">
            <div className="container">
                <SectionTitle title="OPEN SOURCE CONTRIBUTIONS" />

                <div className="group/contributions" ref={containerRef}>
                    <div className="flex flex-col">
                        {projectList.map((item) => {
                            const info = projectData.infoMap.get(item.name);
                            // Show category divider when category changes
                            const showCategoryDivider = item.category !== lastCategory;
                            lastCategory = item.category;
                            const projectSlug = info?.slug || '';
                            globalIndex++;
                            return (
                                <div key={item.name}>
                                    {/* Category divider */}
                                    {showCategoryDivider && (
                                        <div className="flex items-center gap-3 pt-8 pb-3 first:pt-0">
                                            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/60">
                                                {item.category}
                                            </span>
                                            <div className="flex-1 h-px bg-gradient-to-r from-primary/15 to-transparent" />
                                        </div>
                                    )}

                                    {/* Project row — TransitionLink to project details page */}
                                    <TransitionLink
                                        href={`/contributions/${projectSlug}`}
                                        className={cn(
                                            'group/item block py-5 border-b border-muted-foreground/10 transition-all duration-500',
                                            'md:group-hover/contributions:opacity-30 md:hover:!opacity-100',
                                        )}
                                    >
                                        <div className="flex gap-3 md:gap-5 items-start">
                                            {/* Index number — same as Project.tsx */}
                                            <div className="font-anton text-muted-foreground shrink-0 pt-1">
                                                _{globalIndex.toString().padStart(2, '0')}.
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                {/* Title with gradient hover — exact same classes as Project.tsx h4 */}
                                                <h4 className="text-2xl xs:text-4xl sm:text-5xl font-anton transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover/item:bg-left leading-tight">
                                                    {item.name}
                                                </h4>
                                            </div>
                                        </div>
                                    </TransitionLink>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;
