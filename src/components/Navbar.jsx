import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };

  const navStyle = ({ isActive }) =>
    `px-2 py-1 transition ${
      isActive
        ? "text-yellow-400 border-b-2 border-yellow-400"
        : "hover:text-yellow-400"
    }`;

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-400">
          <Link to="/">HotelLux</Link>
        </h1>

        {/* Menu */}
        <ul className="flex gap-6 items-center">
          
          <li>
            <NavLink to="/" className={navStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/rooms" className={navStyle}>
              Rooms
            </NavLink>
          </li>

          {token && (
            <li>
              <NavLink to="/dashboard" className={navStyle}>
                Dashboard
              </NavLink>
            </li>
          )}

          {!token ? (
            <>
              <li>
                <NavLink
                  to="/login"
                  className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
                >
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/signup"
                  className="border border-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition"
                >
                  Signup
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;