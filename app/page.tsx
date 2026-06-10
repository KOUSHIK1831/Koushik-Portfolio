import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Community from './_components/Community';
import Experiences from './_components/Experiences';
import InternshipContributions from './_components/InternshipContributions';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';
import Certifications from './_components/Certifications';
import ContactCard from './_components/ContactCard';

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <Skills />
            <ProjectList />
            <Community />
            <InternshipContributions />
            <Experiences />
            <Certifications />
            <ContactCard />
        </div>
    );
}
