import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-20 relative border-t border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-mesh opacity-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-6 tracking-tight">Ashwani <span className="text-primary-glow">Patidar</span></h2>
                        <p className="text-slate-400 max-w-sm mb-8">
                            Open to new opportunities and collaborations in full-stack 개발. Let's build something amazing together.
                        </p>
                        <div className="flex gap-4">
                            {[Github, Linkedin, Mail].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 glass-card flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all text-slate-400">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">Contact</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-center gap-3"><Mail size={18} className="text-primary" /> ptdrashvin21@gmail.com</li>
                            <li className="flex items-center gap-3"><Phone size={18} className="text-primary" /> +91-9171575205</li>
                            <li className="flex items-center gap-3"><MapPin size={18} className="text-primary" /> Bhopal (MP), India</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                            <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                            <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
                            <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Ashwani Patidar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
