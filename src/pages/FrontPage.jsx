import { useEffect, useRef } from "react";
import gsap from "gsap";

const FrontPage = () => {
  const dennisImageRef = useRef(null);
  const centerTextRef = useRef(null);
  const scrollTextRef = useRef(null);
  const arrowRef = useRef(null);

  // Scroll animation for text
  useEffect(() => {
    const handleScroll = () => {
      const scrollX = window.scrollY * -0.5;
      gsap.to(centerTextRef.current, {
        x: scrollX,
        duration: 0.3,
        ease: "linear",
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Arrow bounce
  useEffect(() => {
    gsap.to(arrowRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: "power1.inOut",
    });
  }, []);

  // Tilt effect for Dennis image and Beyond Time text
  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = (e.clientX - centerX) / centerX;
      const deltaY = (e.clientY - centerY) / centerY;

      const rotateY = deltaX * 20; // Increased tilt
      const rotateX = -deltaY * 20;

      gsap.to([dennisImageRef.current, centerTextRef.current], {
        rotateY,
        rotateX,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <link href="https://fonts.cdnfonts.com/css/the-bold-font" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap" rel="stylesheet" />

      <div style={styles.container}>
        <div style={styles.overlay}></div>

        <img
          ref={dennisImageRef}
          src="/images/DennisPhoto.png"
          alt="Dennis"
          style={styles.dennisImage}
        />

        <div ref={centerTextRef} style={styles.centerText}>
          BEYOND TIME
        </div>

        <div ref={scrollTextRef} style={styles.scrollText}>
          Scroll Down
        </div>

        <div ref={arrowRef} style={styles.arrow}>↓</div>
      </div>
    </>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    backgroundImage: "url('../../public/images/Blue Lab Final.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    filter: "brightness(1.3)",
  },
  overlay: {
    position: "absolute",
    width: "150%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    top: 0,
    left: "-50px",
    zIndex: 0,
  },
  dennisImage: {
    position: "absolute",
    left: "55%",
    top: "67%",
    transform: "translateY(-50%)",
    width: "50%",
    height: "710px",
    zIndex: 4,
    transformStyle: "preserve-3d",
    willChange: "transform",
  },
  centerText: {
    position: "absolute",
    top: "22%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "250px",
    color: "white",
    fontFamily: "'The Bold Font', sans-serif",
    textTransform: "uppercase",
    zIndex: 3,
    whiteSpace: "nowrap",
    transformStyle: "preserve-3d",
    willChange: "transform",
  },
  scrollText: {
    position: "absolute",
    bottom: "10%",
    left: "10%",
    fontSize: "30px",
    color: "white",
    fontFamily: "'Comic Neue', cursive",
    textTransform: "uppercase",
  },
  arrow: {
    position: "absolute",
    bottom: "5%",
    left: "15%",
    fontSize: "40px",
    color: "white",
    fontFamily: "'Comic Neue', cursive",
  },
};

export default FrontPage;
