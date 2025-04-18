export default function Pricing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Individual</h3>
        <p className="text-gray-600 mb-4">Perfect for classroom teachers and home-school planning</p>
        <div className="text-3xl font-bold mb-4">£4.99<span className="text-lg font-normal">/month</span></div>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-deep-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            100 lesson plans per month
          </li>
        </ul>
        <button className="w-full bg-deep-teal text-white py-2 rounded-md hover:bg-teal-700 transition-colors">
          Get Started
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border-2 border-deep-teal">
        <h3 className="text-xl font-semibold mb-4">Year Group</h3>
        <p className="text-gray-600 mb-4">Perfect for year group planning</p>
        <div className="text-3xl font-bold mb-4">£24.99<span className="text-lg font-normal">/month</span></div>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-deep-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            500 lesson plans per month
          </li>
        </ul>
        <button className="w-full bg-deep-teal text-white py-2 rounded-md hover:bg-teal-700 transition-colors">
          Get Started
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">School</h3>
        <p className="text-gray-600 mb-4">Perfect for whole school planning</p>
        <div className="text-3xl font-bold mb-4">£149.99<span className="text-lg font-normal">/month</span></div>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-deep-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            3,000 lesson plans per month
          </li>
        </ul>
        <button className="w-full bg-deep-teal text-white py-2 rounded-md hover:bg-teal-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  )
} 