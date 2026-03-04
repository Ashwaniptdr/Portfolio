import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const experiences = [
    {
        role: "Full Stack Developer",
        company: "SFA Technology",
        location: "Bhopal (MP)",
        period: "June 2025 – Present",
        description: [
            "Collaborated with the team to develop and enhance modules of the School Education Portal 3.0 web application.",
            "Contributed to updating and improving the Examination section using React.js for dynamic and responsive UI components.",
            "Developed and integrated Minimal APIs and RESTful APIs to streamline backend communication.",
            "Worked with React, HTML, CSS, JavaScript, TypeScript, .NET, Node.js, and SQL Server for full-stack development tasks."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Work <span className="text-primary-glow">Experience</span></h2>
                        <p className="text-slate-400">Professional path and industry contributions.</p>
                    </div>

                    <div className="space-y-12">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative pl-8 border-l-2 border-primary/30"
                            >
                                <div className="absolute -left-[11px] top-0 w-5 h-5 bg-primary rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)]"></div>

                                <div className="glass-card p-8 border-white/5 hover:border-primary/20 transition-all">
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                            <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm">
                                                <span className="flex items-center gap-1.5"><Building2 size={16} className="text-primary" /> {exp.company}</span>
                                                <span className="flex items-center gap-1.5"><MapPin size={16} className="text-primary" /> {exp.location}</span>
                                                <span className="flex items-center gap-1.5"><Calendar size={16} className="text-primary" /> {exp.period}</span>
                                            </div>
                                        </div>
                                        <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20 text-primary-glow font-bold text-sm">
                                            Ongoing
                                        </div>
                                    </div>

                                    <ul className="space-y-4">
                                        {exp.description.map((point, j) => (
                                            <li key={j} className="flex gap-3 text-slate-400 leading-relaxed">
                                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
