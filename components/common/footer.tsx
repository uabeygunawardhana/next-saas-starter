import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <GraduationCap className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-semibold text-gray-900">LearnWise</span>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/teachers" className="text-sm text-gray-600 hover:text-gray-900">
              Teachers
            </Link>
            <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} LearnWise. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
