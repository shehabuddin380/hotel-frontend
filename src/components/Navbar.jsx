import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // Directly read token
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  // Logout
  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };

  // Active link style
  const navStyle = ({ isActive }) =>
    `hover:text-yellow-400 transition ${
      isActive ? "text-yellow-400 font-semibold" : ""
    }`;

  return (
    <nav className="bg-slate-900 text-white px-10 py-4 flex justify-between items-center shadow-lg">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-yellow-400">
        <Link to="/">HotelLux</Link>
      </h1>

      {/* Menu */}
      <ul className="flex gap-8 items-center">
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
                className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition font-medium"
              >
                Login
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/signup"
                className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition font-medium"
              >
                Signup
              </NavLink>
            </li>
          </>
        ) : (
          <li>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition font-medium"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
