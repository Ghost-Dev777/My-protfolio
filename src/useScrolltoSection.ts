import { useNavigate, useLocation } from "react-router-dom";

export function useScrollToSection() {
  const navigate = useNavigate();
  const location = useLocation();

  return (sectionId?: string) => {
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (location.pathname !== "/") {
      sessionStorage.setItem("scrollTo", sectionId);
      navigate("/");
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };
}
