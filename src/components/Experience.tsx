import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Software Development Engineer-1",
        company: "MetricDust",
        period: "May 2025 – Present",
        location: "Remote",
        description: [
            "Designed and implemented fully serverless, cloud-native multi-tenant architecture on AWS.",
            "Refactored backend from NoSQL to SQL, achieving 75% reduction in latency.",
            "Engineered architecture-driven schemas and tuned complex SQL queries.",
            "Integrated Azure AI Agents, decreasing manual intervention by 50%.",
            "Provisioned infrastructure with Terraform and built CI/CD pipelines in Azure DevOps.",
            "Coordinated with frontend teams to design scalable APIs."
        ]
    },
    {
        role: "Associate Technical Consultant",
        company: "Argano",
        period: "June 2022 – Apr 2024",
        location: "Hyderabad, Telangana",
        description: [
            "Designed serverless Stripe payment system for Intview SaaS platform.",
            "Developed Python Lambda functions for payments and webhooks.",
            "Orchestrated workflows using AWS Step Functions.",
            "Provisioned cloud infrastructure as code with Terraform.",
            "Built RESTful APIs with custom authorization and CORS support.",
            "Awarded \"Best Team for Client Experience\"."
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
};

export function Experience() {
    return (
        <section style={{ padding: '4rem 2rem', position: 'relative', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="neon-text"
                style={{
                    fontSize: '3.5rem',
                    marginBottom: '5rem',
                    textAlign: 'center',
                    letterSpacing: '0.3rem',
                    fontWeight: 800
                }}
            >
                EXPERIENCE
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="glass-panel"
                        style={{
                            padding: '3rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Background accent */}
                        <div style={{
                            position: 'absolute',
                            top: 0, right: 0,
                            width: '150px', height: '150px',
                            background: 'radial-gradient(circle at top right, rgba(0, 243, 255, 0.1), transparent)',
                            zIndex: 0
                        }} />

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.5rem', letterSpacing: '1px' }}>{exp.role}</h3>
                                    <h4 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', fontWeight: 600 }}>{exp.company}</h4>
                                </div>
                                <div style={{ textAlign: 'right', opacity: 0.9, fontSize: '1rem', color: '#aaa' }}>
                                    <p style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{exp.period}</p>
                                    <p>{exp.location}</p>
                                </div>
                            </div>

                            <motion.ul
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                style={{ listStyle: 'none', padding: 0 }}
                            >
                                {exp.description.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        variants={itemVariants}
                                        style={{
                                            marginBottom: '1rem',
                                            display: 'flex',
                                            gap: '1rem',
                                            fontSize: '1.1rem',
                                            lineHeight: '1.7',
                                            color: '#ccc'
                                        }}
                                    >
                                        <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>//</span>
                                        {item}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
