import { Link } from "react-router-dom"

const Navbar = () => (
  <nav className="w-full bg-white shadow-sm">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-blue-600">
        JobPortal
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/" className="text-sm text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link to="/login" className="text-sm text-gray-700 hover:text-blue-600">
          Login
        </Link>
        <Link
          to="/register"
          className="px-3 py-1.5 rounded text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          Register
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar