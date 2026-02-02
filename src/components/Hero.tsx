import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <section
            style={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                // background removed as it is now global
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', zIndex: 2 }}
            >
                <h1
                    className="neon-text"
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)', // Responsive font size
                        fontWeight: 800,
                        marginBottom: '1rem',
                        letterSpacing: '0.5rem',
                        lineHeight: 1.1,
                    }}
                >
                    RAMESH NETHI
                </h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                        color: 'var(--color-primary)',
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        marginBottom: '3rem',
                    }}
                >
                    Cloud & Backend Engineer
                </motion.p>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <Link to="/projects" style={{ textDecoration: 'none' }}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass-panel"
                            style={{
                                padding: '1rem 2.5rem',
                                borderRadius: '30px',
                                color: '#fff',
                                border: '1px solid var(--color-primary)',
                                background: 'rgba(0, 243, 255, 0.1)',
                                cursor: 'pointer'
                            }}
                        >
                            View Work
                        </motion.div>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass-panel"
                            style={{
                                padding: '1rem 2.5rem',
                                borderRadius: '30px',
                                color: '#ccc',
                                border: '1px solid rgba(255,255,255,0.2)',
                                cursor: 'pointer'
                            }}
                        >
                            Contact Me
                        </motion.div>
                    </Link>
                </div>
            </motion.div>

            {/* Scroll indicator removed as it is no longer a scroll page */}
        </section>
    );
}
