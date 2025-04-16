import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FixedBackgroundPage = () => {
  const textBoxRef = useRef(null);
  const imageBoxRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Text animation from bottom
    gsap.fromTo(
      textBoxRef.current,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textBoxRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // Image animation from top
    gsap.fromTo(
      imageBoxRef.current,
      { y: "-100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageBoxRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    // Header slide in
    gsap.fromTo(
      headerRef.current,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 95%",
          end: "top 70%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.background} />
      <div style={styles.content}>
        <div ref={headerRef} style={styles.header}>
          FIXED BACKGROUND PAGE
        </div>
        <div ref={imageBoxRef} style={styles.imageBox}>
          <img src="/images/Dennis_Sad.jpg" alt="Dennis" style={styles.image} />
        </div>
        <div ref={textBoxRef} style={styles.textBox}>
          Dennis stood still. Everything around him moved, but not the world beneath.
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    position: "relative",
    height: "200vh", // Enough scroll to trigger animations
    overflowX: "hidden",
  },
  background: {
    backgroundImage: "url('/images/Background.jpg')",
    backgroundSize: "cover",
    backgroundAttachment: "fixed", // The key to keeping background still
    backgroundPosition: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  content: {
    position: "relative",
    paddingTop: "20vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "100px",
  },
  header: {
    fontSize: "32px",
    color: "white",
    background: "#222",
    padding: "15px 30px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(255,255,255,0.2)",
    fontFamily: "Comic Sans MS, sans-serif",
  },
  imageBox: {
    width: "300px",
    height: "300px",
    border: "5px solid white",
    boxShadow: "10px 10px 20px rgba(255,255,255,0.3)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  textBox: {
    background: "white",
    color: "black",
    padding: "20px 30px",
    borderRadius: "8px",
    fontSize: "20px",
    maxWidth: "600px",
    textAlign: "center",
    fontFamily: "Comic Sans MS, sans-serif",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
  },
};

export default FixedBackgroundPage;