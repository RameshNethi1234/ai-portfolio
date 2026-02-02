import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
    const location = useLocation();
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Experience', path: '/experience' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'center',
                pointerEvents: 'none',
            }}
        >
            <div
                className="glass-panel"
                style={{
                    pointerEvents: 'auto',
                    padding: '0.75rem 2rem',
                    borderRadius: '50px',
                    display: 'flex',
                    gap: '2rem',
                    background: 'rgba(5, 5, 5, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                }}
            >
                {links.map((link) => {
                    const isActive = location.pathname === link.path;

                    return (
                        <Link
                            key={link.name}
                            to={link.path}
                            style={{
                                textDecoration: 'none',
                                color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                opacity: isActive ? 1 : 0.7,
                                transition: 'all 0.3s',
                                letterSpacing: '0.5px',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            {link.name}
                            {isActive && (
                                <motion.div
                                    layoutId="nav-underline"
                                    style={{
                                        width: '100%',
                                        height: '2px',
                                        background: 'var(--color-primary)',
                                        marginTop: '4px',
                                        boxShadow: '0 0 10px var(--color-primary)'
                                    }}
                                />
                            )}
                        </Link>
                    );
                })}
            </div>
        </motion.nav>
    );
}
