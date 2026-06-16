import { GENERAL_INFO } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center pb-10" id="footer">
            <div className="container">
                <div className="pt-8 border-t border-muted-foreground/20">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <p className="text-muted-foreground text-sm">
                            Built by <span className="text-foreground font-medium">{GENERAL_INFO.name}</span> &copy; {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
