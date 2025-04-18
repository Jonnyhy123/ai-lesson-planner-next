export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div className="text-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-soft-coral rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-deep-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Fast</h3>
          <p className="text-gray-600">Generate complete, customized lesson plans in under 2 minutes. What used to take hours now takes moments.</p>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-soft-coral rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-deep-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Standardised</h3>
          <p className="text-gray-600">OFSTED-aligned lesson plans following proven teaching practices and pedagogical frameworks.</p>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-soft-coral rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-deep-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Curriculum-Aligned</h3>
          <p className="text-gray-600">Every lesson plan maps directly to UK National Curriculum objectives and key stage requirements.</p>
        </div>
      </div>
    </div>
  )
} 