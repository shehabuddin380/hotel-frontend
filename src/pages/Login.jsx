function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input className="w-full mb-3 p-2 border rounded" placeholder="Username" />
        <input
          type="password"
          className="w-full mb-3 p-2 border rounded"
          placeholder="Password"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
