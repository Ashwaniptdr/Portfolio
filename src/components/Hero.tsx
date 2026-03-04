import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

interface HeroProps {
    onShowResume: () => void;
}

export default function Hero({ onShowResume }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-mesh opacity-40 z-0"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary-glow glass-card uppercase border-primary/20">
                            Full Stack Developer
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40">
                            Ashwani Patidar
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                            Passionate about building efficient, user-focused solutions and growing through hands-on software development experience.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap items-center justify-center gap-4 mb-12"
                    >
                        <a
                            href="https://ems.educationportal3.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-glow transition-all shadow-lg shadow-primary/25 flex items-center gap-2 group"
                        >
                            View Projects
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <button
                            onClick={onShowResume}
                            className="px-8 py-4 glass-card text-white rounded-full font-semibold hover:bg-white/10 transition-all border-white/10"
                        >
                            Download CV
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex items-center justify-center gap-6"
                    >
                        {[
                            { icon: Github, href: 'https://github.com/Ashwaniptdr', label: 'GitHub' },
                            { icon: Linkedin, href: '#', label: 'LinkedIn' },
                            { icon: Mail, href: 'mailto:ptdrashvin21@gmail.com', label: 'Email' }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center glass-card hover:border-primary/50 hover:text-primary transition-all text-slate-400"
                                aria-label={social.label}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
            >
                <div className="w-[30px] h-[50px] border-2 border-slate-500/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-slate-500 rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
}
