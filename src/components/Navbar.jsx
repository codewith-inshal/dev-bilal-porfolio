import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          DevBilal<span className="text-orange-500">.</span>
        </h1>

        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-blue-500"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-blue-500"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-blue-500"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-blue-500"
          >
            Contact
          </button>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("services")}>Services</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
