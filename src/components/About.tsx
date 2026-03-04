import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
    {
        role: "Master of Computer Application",
        org: "UIT | RGPV , BHOPAL",
        period: "2023-25",
        details: "~ 8.75 CGPA",
        icon: GraduationCap
    },
    {
        role: "Bachelor of Science (Computer Science)",
        org: "DAVV | INDORE (MP)",
        period: "2020-23",
        details: "~ 8.75 CGPA",
        icon: GraduationCap
    }
];

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                            My <span className="text-primary-glow">Journey</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            I am a driven software developer currently pursuing my MCA from RGPV Bhopal. My focus lies in
                            bridging the gap between complex backend architectures and intuitive frontend experiences.
                            As a Full Stack Developer, I've had the opportunity to contribute to significant projects
                            like the School Education Portal 3.0.
                        </p>

                        <div className="space-y-6">
                            {education.map((item, i) => (
                                <div key={i} className="flex gap-6 p-6 glass-card border-white/5 hover:border-primary/20 transition-all group">
                                    <div className="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1 text-white">{item.role}</h3>
                                        <p className="text-slate-400 font-medium">{item.org}</p>
                                        <div className="flex items-center justify-between mt-2">
                                            <span className="text-sm text-slate-500">{item.period}</span>
                                            <span className="text-sm font-semibold text-primary-glow">{item.details}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Photo/Visual Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-full aspect-square max-w-md group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 blur-[80px] group-hover:opacity-30 transition-opacity"></div>
                            <div className="relative z-10 w-full h-full glass-card border-white/20 p-2 overflow-hidden transform group-hover:-rotate-2 transition-transform">
                                <div className="w-full h-full bg-slate-800 rounded-[14px] flex items-center justify-center text-slate-500 overflow-hidden">
                                    <img
                                        src="https://avatars.githubusercontent.com/u/178645917?v=4"
                                        alt="Ashwani Patidar"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 glass-card flex flex-col items-center justify-center p-4 border-white/20 z-20">
                                <span className="text-2xl font-bold text-white">MCA</span>
                                <span className="text-xs text-slate-400">Pursuing</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
