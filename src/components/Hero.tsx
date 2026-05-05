import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  const fullName = "Abil Biju.";
  const [typedName, setTypedName] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 🔤 Typing effect
  useEffect(() => {
    let i = 0;
    let typingTimer: any;
    let restartTimer: any;

    const type = () => {
      if (i <= fullName.length) {
        setTypedName(fullName.slice(0, i));
        i++;
        typingTimer = setTimeout(type, 120);
      } else {
        restartTimer = setTimeout(() => {
          i = 0;
          setTypedName("");
          type();
        }, 4000);
      }
    };

    type();

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(restartTimer);
    };
  }, []);

  // ⚡ Fast particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    let w = 0;
    let h = 0;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      const rect = canvas.parentElement!.getBoundingClientRect();

      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";

      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      w = rect.width;
      h = rect.height;
    };

    resize();
    window.addEventListener("resize", resize);

    const particles: any[] = [];
    const pointer = { x: -1000, y: -1000 };

    const spawn = (x: number, y: number) => {
      for (let i = 0; i < 4; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 1.6,
          vy: (Math.random() - 0.5) * 1.6,
          r: 6 + Math.random() * 8,
          life: 40 + Math.random() * 40,
          ang: Math.random() * Math.PI * 2,
          av: (Math.random() - 0.5) * 0.06,
          type: Math.random() > 0.5 ? "filled" : "hollow",
        });
      }
      if (particles.length > 350) particles.splice(0, 80);
    };

    const parent = canvas.parentElement!;

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      spawn(pointer.x, pointer.y);
    };

    parent.addEventListener("mousemove", onMove);

    let raf = 0;

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.life--;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // simple motion (no heavy physics)
        p.x += p.vx;
        p.y += p.vy;

        // slight attraction to pointer
        const dx = pointer.x - p.x;
        const dy = pointer.y - p.y;
        p.vx += dx * 0.0006;
        p.vy += dy * 0.0006;

        p.vx *= 0.96;
        p.vy *= 0.96;

        // rotate
        p.ang += p.av;

        // theme-aware color
        const isDark = document.documentElement.classList.contains("dark");
        const fillCol = isDark ? "rgba(255,255,255,0.95)" : "rgba(0,0,0,0.9)";
        const strokeCol = isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.55)";

        // draw triangle
        const size = p.r;
        const cx = p.x;
        const cy = p.y;
        const a = p.ang;

        const p1x = cx + Math.cos(a) * size;
        const p1y = cy + Math.sin(a) * size;
        const p2x = cx + Math.cos(a + (2 * Math.PI) / 3) * size;
        const p2y = cy + Math.sin(a + (2 * Math.PI) / 3) * size;
        const p3x = cx + Math.cos(a + (4 * Math.PI) / 3) * size;
        const p3y = cy + Math.sin(a + (4 * Math.PI) / 3) * size;

        ctx.beginPath();
        ctx.moveTo(p1x, p1y);
        ctx.lineTo(p2x, p2y);
        ctx.lineTo(p3x, p3y);
        ctx.closePath();

        if (p.type === "filled") {
          ctx.fillStyle = fillCol;
          ctx.fill();
        } else {
          ctx.lineWidth = Math.max(1, size * 0.12);
          ctx.strokeStyle = strokeCol;
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      parent.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="w-full min-h-[70vh] flex items-center relative overflow-hidden"
    >
      <div className="mesh-bg absolute inset-0 z-[2]" />
      {/* Canvas FULL WIDTH */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none"
      />

      {/* Content centered */}
      <div className="container mx-auto relative z-10 py-12">
        <div className="max-w-4xl md:pr-60 relative">

          {/* Profile Image */}
          <img
            src="/IMG_3234.jpg"
            alt="Profile"
            className="hidden md:block h-32 w-32 md:h-60 md:w-60 rounded-full object-cover
            border border-border grayscale contrast-110 brightness-95 opacity-75
            md:absolute md:right-0 md:top-[45%] md:-translate-y-1/2
            transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          />

          <p className="label-mono mb-6">Developer Portfolio v2.0.0</p>

          <h1 className="heading-xl mb-8">
            Hi, I'm <span className="text-accent">{typedName}</span>
            <span className="typing-cursor" />
          </h1>

          <p className="text-lg md:text-xl max-w-xl mb-10 text-muted-foreground">
            B.Tech Computer Science (Data Science) student passionate about AI,
            Machine Learning, Cybersecurity and real-world solutions.
          </p>

          <div className="flex gap-6 items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90"
            >
              Get in touch <ArrowUpRight size={16} />
            </a>

            <a href="#projects" className="link-underline text-sm">
              View work
            </a>

            <a href="/resume.pdf" className="link-underline text-sm">
              View Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;