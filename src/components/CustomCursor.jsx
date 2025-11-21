import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const [pathData, setPathData] = useState('');
    const ribbonPointsRef = useRef([]);
    const mousePos = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef(null);

    useEffect(() => {
        // Initialize ribbon points
        const ribbonLength = 15;
        for (let i = 0; i < ribbonLength; i++) {
            ribbonPointsRef.current.push({ x: 0, y: 0 });
        }

        // Mouse move handler
        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        // Animation loop
        const animate = () => {
            // Update ribbon trail
            ribbonPointsRef.current[0] = { ...mousePos.current };

            for (let i = 1; i < ribbonPointsRef.current.length; i++) {
                const point = ribbonPointsRef.current[i];
                const prevPoint = ribbonPointsRef.current[i - 1];
                const ease = 0.2;
                point.x += (prevPoint.x - point.x) * ease;
                point.y += (prevPoint.y - point.y) * ease;
            }

            // Create SVG path from points
            if (ribbonPointsRef.current.length > 1) {
                let path = `M ${ribbonPointsRef.current[0].x} ${ribbonPointsRef.current[0].y}`;

                for (let i = 1; i < ribbonPointsRef.current.length - 1; i++) {
                    const xc = (ribbonPointsRef.current[i].x + ribbonPointsRef.current[i + 1].x) / 2;
                    const yc = (ribbonPointsRef.current[i].y + ribbonPointsRef.current[i + 1].y) / 2;
                    path += ` Q ${ribbonPointsRef.current[i].x} ${ribbonPointsRef.current[i].y} ${xc} ${yc}`;
                }

                const lastPoint = ribbonPointsRef.current[ribbonPointsRef.current.length - 1];
                path += ` L ${lastPoint.x} ${lastPoint.y}`;

                setPathData(path);
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <>
            {/* Ribbon Trail */}
            <svg
                className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998] hidden md:block"
            >
                <defs>
                    <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                        <stop offset="50%" stopColor="rgba(147, 51, 234, 0.6)" />
                        <stop offset="100%" stopColor="rgba(236, 72, 153, 0.4)" />
                    </linearGradient>
                </defs>
                <path
                    d={pathData}
                    stroke="url(#ribbonGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.8"
                />
            </svg>

            {/* Main Cursor Dot */}
            <div
                className="fixed top-0 left-0 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block shadow-lg"
                style={{
                    left: `${mousePos.current.x}px`,
                    top: `${mousePos.current.y}px`,
                    transition: 'transform 0.1s ease-out'
                }}
            />
        </>
    );
};

export default CustomCursor;
