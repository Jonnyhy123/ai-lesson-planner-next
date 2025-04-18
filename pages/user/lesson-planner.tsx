import { useState } from 'react'
import Head from 'next/head'
import Navigation from '../../components/Navigation'
import LessonPlanForm from '../../components/LessonPlanForm'

export default function LessonPlanner() {
  return (
    <>
      <Head>
        <title>Lesson Planner - AI Lesson Planner</title>
        <meta name="description" content="Generate AI-powered lesson plans" />
      </Head>

      <Navigation />

      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Lesson Planner
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Generate AI-powered lesson plans tailored to your needs
            </p>
          </div>

          <div className="mt-12">
            <LessonPlanForm />
          </div>
        </div>
      </main>
    </>
  )
}
