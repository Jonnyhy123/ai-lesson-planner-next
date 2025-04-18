export default function Navigation() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold text-deep-teal">AI Lesson Planner</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#pricing" className="text-gray-600 hover:text-deep-teal">Pricing</a>
          <a href="#login" className="text-gray-600 hover:text-deep-teal">Login</a>
          <a href="#register" className="text-gray-600 hover:text-deep-teal">Register</a>
          <select className="bg-transparent border-none text-gray-600">
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </nav>
  )
} 