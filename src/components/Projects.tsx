import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';

const projects = [
    {
        title: "School Education Portal 3.0",
        description: "Collaborated on enhancing modules for this large-scale web application, focusing on responsive UI and RESTful API integration.",
        tags: ["React.js", ".NET", "SQL Server", "Minimal API"],
        category: "Full Stack",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800",
        link: "https://ems.educationportal3.in/"
    },
    {
        title: "Banking Management System",
        description: "A comprehensive core Java application designed to handle basic banking operations, user accounts, and transaction logging.",
        tags: ["Core Java", "OOPs", "File Handling"],
        category: "Software",
        image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=800",
        link: "https://github.com/Ashwaniptdr/Banking-management"
    },
    {
        title: "Smart Notice Board",
        description: "A digital notice distribution system designed for real-time information sharing within organizations.",
        tags: ["React.js", "State Management", "Web"],
        category: "Web App",
        image: "https://images.unsplash.com/photo-1586282391129-56a991ab571f?auto=format&fit=crop&q=80&w=800",
        link: "https://github.com/Ashwaniptdr/smartnotice"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-background-darker/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Featured <span className="text-primary-glow">Projects</span></h2>
                        <p className="text-slate-400 max-w-xl">A selection of my recent work in full-stack development and system architecture.</p>
                    </div>
                    <a href="https://github.com/Ashwaniptdr" target="_blank" className="flex items-center gap-2 text-primary hover:text-primary-glow font-medium transition-colors">
                        View all on GitHub <ExternalLink size={18} />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group glass-card overflow-hidden border-white/5 hover:border-primary/30 transition-all"
                        >
                            <div className="relative h-60 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-xs font-bold text-primary-glow border border-primary/20">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 relative">
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary-glow transition-colors">{project.title}</h3>
                                <p className="text-slate-400 mb-6 line-clamp-2">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, j) => (
                                        <span key={j} className="text-[10px] uppercase tracking-wider font-bold text-slate-500 border border-slate-500/20 px-2 py-0.5 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3 glass-card text-sm font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-white"
                                    >
                                        <Folder size={16} /> View Live
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 glass-card flex items-center justify-center hover:text-primary transition-all text-white"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
