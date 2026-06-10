import { notFound } from 'next/navigation';
import ContributionDetails from './_components/ContributionDetails';
import { COMMUNITY_CONTRIBUTIONS } from '@/lib/data';
import { Metadata } from 'next';

export const generateStaticParams = async () => {
    return COMMUNITY_CONTRIBUTIONS.projectInfos.map((p) => ({ slug: p.slug }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const project = COMMUNITY_CONTRIBUTIONS.projectInfos.find((p) => p.slug === slug);

    return {
        title: `${project?.name} - Open Source Contributions`,
        description: project?.description,
    } as Metadata;
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const project = COMMUNITY_CONTRIBUTIONS.projectInfos.find((p) => p.slug === slug);

    if (!project) {
        return notFound();
    }

    // Filter MRs and issues related to this project name
    const projectMRs = COMMUNITY_CONTRIBUTIONS.mergeRequests.filter(
        (mr) => mr.project === project.name
    );
    const projectIssues = COMMUNITY_CONTRIBUTIONS.issues.filter(
        (issue) => issue.project === project.name
    );

    return (
        <ContributionDetails 
            project={project} 
            mrs={projectMRs} 
            issues={projectIssues} 
        />
    );
};

export default Page;
