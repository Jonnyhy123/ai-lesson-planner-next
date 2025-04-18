import { useState } from 'react';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import LessonPlanForm from '../../components/LessonPlanForm';

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>User Dashboard - AI Lesson Planner</title>
        <meta name="description" content="Create and manage your lesson plans" />
      </Head>

      <Navigation />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Create a New Lesson Plan</h1>
            <LessonPlanForm />
          </div>
        </div>
      </main>
    </div>
  );
} 