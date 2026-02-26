const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 h-14">
        <a href="#" className="font-mono text-sm font-medium tracking-tight">
          AB<span className="text-accent">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Projects", "Skills", "Experience", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
