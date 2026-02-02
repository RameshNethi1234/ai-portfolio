import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
    {
        title: "Shopprop",
        tech: "Cloud-Native | Serverless | AWS | Azure AI",
        details: [
            "Designed end-to-end cloud-native, serverless architecture (Lambda, API Gateway, DynamoDB, S3).",
            "Migrated NoSQL to PostgreSQL, reducing data retrieval time by 75% and API latency by 50%.",
            "Integrated Azure AI Agents to automate ticket creation, reducing manual work by 50% using AI.",
            "Built multi-tenant secure APIs with filtering, sorting, and cursor-based pagination.",
            "Designed CI/CD pipelines in Azure DevOps with Terraform."
        ]
    },
    {
        title: "Stripe Payment Service",
        tech: "SaaS | Fintech | AWS Step Functions",
        details: [
            "Built robust, serverless Stripe payment & order management system using AWS Lambda & DynamoDB.",
            "Automated payment processing and invoice delivery using Python Lambda functions.",
            "Orchestrated post-payment business logic with AWS Step Functions.",
            "Provisioned all infrastructure as code (IaC) using Terraform.",
            "Implemented comprehensive logging and error handling with AWS CloudWatch."
        ]
    }
];

function TiltCard({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
                width: '100%',
                height: '100%'
            }}
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                    width: '100%',
                    height: '100%'
                }}
            >
                {children}
            </div>
        </motion.div>
    );
}

export function Projects() {
    return (
        <section style={{ padding: '4rem 2rem', width: '100vw', perspective: '1000px' }}>
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="neon-text"
                style={{
                    fontSize: '3rem',
                    marginBottom: '4rem',
                    textAlign: 'center',
                    letterSpacing: '0.2rem'
                }}
            >
                PROJECTS
            </motion.h2>

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '4rem'
            }}>
                {projects.map((project, index) => (
                    <div key={index} style={{ height: '100%', minHeight: '400px' }}>
                        <TiltCard>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="glass-panel"
                                style={{
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%',
                                    background: 'rgba(20, 20, 20, 0.6)'
                                }}
                            >
                                <div>
                                    <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#fff', transform: "translateZ(30px)" }}>{project.title}</h3>
                                    <p style={{ color: 'var(--color-primary)', fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: 'bold', transform: "translateZ(25px)" }}>
                                        {project.tech}
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, transform: "translateZ(20px)" }}>
                                        {project.details.map((detail, i) => (
                                            <li key={i} style={{ marginBottom: '0.8rem', fontSize: '0.95rem', color: '#ccc', lineHeight: '1.5', display: 'flex', gap: '0.5rem' }}>
                                                <span style={{ color: 'var(--color-secondary)' }}>•</span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        marginTop: '2rem',
                                        padding: '0.8rem 1.5rem',
                                        background: 'transparent',
                                        border: '1px solid var(--color-primary)',
                                        color: 'var(--color-primary)',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        fontSize: '0.9rem',
                                        alignSelf: 'flex-start',
                                        transform: "translateZ(30px)"
                                    }}
                                >
                                    Learn More
                                </motion.button>
                            </motion.div>
                        </TiltCard>
                    </div>
                ))}
            </div>
        </section>
    );
}
