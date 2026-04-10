import { useEffect } from 'react';

export default function useScrollFadeIn() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(el => {
                    if (el.isIntersecting) {
                        el.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.12 }
        );
        
        // Timeout to allow dynamic components to render before observing
        const timeoutId = setTimeout(() => {
            const targets = document.querySelectorAll('.fade-in');
            targets.forEach(t => observer.observe(t));
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            const targets = document.querySelectorAll('.fade-in');
            targets.forEach(t => observer.unobserve(t));
        };
    }, []);
}
