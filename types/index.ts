export type Next_Page_Url = string;
// UrlObject;
// | __next_route_internal_types__.StaticRoutes
// | __next_route_internal_types__.DynamicRoutes;

export type Variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'no-color';

export interface IProject {
    title: string;
    year: number;
    description: string;
    role: string;
    techStack: string[];
    thumbnail: string;
    longThumbnail: string;
    images: string[];
    slug: string;
    liveUrl?: string;
    sourceCode?: string;
}

export interface IExperience {
    title: string;
    company: string;
    duration: string;
    description?: string[];
}

export interface IHackathon {
    name: string;
    project: string;
    description: string;
}

export interface ICertification {
    name: string;
    issuer: string;
    link?: string;
}

export type MRStatus = 'merged' | 'opened' | 'closed';

export interface IMergeRequest {
    id: number;
    title: string;
    role: string;
    status: MRStatus;
    date: string;
    url: string;
    project: string;
}

export type IssueStatus = 'opened' | 'closed';

export interface IIssue {
    id: number;
    title: string;
    role: string;
    status: IssueStatus;
    date: string;
    url: string;
    project: string;
}

export interface ICommunityStats {
    totalMRs: number;
    mergedMRs: number;
    openMRs: number;
    closedMRs: number;
    totalIssues: number;
    openIssues: number;
    closedIssues: number;
}

export interface ICommunityMetric {
    label: string;
    value: number;
    description: string;
}

export interface ICommunityHighlight {
    project: string;
    description: string;
    link: string;
    type: 'MR' | 'Issue';
    status: string;
    date: string;
}

export interface IProjectInfo {
    slug: string;
    name: string;
    description: string;
    category: string;
    projectUrl?: string;
    allMRsUrl?: string;
    accentColor: string;
}

export interface ICategoryGroup {
    name: string;
    projects: string[];
}

export interface ICommunityWork {
    stats: ICommunityStats;
    metrics: ICommunityMetric[];
    mergeRequests: IMergeRequest[];
    issues: IIssue[];
    highlights: ICommunityHighlight[];
    projectInfos: IProjectInfo[];
    categories: ICategoryGroup[];
}
