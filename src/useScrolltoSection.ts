import { useNavigate, useLocation } from "react-router-dom";

export function useScrollToSection() {
  const navigate = useNavigate();
  const location = useLocation();

  return (sectionId: string) => {
    const scroll = () => {
      if (sectionId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth" });
    };

    if (location.pathname === "/") {
      scroll();
    } else {
      sessionStorage.setItem("scrollTarget", sectionId);
      navigate("/");
    }
  };
}
