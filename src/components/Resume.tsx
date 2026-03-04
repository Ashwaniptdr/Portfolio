import { Printer, X } from 'lucide-react';

interface ResumeProps {
    onClose: () => void;
}

export default function Resume({ onClose }: ResumeProps) {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm overflow-y-auto print:bg-white print:p-0">
            {/* Controls - Hidden during print */}
            <div className="sticky top-0 z-20 flex justify-center gap-4 py-4 bg-slate-900/50 backdrop-blur-md print:hidden">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-glow transition-all font-medium shadow-lg shadow-primary/20"
                >
                    <Printer size={20} />
                    Print Resume
                </button>
                <button
                    onClick={onClose}
                    className="flex items-center gap-2 px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all font-medium border border-white/10"
                >
                    <X size={20} />
                    Close
                </button>
            </div>

            {/* Resume Content */}
            <div className="max-w-[850px] mx-auto my-8 bg-white text-slate-900 shadow-2xl rounded-sm p-12 print:my-0 print:shadow-none print:rounded-none min-h-[1100px]">
                {/* Header */}
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-bold tracking-[0.1em] text-slate-800 uppercase mb-4">ASHWANI PATIDAR</h1>
                    <div className="text-sm text-slate-600 space-x-4 flex items-center justify-center">
                        <span>Bhopal (MP)</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span>+91-9171575205</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span>ptdrashvin21@gmail.com</span>
                    </div>
                    <div className="mt-8 border-b-2 border-slate-100"></div>
                </header>

                {/* Summary */}
                <section className="mb-10">
                    <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-4 border-l-4 border-slate-200 pl-4">SUMMARY</h2>
                    <p className="text-sm leading-relaxed text-slate-600 px-4 text-justify">
                        Full Stack Developer skilled in React, .NET, Node.js, RESTful APIs, and SQL Server, with experience developing responsive web applications and managing end-to-end project workflows. Passionate about building efficient, user-focused solutions and growing through hands-on, live project experience.
                    </p>
                </section>

                {/* Work Experience */}
                <section className="mb-10">
                    <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-4 border-l-4 border-slate-200 pl-4">WORK EXPERIENCE</h2>
                    <div className="px-4">
                        <div className="flex justify-between items-baseline mb-2">
                            <h3 className="font-bold text-slate-800">Full Stack Developer</h3>
                            <span className="text-xs font-semibold text-slate-500">June 2025 – Present</span>
                        </div>
                        <p className="text-sm text-slate-700 font-medium mb-3">SFA Technology</p>

                        <div className="mb-6">
                            <h4 className="text-sm font-bold text-slate-800 mb-2 underline decoration-slate-200 underline-offset-4">PROJECT: SCHOOL EDUCATION PORTAL 3.0 (LIVE PROJECT)</h4>
                            <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs text-slate-600">
                                <li>Collaborated with the team to develop and enhance modules of the School Education Portal 3.0 web application.</li>
                                <li>Contributed to updating and improving the Examination section using React.js for dynamic and responsive UI components.</li>
                                <li>Developed and integrated Minimal APIs and RESTful APIs to streamline backend communication.</li>
                                <li>Worked with React, HTML, CSS, JavaScript, TypeScript, .NET, Node.js, and SQL Server for full-stack development tasks.</li>
                                <li>Participated in debugging, code optimization, and testing to ensure smooth functionality and performance.</li>
                                <li>Gained practical exposure to real-time project development, agile practices, and end-to-end software workflows.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-10">
                    <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-4 border-l-4 border-slate-200 pl-4">TECHNICAL SKILLS</h2>
                    <div className="grid grid-cols-1 gap-2 text-xs px-4">
                        <p><span className="font-bold w-24 inline-block">Frontend:</span> React.js, HTML, CSS, JavaScript (ES6+), TypeScript, Tailwind CSS</p>
                        <p><span className="font-bold w-24 inline-block">Backend:</span> .NET (C#), Node.js, Core Java, C, C++</p>
                        <p><span className="font-bold w-24 inline-block">Database:</span> SQL Server, MySQL</p>
                        <p><span className="font-bold w-24 inline-block">APIs:</span> RESTful APIs, Minimal APIs</p>
                        <p><span className="font-bold w-24 inline-block">Tools:</span> Git, VS Code, Visual Studio</p>
                    </div>
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-4 border-l-4 border-slate-200 pl-4">EDUCATION</h2>
                    <div className="px-4 space-y-6">
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-bold text-slate-800 text-sm">Master of Computer Application</h3>
                                <span className="text-xs font-semibold text-slate-500">2023-25</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <p className="text-slate-600">UIT | RGPV , BHOPAL</p>
                                <span className="text-slate-700 font-bold">~ 8.75 CGPA</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="font-bold text-slate-800 text-sm">Bachelor of Science (Computer Science)</h3>
                                <span className="text-xs font-semibold text-slate-500">2020-23</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <p className="text-slate-600">DAVV | INDORE (MP)</p>
                                <span className="text-slate-700 font-bold">~ 8.75 CGPA</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
