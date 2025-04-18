import Head from 'next/head'
import Navigation from '../components/Navigation'
import Features from '../components/Features'
import Pricing from '../components/Pricing'

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Lesson Planner - Create Engaging Lessons in Minutes</title>
        <meta name="description" content="Transform your teaching with AI-powered lesson planning. Save hours every week while creating more engaging lessons." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-off-white">
        <Navigation />

        <main>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-24">
              <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
                Create Engaging Lesson Plans in Minutes
              </h1>
              <p className="text-xl text-gray-700 text-center mb-12 max-w-2xl mx-auto">
                Transform your teaching with AI-powered lesson planning. Save hours every week while creating more engaging lessons.
              </p>
              <a 
                href="/auth/login" 
                className="inline-block bg-deep-teal text-white px-10 py-4 rounded-lg font-medium hover:bg-teal-700 transition-all shadow-md text-lg"
              >
                Generate Lesson Plans Now
              </a>
            </div>

            <Features />
            <Pricing />

            {/* Need More Section */}
            <div className="bg-gray-50 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Need more?</h3>
                <p className="text-gray-600">We provide bespoke services for clients who have specific requirements.</p>
              </div>
              <button className="mt-4 md:mt-0 bg-deep-teal text-white px-6 py-3 rounded-lg">
                Contact Us
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-500">
                © 2024 AI Lesson Planner Ltd.
              </div>
              <div className="flex space-x-4 text-sm text-gray-500">
                <a href="#about" className="hover:text-deep-teal">About</a>
                <a href="#terms" className="hover:text-deep-teal">Terms</a>
                <a href="#privacy" className="hover:text-deep-teal">Privacy</a>
                <a href="#contact" className="hover:text-deep-teal">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}