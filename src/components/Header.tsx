import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useScrollToSection } from "../useScrolltoSection.ts";

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <motion.span
      className="text-muted-foreground"
      animate={{ x: dir === "left" ? [-6, 0, -6] : [6, 0, 6] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
    >
      {dir === "left" ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
    </motion.span>
  );
}

const navLinks = [
  { to: "/contact-me", label: "Contact Me" },
  { to: "/", label: "My Works" },
];

function DesktopNav() {
  const [open, setOpen] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const scrollTo = useScrollToSection();
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setShowLinks(false);
  };

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseLeave={handleClose}
    >
      {!open && <Arrow dir="left" />}

      <motion.div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center rounded-full bg-card border overflow-hidden z-10"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: open ? 360 : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        onAnimationComplete={() => {
          if (open) setShowLinks(true);
        }}
      >
        <AnimatePresence>
          {showLinks && (
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25 }}
            >
              <Link
                to={navLinks[0].to}
                className="text-sm font-medium hover:text-primary whitespace-nowrap px-6"
              >
                {navLinks[0].label}
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showLinks && (
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25, delay: 0.05 }}
            >
              <Link
                to={navLinks[1].to}
                onClick={() => scrollTo("works")}
                className="text-sm font-medium hover:text-primary whitespace-nowrap px-6"
              >
                {navLinks[1].label}
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <Link
        to="/"
        onMouseEnter={handleOpen}
        onClick={() => scrollTo("hero")}
        className="relative z-20 text-lg font-bold px-3 py-2"
      >
        <img src="/logo/Logo.jpg" className="h-11 w-11 rounded-full" alt="My logo" />
      </Link>

      {!open && <Arrow dir="right" />}
    </div>
  );
}

function MobileNav() {
  const items = [
    { to: "/", label: "Logo", delay: 0 },
    ...navLinks.map((l, i) => ({ ...l, delay: 0.15 + i * 0.1 })),
  ];

  return (
    <div className="flex items-center justify-between px-6 py-2 rounded-2xl bg-black/70 w-full">
      {items.slice(0, 1).map((item) => (
        <motion.div
          key={item.to}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: item.delay, duration: 0.4 }}
        >
          <Link to={item.to} className="text-lg font-bold">
            <img src="/logo/Logo.jpg" className="h-10 rounded-full w-10" alt="" />
          </Link>
        </motion.div>
      ))}

      <div className="flex items-center gap-4">
        {items.slice(1).map((item) => (
          <motion.div
            key={item.to}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: item.delay, duration: 0.4 }}
          >
            <Link
              to={item.to}
              className="text-sm font-medium hover:text-primary"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full transition-all duration-300 py-3 z-[2] ${
        scrolled
          ? "md:backdrop-blur-md md:bg-white/10 md:border-b md:border-white/20 md:shadow-sm"
          : ""
      }`}
    >
      <div className="hidden md:flex justify-center">
        <DesktopNav />
      </div>

      <div className="flex md:hidden w-[85%] mx-auto backdrop-blur-md">
        <MobileNav />
      </div>
    </header>
  );
}
