import { useEffect, useRef } from "react";
import gsap from "gsap";

const LightingEffect = ({ count = 20 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const particles = containerRef.current.querySelectorAll(".particle");

    particles.forEach((particle) => {
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      const deltaX = Math.random() * 200 - 100; // move -100 to +100 px
      const deltaY = Math.random() * 200 - 100;

      // Set initial position
      gsap.set(particle, {
        x: startX,
        y: startY,
        opacity: Math.random() * 0.5 + 0.3,
      });

      // Animate in random direction
      gsap.to(particle, {
        x: startX + deltaX,
        y: startY + deltaY,
        duration: Math.random() * 8 + 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 3,
      });

      // Optional: pulse the opacity
      gsap.to(particle, {
        opacity: Math.random() * 0.6 + 0.2,
        duration: Math.random() * 4 + 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  const particles = new Array(count).fill(0);

  return (
    <div ref={containerRef} style={styles.container}>
      {particles.map((_, i) => (
        <div key={i} className="particle" style={styles.particle}></div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    overflow: "hidden",
    zIndex: 5,
  },
  particle: {
    position: "absolute",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.8)",
    boxShadow: "0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 0.5)",
    mixBlendMode: "screen",
  },
};

export default LightingEffect;
