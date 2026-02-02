import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Background } from './components/Background';
import { PageTransition } from './components/PageTransition';
import './index.css';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Hero /></PageTransition>} />
                <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
                <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
                <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <Background />
            <Navbar />
            <main style={{ paddingTop: '80px', minHeight: '100vh', position: 'relative' }}>
                <AnimatedRoutes />
            </main>
        </Router>
    );
}

export default App;
