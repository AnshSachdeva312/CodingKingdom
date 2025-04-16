import { useEffect } from "react";

const CursorTrail = () => {
  useEffect(() => {
    const trail = [];
    const trailLength = 10;
    const baseSize = 24; // smaller initial circle (was 40)
    const sizeDecreaseFactor = 0.95; // gentle decrease for 90% overlap

    for (let i = 0; i < trailLength; i++) {
      const size = baseSize * Math.pow(sizeDecreaseFactor, i);
      const div = document.createElement("div");
      div.style.position = "fixed";
      div.style.top = "0";
      div.style.left = "0";
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.borderRadius = "50%";
      div.style.background = `hsl(30, 100%, ${50 + i * 3}%)`; // soft orange gradient
      div.style.pointerEvents = "none";
      div.style.opacity = `${1 - i * 0.06}`;
      div.style.zIndex = "9999";
      div.style.filter = "blur(0.8px)";
      div.style.transition = "transform 0.08s ease-out";
      document.body.appendChild(div);
      trail.push(div);
    }

    let mouse = { x: 0, y: 0 };
    const coords = new Array(trailLength).fill({ x: 0, y: 0 });

    const update = () => {
      coords.unshift({ x: mouse.x, y: mouse.y });
      coords.pop();

      trail.forEach((circle, i) => {
        const { x, y } = coords[i];
        const size = baseSize * Math.pow(sizeDecreaseFactor, i);
        circle.style.transform = `translate(${x - size / 2}px, ${y - size / 2}px)`;
      });

      requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    update();

    return () => {
      trail.forEach((div) => div.remove());
    };
  }, []);

  return null;
};

export default CursorTrail;
