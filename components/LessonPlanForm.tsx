import { useState } from 'react'
import CustomSelect from './CustomSelect'

export default function LessonPlanForm() {
  const [lessonLength, setLessonLength] = useState('1 hour')
  const [classAbility, setClassAbility] = useState('Mixed Ability')

  const lessonLengthOptions = [
    { value: '15 minutes', label: '15 minutes' },
    { value: '30 minutes', label: '30 minutes' },
    { value: '45 minutes', label: '45 minutes' },
    { value: '1 hour', label: '1 hour' },
    { value: '1 hour 15 minutes', label: '1 hour 15 minutes' },
    { value: '1 hour 30 minutes', label: '1 hour 30 minutes' },
    { value: '1 hour 45 minutes', label: '1 hour 45 minutes' },
    { value: '2 hours', label: '2 hours' },
  ]

  const classAbilityOptions = [
    { value: 'Mixed Ability', label: 'Mixed Ability' },
    { value: 'High Ability', label: 'High Ability' },
    { value: 'Medium Ability', label: 'Medium Ability' },
    { value: 'Low Ability', label: 'Low Ability' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
        Create a Lesson Plan Now
      </h1>
      <p className="text-xl text-gray-700 text-center mb-12">
        Fill in the details below and our AI will generate your complete lesson plan in under 2 minutes
      </p>

      {/* Lesson Plan Generator Form */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Subject</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-teal focus:ring-deep-teal bg-gray-50 p-3" />
            </div>
            <CustomSelect
              label="Lesson Length"
              options={lessonLengthOptions}
              value={lessonLength}
              onChange={setLessonLength}
            />
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Lesson Objective</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-teal focus:ring-deep-teal bg-gray-50 p-3" />
            </div>
            <CustomSelect
              label="Class Ability"
              options={classAbilityOptions}
              value={classAbility}
              onChange={setClassAbility}
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Learning Objectives</label>
              <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-teal focus:ring-deep-teal bg-gray-50 p-3" rows={6}></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Resources Available</label>
              <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-teal focus:ring-deep-teal bg-gray-50 p-3" rows={4}></textarea>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <button className="bg-deep-teal text-white px-10 py-4 rounded-lg font-medium hover:bg-teal-700 transition-all shadow-md text-lg">
            Generate Lesson Plan
          </button>
        </div>
      </div>
    </div>
  )
} 