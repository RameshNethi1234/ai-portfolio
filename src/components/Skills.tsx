import { motion } from 'framer-motion';

const skills = {
    "Languages & Core": ["Python", "JavaScript", "SQL", "HTML", "CSS"],
    "Cloud & DevOps": ["AWS (Lambda, API Gateway, DynamoDB, S3, RDS)", "Terraform", "Docker", "Azure DevOps", "Azure AI"],
    "Technical & Tools": ["RESTful APIs", "Microservices", "TDD", "Web Services", "Git", "Postman", "VS Code"],
    "AI & Data": ["Ollama", "Azure AI", "Gemini", "JSON", "YAML", "XML"],
    "Soft Skills": ["Leadership", "Event Management", "Public Speaking", "Emotional Intelligence", "Innovation"]
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
};

export function Skills() {
    return (
        <section style={{ padding: '4rem 2rem', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
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
                SKILLS
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                {Object.entries(skills).map(([category, items], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel"
                        style={{ padding: '2.5rem' }}
                    >
                        <h3 style={{
                            color: 'var(--color-primary)',
                            fontSize: '1.6rem',
                            marginBottom: '2rem',
                            borderBottom: '1px solid rgba(0, 243, 255, 0.2)',
                            paddingBottom: '0.75rem',
                            display: 'inline-block'
                        }}>
                            {category}
                        </h3>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
                        >
                            {items.map((skill) => (
                                <motion.span
                                    key={skill}
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: 'rgba(0, 243, 255, 0.15)',
                                        borderColor: 'var(--color-primary)',
                                        boxShadow: '0 0 20px rgba(0, 243, 255, 0.3)'
                                    }}
                                    style={{
                                        padding: '0.75rem 1.5rem',
                                        fontSize: '1rem',
                                        color: '#fff',
                                        borderRadius: '50px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        cursor: 'default',
                                        transition: 'border-color 0.3s, box-shadow 0.3s'
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
