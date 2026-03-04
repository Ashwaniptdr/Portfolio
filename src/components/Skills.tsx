import { motion } from 'framer-motion';
import {
    Layout, Server, Database, Settings
} from 'lucide-react';

const skillCategories = [
    {
        title: "Frontend",
        icon: Layout,
        skills: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS"],
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Backend",
        icon: Server,
        skills: [".NET (C#)", "Node.js", "Minimal APIs", "RESTful APIs", "Core Java"],
        color: "from-purple-500/20 to-indigo-500/20"
    },
    {
        title: "Database",
        icon: Database,
        skills: ["SQL Server", "MySQL"],
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        title: "Tools & Extras",
        icon: Settings,
        skills: ["Git", "VS Code", "Visual Studio", "C", "C++"],
        color: "from-orange-500/20 to-red-500/20"
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Technical <span className="text-primary-glow">Expertise</span></h2>
                    <p className="text-slate-400">Languages, frameworks, and tools I use to bring ideas to life.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`p-8 glass-card border-white/5 relative group overflow-hidden`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-6">
                                    <category.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, j) => (
                                        <span
                                            key={j}
                                            className="px-3 py-1 bg-white/5 rounded-full text-sm text-slate-300 border border-white/5 group-hover:border-white/10 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
