import { motion } from 'framer-motion';

export function Background() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, overflow: 'hidden', background: '#050505' }}>
            <div
                style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'radial-gradient(circle at 50% 50%, rgba(0, 243, 255, 0.03) 0%, transparent 70%)',
                }}
            />

            {/* Animated Grid */}
            <div className="grid-background" style={{
                position: 'absolute',
                width: '200%',
                height: '200%',
                top: '-50%',
                left: '-50%',
                backgroundImage: `
                    linear-gradient(rgba(0, 243, 255, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 243, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                transform: 'perspective(500px) rotateX(60deg)',
                opacity: 0.3
            }} />

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        width: Math.random() * 4 + 1 + 'px',
                        height: Math.random() * 4 + 1 + 'px',
                        borderRadius: '50%',
                        background: Math.random() > 0.5 ? 'var(--color-primary)' : 'var(--color-secondary)',
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                        opacity: Math.random() * 0.5 + 0.1,
                        boxShadow: `0 0 ${Math.random() * 10 + 5}px var(--color-primary)`
                    }}
                    animate={{
                        y: [0, Math.random() * -100 - 50],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 10
                    }}
                />
            ))}
        </div>
    );
}
