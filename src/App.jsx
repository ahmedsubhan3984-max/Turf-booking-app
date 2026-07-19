import React,{useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function TurfBookingApp() {
  const turfs = [
    {
      id: 1,
      name: "Green Arena Turf",
      location: "Bhopal",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Champions Football Ground",
      location: "Indore",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Arif nagar Turf",
      location: "Bhopal",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const slots = [
    "6:00 AM",
    "8:00 AM",
    "10:00 AM",
    "1:00 PM",
    "4:00 PM",
    "10:00 PM",
    "12:00 AM",
  ];

  const [selectedTurf, setSelectedTurf] = React.useState(null);
  const [selectedSlot, setSelectedSlot] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState("");
  const [bookings, setBookings] = React.useState([]);

  const handleBooking = () => {
    if (!selectedTurf || !selectedSlot || !selectedDate) {
      alert("Please select turf, date and slot.");
      return;
    }

    const newBooking = {
      turf: selectedTurf.name,
      slot: selectedSlot,
      date: selectedDate,
      price: selectedTurf.price,
    };

    setBookings([...bookings, newBooking]);
    alert("Slot booked successfully 🎉");

    setSelectedSlot("");
    setSelectedDate("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white p-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-green-700 mb-3">
            Turf Slot Booking
          </h1>
          <p className="text-lg text-gray-600">
            Book football, cricket & sports turfs instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {turfs.map((turf) => (
            <div
              key={turf.id}
              className={`bg-white rounded-3xl shadow-lg overflow-hidden border-4 transition-all duration-300 cursor-pointer hover:scale-105 ${
                selectedTurf?.id === turf.id
                  ? "border-green-600"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedTurf(turf)}
            >
              <img
                src={turf.image}
                alt={turf.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="text-2xl font-bold mb-2">{turf.name}</h2>
                <p className="text-gray-500 mb-3">📍 {turf.location}</p>

                <div className="flex items-center justify-between">
                  <span className="text-green-700 font-bold text-xl">
                    ₹{turf.price}/hour
                  </span>

                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-semibold">
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-green-700">
              Book Your Slot
            </h2>

            <div className="mb-5">
              <label className="block font-semibold mb-2">Choose Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-3">Available Slots</label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {slots.map((slot) => (
                  <button
                    key={slot}
                  
                  className={`p-3 rounded-2xl border font-semibold transition-all ${
                      selectedSlot === slot
                        ? "bg-green-600 text-white border-green-600"
                        : "bg-gray-100 hover:bg-green-100"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleBooking}
              className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-bold shadow-lg"
            >
              Confirm Booking
            </button>
          </div>

          <div className="bg-green-50 rounded-3xl p-6">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Booking Summary
            </h2>

            {selectedTurf ? (
              <div className="space-y-4 text-lg">
                <div className="flex justify-between">
                  <span className="font-semibold">Turf</span>
                  <span>{selectedTurf.name}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Date</span>
                  <span>{selectedDate || "Not selected"}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Slot</span>
                  <span>{selectedSlot || "Not selected"}</span>
                </div>

                <div className="flex justify-between text-green-700 font-bold text-xl border-t pt-4">
                  <span>Total</span>
                  <span>₹{selectedTurf.price}</span>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">
                Select a turf to see booking details.
              </p>
            )}

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">Recent Bookings</h3>

              <div className="space-y-3 max-h-72 overflow-y-auto pr-2">
                {bookings.length === 0 ? (
                  <p className="text-gray-500">No bookings yet.</p>
                ) : (
                  bookings.map((booking, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-4 shadow"
                    >
                      <p className="font-bold">{booking.turf}</p>
                      <p className="text-sm text-gray-600">
                        📅 {booking.date}
                      </p>
                      <p className="text-sm text-gray-600">
                        ⏰ {booking.slot}
                      </p>
                      <p className="text-green-700 font-semibold mt-1">
                        ₹{booking.price}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center mt-12 text-gray-500 text-sm">
          Made with ❤️ for sports lovers.
        </footer>
      </div>
    </div>
  );
}
  
      
      