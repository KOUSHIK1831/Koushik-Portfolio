'use client';
import TransitionLink from '@/components/TransitionLink';
import { IProjectInfo, IMergeRequest, IIssue } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowLeft, FolderGit2, GitPullRequest, GitMerge, CircleDot, XCircle, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface Props {
    project: IProjectInfo;
    mrs: IMergeRequest[];
    issues: IIssue[];
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const statusConfig: Record<string, { text: string; bg: string; border: string; icon: typeof GitMerge; label: string }> = {
    merged: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/25', icon: GitMerge, label: 'MERGED' },
    opened: { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/25', icon: CircleDot, label: 'OPEN' },
    closed: { text: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/25', icon: XCircle, label: 'CLOSED' },
};

function extractMRNumber(url: string): string {
    const match = url.match(/merge_requests\/(\d+)/);
    return match ? `!${match[1]}` : '';
}

function extractIssueNumber(url: string): string {
    const match = url.match(/issues\/(\d+)/);
    return match ? `#${match[1]}` : '';
}

const ContributionDetails = ({ project, mrs, issues }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            gsap.set('.fade-in-el', {
                autoAlpha: 0,
                y: 35,
            });

            const tl = gsap.timeline({
                delay: 0.4,
            });

            tl.to('.fade-in-el', {
                autoAlpha: 1,
                y: 0,
                stagger: 0.08,
                duration: 0.6,
                ease: 'power2.out',
            });
        },
        { scope: containerRef }
    );
    return (
        <section className="pt-8 pb-24 min-h-screen bg-background">
            <div className="container max-w-6xl" ref={containerRef}>
                {/* Back Link */}
                <div className="fade-in-el opacity-0 mb-12">
                    <TransitionLink
                        back
                        href="/"
                        className="inline-flex gap-2 items-center group h-12 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="group-hover:-translate-x-1 group-hover:text-primary transition-all duration-300" size={16} />
                        Back to Portfolio
                    </TransitionLink>
                </div>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
                    {/* Main title and description */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="fade-in-el opacity-0 flex flex-wrap items-center gap-3">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-primary/20 text-primary bg-primary/5">
                                {project.category}
                            </span>
                        </div>
                        <h1 className="fade-in-el opacity-0 text-4xl sm:text-5xl lg:text-6xl font-anton leading-tight">
                            {project.name}
                        </h1>
                        <p className="fade-in-el opacity-0 text-base sm:text-lg text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Metadata Panel */}
                    <div className="fade-in-el opacity-0 rounded-2xl border border-muted-foreground/10 bg-muted/5 p-6 space-y-6">
                        {project.projectUrl && (
                            <div>
                                <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Repository</span>
                                <a
                                    href={project.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors text-foreground"
                                >
                                    <FolderGit2 size={14} className="text-muted-foreground" />
                                    View Codebase
                                    <ArrowUpRight size={12} className="text-muted-foreground" />
                                </a>
                            </div>
                        )}

                        {project.allMRsUrl && (
                            <div>
                                <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Contribution List</span>
                                <a
                                    href={project.allMRsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors text-foreground"
                                >
                                    <GitPullRequest size={14} className="text-muted-foreground" />
                                    GitLab Merge Requests
                                    <ArrowUpRight size={12} className="text-muted-foreground" />
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Merge Requests Grid */}
                {mrs.length > 0 && (
                    <div className="mb-16">
                        <div className="fade-in-el opacity-0 flex items-center gap-4 mb-8">
                            <h2 className="font-anton text-2xl tracking-wider text-foreground">Merge Requests</h2>
                            <div className="flex-1 h-px bg-muted-foreground/10" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[...mrs]
                                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                                .map((mr) => {
                                    const mrNum = extractMRNumber(mr.url);

                                    return (
                                        <a
                                            key={`mr-${mr.id}`}
                                            href={mr.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="fade-in-el opacity-0 group/card block rounded-xl border border-muted-foreground/10 bg-muted/5 hover:bg-muted/10 hover:border-muted-foreground/20 transition-all duration-200 overflow-hidden"
                                        >
                                            {/* Top accent line */}
                                            <div
                                                className="h-0.5 w-full"
                                                style={{ background: `linear-gradient(to right, ${project.accentColor}50, transparent)` }}
                                            />
                                            <div className="p-5">
                                                <div className="flex items-center gap-1.5 mb-3">
                                                    <span className="text-xs font-mono font-semibold text-foreground">
                                                        MR {mrNum}
                                                    </span>
                                                </div>
                                                <h4 className="text-sm font-medium leading-snug line-clamp-2 mb-4 group-hover/card:text-primary transition-colors">
                                                    {mr.title}
                                                </h4>
                                                <div className="flex items-center justify-end mt-auto">
                                                    <ArrowUpRight
                                                        size={14}
                                                        className="text-muted-foreground/40 group-hover/card:text-primary group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </a>
                                    );
                                })}
                        </div>
                    </div>
                )}

                {/* Issues Grid */}
                {issues.length > 0 && (
                    <div>
                        <div className="fade-in-el opacity-0 flex items-center gap-4 mb-8">
                            <h2 className="font-anton text-2xl tracking-wider text-foreground">Issues Resolved</h2>
                            <div className="flex-1 h-px bg-muted-foreground/10" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[...issues]
                                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                                .map((issue) => {
                                    const issueNum = extractIssueNumber(issue.url);
                                    const config = statusConfig[issue.status] || statusConfig.opened;
                                    const StatusIcon = config.icon;

                                    return (
                                        <a
                                            key={`issue-${issue.id}`}
                                            href={issue.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="fade-in-el opacity-0 group/card block rounded-xl border border-muted-foreground/10 bg-muted/5 hover:bg-muted/10 hover:border-muted-foreground/20 transition-all duration-200 overflow-hidden"
                                        >
                                            <div
                                                className="h-0.5 w-full"
                                                style={{ background: `linear-gradient(to right, ${project.accentColor}30, transparent)` }}
                                            />
                                            <div className="p-5">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="flex items-center gap-1.5">
                                                        <StatusIcon size={12} className={config.text} />
                                                        <span className={cn('text-xs font-mono font-semibold', config.text)}>
                                                            Issue {issueNum}
                                                        </span>
                                                    </div>
                                                    <span className={cn(
                                                        'text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-md border',
                                                        config.bg, config.text, config.border
                                                    )}>
                                                        {config.label}
                                                    </span>
                                                </div>
                                                <h4 className="text-sm font-medium leading-snug line-clamp-2 mb-4 group-hover/card:text-primary transition-colors">
                                                    {issue.title}
                                                </h4>
                                                <div className="flex items-center justify-end mt-auto">
                                                    <ArrowUpRight
                                                        size={14}
                                                        className="text-muted-foreground/40 group-hover/card:text-primary group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </a>
                                    );
                                })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ContributionDetails;
