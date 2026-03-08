import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Отзывы", path: "/reviews" },
  { label: "База знаний", path: "/knowledge" },
  { label: "Кто автор?", path: "/author" },
  { label: "Подробнее", path: "/details" },
  { label: "Каталог услуг", path: "/services" },
  { label: "Условия и оплата", path: "/terms" },
  { label: "ЧАВО", path: "/faq" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl"
      style={{
        background: "rgba(5, 13, 26, 0.85)",
        borderBottom: "1px solid rgba(0, 212, 255, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-12">
        <Link to="/" className="text-base font-bold tracking-tight text-foreground">
          АнтиСистема
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[13px] transition-colors duration-200 ${
                location.pathname === item.path
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden backdrop-blur-2xl"
          style={{
            background: "rgba(5, 13, 26, 0.95)",
            borderBottom: "1px solid rgba(0, 212, 255, 0.1)",
          }}
        >
          <nav className="flex flex-col px-6 py-4 gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`text-sm py-1 transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
