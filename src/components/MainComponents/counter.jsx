'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Counter = ({ number, start }) => {
    const [inView, setInView] = useState(false);
    const [count, setCount] = useState(start);

    useEffect(() => {
        if (inView) {
            const timer = setInterval(() => {
                setCount((prev) => {
                    if (prev >= number) {
                        clearInterval(timer);
                        return number;
                    }
                    return Math.min(prev + Math.ceil((number - start) / 100), number);
                });
            }, 20); // Adjust the interval duration for smoother animation
        }
    }, [inView, number, start]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.1 }
        );
        const el = document.querySelector('.counter'); 
        if (el) {
            observer.observe(el);
        }
        return () => {
            if (el) {
                observer.unobserve(el);
            }
        };
    }, []);

    return (
        <div className="counter text-center">
            <motion.h3
                className="text-4xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {count.toFixed(0)}
            </motion.h3>
        </div>
    );
};

export default Counter;
