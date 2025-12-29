import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "A", label: "سہولت کی شناخت" },
    { id: "B", label: "بستر" },
    { id: "C", label: "عملہ" },
    { id: "D", label: "بنیادی ڈھانچہ" },
    { id: "E", label: "خدمات" },
    { id: "F", label: "تشخیصات" },
    { id: "G", label: "اشیاء" },
    { id: "J", label: "کوالٹی" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(`module-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg">
              <FileText className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-foreground">
                صحت سہولت تشخیصی سوالنامہ
              </h1>
              <p className="text-xs text-muted-foreground">امید نو پروجیکٹ - آغا خان یونیورسٹی</p>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-secondary"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <nav className="hidden md:flex items-center gap-1 flex-wrap">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link px-3 py-1.5 rounded-lg hover:bg-secondary transition-colors text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-3 pt-3 border-t border-border grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link px-3 py-2 rounded-lg bg-secondary text-center text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
