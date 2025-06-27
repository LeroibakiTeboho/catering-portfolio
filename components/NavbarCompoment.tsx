import { useState, useEffect, FormEvent, ChangeEvent, RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./LogoComponent";

interface BookingForm {
  name: string;
  email: string;
  date: string;
  guests: number;
  message: string;
}

interface NavbarCompomentProps {
  heroRef: RefObject<HTMLDivElement | null>;
  menuRef: RefObject<HTMLDivElement | null>;
  processRef: RefObject<HTMLDivElement | null>;
  testimonialsRef: RefObject<HTMLDivElement | null>;
  aboutRef: RefObject<HTMLDivElement | null>;
}

const NavbarCompoment = ({
  heroRef,
  menuRef,
  processRef,
  testimonialsRef,
  aboutRef,
}: NavbarCompomentProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState<BookingForm>({
    name: "",
    email: "",
    date: "",
    guests: 2,
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  const handleBookingSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `Thank you, ${bookingForm.name}! Your tasting session on ${bookingForm.date} for ${bookingForm.guests} guests has been booked. We'll contact you at ${bookingForm.email} to confirm.`
    );
    setShowBookingModal(false);
    setBookingForm({
      name: "",
      email: "",
      date: "",
      guests: 2,
      message: "",
    });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
    }));
  };

  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }

    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-90 shadow-md py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2 lg:space-x-6">
            {[
              { name: "Home", ref: heroRef },
              { name: "Menu", ref: menuRef },
              { name: "Process", ref: processRef },
              { name: "Testimonials", ref: testimonialsRef },
              { name: "Chef", ref: aboutRef },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.ref)}
                className="text-sm lg:text-base font-medium text-gray-700 hover:text-[#d4a056] transition-colors px-2 py-1"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Book Tasting Button (Desktop) */}
          <button
            onClick={() => setShowBookingModal(true)}
            className="hidden md:block text-sm lg:text-base font-medium bg-[#d4a056] text-white px-4 py-2 rounded-md hover:bg-[#b8863e] transition-colors"
          >
            Book Tasting
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-white z-40 pt-16"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
          >
            <div className="flex flex-col p-4 space-y-4">
              {[
                { name: "Home", ref: heroRef },
                { name: "Menu", ref: menuRef },
                { name: "Process", ref: processRef },
                { name: "Testimonials", ref: testimonialsRef },
                { name: "Chef", ref: aboutRef },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.ref)}
                  className="text-lg font-medium text-gray-700 hover:text-[#d4a056] transition-colors py-3 border-b border-gray-100 text-left px-4"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setShowBookingModal(true);
                  setMobileMenuOpen(false);
                }}
                className="mt-4 bg-[#d4a056] text-white font-medium py-3 rounded-md text-lg"
              >
                Book Tasting
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-serif text-[#b8863e]">
                  Book a Tasting Session
                </h3>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleBookingSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={bookingForm.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a056]"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={bookingForm.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a056]"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="date">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={bookingForm.date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a056]"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="guests">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={bookingForm.guests}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a056]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={bookingForm.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a056]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#d4a056] text-white py-3 rounded-md font-medium hover:bg-[#b8863e] transition-colors"
                >
                  Book Tasting Session
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default NavbarCompoment;
