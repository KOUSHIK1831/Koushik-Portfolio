import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center pb-10" id="footer">
            <div className="container">
                <div className="pt-8 border-t border-muted-foreground/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-muted-foreground text-sm order-2 md:order-1">
                            Built by <span className="text-foreground font-medium">{GENERAL_INFO.name}</span> &copy; {new Date().getFullYear()}
                        </p>
                        
                        <div className="flex gap-6 order-1 md:order-2">
                            {SOCIAL_LINKS.map((link) => (
                                <a 
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-widest font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <p className="text-muted-foreground/50 text-[10px] mt-8 uppercase tracking-[0.2em]">
                        Inspired by Tajmirul Islam&apos;s Design
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
