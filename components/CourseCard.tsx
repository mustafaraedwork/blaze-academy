'use client';

import { Star, Clock, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Course } from '@/types';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {course.category}
        </div>
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
          ${course.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 line-clamp-2 hover:text-blue-600 transition">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2">
          {course.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
          <BookOpen className="h-4 w-4" />
          <span>{course.instructor}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-600">
            <div className="flex items-center space-x-1 space-x-reverse">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-1 space-x-reverse">
              <Users className="h-4 w-4" />
              <span>{course.students.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex items-center space-x-1 space-x-reverse">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-gray-900">{course.rating}</span>
          </div>
        </div>

        {/* Button */}
        <Link href={`/courses/${course.id}`}>
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                عرض التفاصيل
            </button>
        </Link>
      </div>
    </div>
  );
}