export default function LessonPlanForm() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
        Create a Lesson Plan Now
      </h1>
      <p className="text-xl text-gray-700 text-center mb-8">
        Fill in the details below and our AI will generate your complete lesson plan in under 2 minutes
      </p>

      {/* Lesson Plan Generator Form */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-12 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-800">Subject</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-teal focus:ring-deep-teal bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800">Lesson Length</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-teal focus:ring-deep-teal bg-gray-50">
                <option>15 minutes</option>
                <option>30 minutes</option>
                <option>45 minutes</option>
                <option>1 hour</option>
                <option>1 hour 15 minutes</option>
                <option>1 hour 30 minutes</option>
                <option>1 hour 45 minutes</option>
                <option>2 hours</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800">Lesson Objective</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-teal focus:ring-deep-teal bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800">Class Ability</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-teal focus:ring-deep-teal bg-gray-50">
                <option>Mixed Ability</option>
                <option>High Ability</option>
                <option>Medium Ability</option>
                <option>Low Ability</option>
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-800">Learning Objectives</label>
              <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-teal focus:ring-deep-teal bg-gray-50" rows={6}></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800">Resources Available</label>
              <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-teal focus:ring-deep-teal bg-gray-50" rows={4}></textarea>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button className="bg-deep-teal text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-all shadow-md">
            Generate Lesson Plan
          </button>
        </div>
      </div>
    </div>
  )
} 