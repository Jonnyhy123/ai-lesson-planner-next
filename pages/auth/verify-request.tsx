import Head from 'next/head'
import Navigation from '../../components/Navigation'

export default function VerifyRequest() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Verify Email - AI Lesson Planner</title>
        <meta name="description" content="Verify your email address" />
      </Head>

      <Navigation />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Check your email</h1>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                We've sent you an email with a link to verify your account. Please check your inbox and click the link to continue.
              </p>
              
              <p className="text-gray-600">
                If you don't see the email, please check your spam folder.
              </p>

              <div className="mt-6">
                <a
                  href="/auth/login"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Return to login
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 