import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa"

const navMenu = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [sheetOpen, setSheetOpen] = useState(false); // contact sheet
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [showPopup, setShowPopup] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/bh.bassma.housbane@gmail.com", {
        method: "POST",
        body: formData,
      });
      setShowPopup(true);
      form.reset();
    } catch (error) {
      alert("An error occured. Try again!")
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b-2 border-stone-800 ${scrolled
        ? "bg-gradient-to-r from-rose-200 to-red-200 shadow-lg"
        : "bg-red-200"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-8">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-2xl text-stone-800 hover:text-white transition-colors duration-300"
            style={{ fontFamily: "satoshi-black" }}
          >
            b24h/&gt;
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex justify-end px-12 flex-1 space-x-9 text-stone-800 text-base"
          style={{ fontFamily: "satoshi-medium" }}
        >
          {navMenu.map((link) => (
            <Link
              to={link.href}
              key={link.href}
              className={`relative group transition-colors duration-300 ${location.pathname === link.href
                ? "text-white"
                : "hover:text-white"
                }`}
            >
              {link.label}
              <span
                className={`absolute left-0 bottom-[-4px] h-[2px] bg-stone-800 transition-all duration-300 ${location.pathname === link.href
                  ? "w-full"
                  : "w-0 group-hover:w-full"
                  }`}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Button
            onClick={() => setSheetOpen(true)}
            className="bg-red-300 hover:bg-red-100 transition-all duration-300"
          >
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-stone-800 hover:scale-110 transition-transform duration-200"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-rose-200 to-red-200 border-t border-stone-800 px-6 py-4 space-y-4">
          {navMenu.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block rounded p-2 transition ${location.pathname === link.href
                ? "bg-stone-800 text-white"
                : "text-stone-800 hover:bg-stone-800 hover:text-white"
                }`}
              style={{ fontFamily: "satoshi-medium" }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            onClick={() => {
              setSheetOpen(true);
              setIsOpen(false);
            }}
            className="w-full bg-red-300 hover:bg-red-100"
          >
            Contact Me
          </Button>
        </div>
      )}

      {/* Contact Sheet */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="right" className="bg-red-50">
          <SheetHeader>
            <SheetTitle className="text-2xl px-4 mt-10 text-stone-800" style={{ fontFamily: 'satoshi-bold' }}>
              Get in Touch
            </SheetTitle>
          </SheetHeader>
          <div className="px-10 space-y-4" style={{ fontFamily: "satoshi-medium" }}>
            <p>Feel free to contact me by submitting the form below or shoot me directly at : <span> </span>
              <a className="text-red-300 font-bold" href="mailto:bh.bassma.housbane@gmail.com">
                bh.bassma.housbane@gmail.com
              </a>
            </p>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" className="w-full p-2 border border-stone-300 rounded focus:ring-2 focus:ring-red-400" id="name" name="name" required placeholder="Bassma Housbane" />
              </div>
              <div className="form-group">
                <input type="email" className="w-full p-2 border border-stone-300 rounded focus:ring-2 focus:ring-red-400" id="email" name="email" required placeholder="you@example.com" />
              </div>
              <div className="form-group">
                <input type="text" className="w-full p-2 border border-stone-300 rounded focus:ring-2 focus:ring-red-400" id="subject" name="subject" required placeholder="Let's talk about..." />
              </div>
              <textarea id="message" className="w-full p-2 border border-stone-300 rounded focus:ring-2 focus:ring-red-400" rows="5" name="message" required placeholder="Your message..."></textarea>
              <input type="hidden" name="_subject" value="New message from your portfolio" />
              <input type="hidden" name="_captcha" value="false" />
              <Button type="submit" className="w-full bg-red-300 hover:bg-red-100">
                Submit
              </Button>
            </form>

            {showPopup && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-red-50 p-6 rounded-lg shadow-lg text-stone-800 space-y-4">
                  <h2 className="text-xl font-staoshi-bold">Thank you 🎉</h2>
                  <p>Your message has been sent successfully. I will respond as soon as possible.</p>
                  <Button onClick={() => setShowPopup(false)}>Close</Button>
                </div>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header