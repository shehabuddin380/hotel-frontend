const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white px-10 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">HotelLux</h1>
      <ul className="flex gap-6">
        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
        <li className="hover:text-yellow-400 cursor-pointer">Rooms</li>
        <li className="hover:text-yellow-400 cursor-pointer">Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
