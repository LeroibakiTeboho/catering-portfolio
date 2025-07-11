import { motion } from "framer-motion";
import { useState } from "react";

const CTAComponent = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    date: "",
    guests: 2,
    message: "",
  });

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="py-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-serif mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Experience Exceptional Catering?
        </motion.h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Book a private tasting session and let us create a custom menu for
          your special event.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#d4a056] px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
          onClick={() => setShowBookingModal(true)}
        >
          Schedule Your Tasting
        </motion.button>
      </div>
      {/* Booking Modal */}
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

              <form onSubmit={handleBookingSubmit} className="text-gray-700">
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
    </div>
  );
};

export default CTAComponent;
