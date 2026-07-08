const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-3">HotelLux</h3>
          <p className="text-slate-400 text-sm">
            Bangladesh's trusted platform for booking premium hotels at
            affordable prices.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/rooms" className="hover:text-yellow-400 transition">
                Rooms
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-yellow-400 transition">
                Login
              </a>
            </li>
            <li>
              <a href="/signup" className="hover:text-yellow-400 transition">
                Signup
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Dhaka, Bangladesh</li>
            <li>support@hotellux.com</li>
            <li>+880 1XXX-XXXXXX</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-500">
        © 2025 HotelLux. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;