import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export function Contact() {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        // Could add toast notification here
    };

    return (
        <section style={{ padding: '4rem 2rem', minHeight: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="neon-text"
                style={{
                    fontSize: '3rem',
                    marginBottom: '3rem',
                    textAlign: 'center',
                    letterSpacing: '0.2rem'
                }}
            >
                CONTACT
            </motion.h2>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <motion.div
                    whileHover={{ scale: 1.05, borderColor: 'var(--color-primary)' }}
                    className="glass-panel"
                    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', minWidth: '250px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)' }}
                    onClick={() => copyToClipboard('rameshnethi1234@gmail.com')}
                >
                    <Mail size={40} color="var(--color-primary)" />
                    <span style={{ fontSize: '1.1rem' }}>rameshnethi1234@gmail.com</span>
                    <span style={{ fontSize: '0.8rem', color: '#888' }}>Click to Copy</span>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05, borderColor: 'var(--color-accent)' }}
                    className="glass-panel"
                    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', minWidth: '250px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)' }}
                    onClick={() => copyToClipboard('+91 6281405686')}
                >
                    <Phone size={40} color="var(--color-accent)" />
                    <span style={{ fontSize: '1.1rem' }}>+91 6281405686</span>
                    <span style={{ fontSize: '0.8rem', color: '#888' }}>Click to Copy</span>
                </motion.div>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                style={{ marginTop: '4rem', color: '#666', fontSize: '0.9rem' }}
            >
                © 2026 Ramesh Nethi. Built with React & Framer Motion.
            </motion.p>
        </section>
    );
}
