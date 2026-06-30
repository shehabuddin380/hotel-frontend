const SearchBox = () => {
  return (
    <div className="bg-white shadow-xl p-6 rounded-2xl max-w-5xl mx-auto -mt-16 relative z-10">
      <div className="grid md:grid-cols-4 gap-4">
        
        <input className="border p-3 rounded-lg" placeholder="Where are you going?" />
        
        <input type="date" className="border p-3 rounded-lg" />
        
        <input type="date" className="border p-3 rounded-lg" />
        
        <button className="bg-blue-600 text-white rounded-lg">
          Search
        </button>

      </div>
    </div>
  );
};

export default SearchBox;