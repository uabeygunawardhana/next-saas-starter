// import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Filters from "@/components/teachers-list/filters"
import SearchBar from "@/components/teachers-list/search-bar"
import SortingOptions from "@/components/teachers-list/sorting-options"
import FeaturedTeachers from "@/components/teachers-list/featured-teachers"
import TeacherList from "@/components/teachers-list/teacher-list"
import Pagination from "@/components/teachers-list/pagination"
import { getTeacherProfiles } from '@/lib/db/queries';

const teachers = [
  {
    id: 1,
    name: "Sarah Johnson",
    photo: "/placeholder.svg?height=100&width=100",
    qualifications: "Ph.D. in Mathematics, 10+ years experience",
    subjects: ["Mathematics", "Calculus", "Statistics"],
    rating: 4.9,
    reviews: 120,
    featured: true
  },
  {
    id: 2,
    name: "Michael Chen",
    photo: "/placeholder.svg?height=100&width=100",
    qualifications: "M.Sc. in Physics, Certified Science Educator",
    subjects: ["Physics", "Chemistry", "General Science"],
    rating: 4.7,
    reviews: 85,
    featured: true
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    photo: "/placeholder.svg?height=100&width=100",
    qualifications: "B.A. in English Literature, 5 years tutoring experience",
    subjects: ["English", "Literature", "Writing"],
    rating: 4.8,
    reviews: 92,
    featured: false
  },
  {
    id: 4,
    name: "David Kim",
    photo: "/placeholder.svg?height=100&width=100",
    qualifications: "M.A. in History, Published Author",
    subjects: ["History", "Social Studies", "Government"],
    rating: 4.6,
    reviews: 78,
    featured: false
  }
]

export default async function TeacherListingsComponent() {
  // const [searchTerm, setSearchTerm] = useState("")
  // const [priceRange, setPriceRange] = useState([0, 100])
  const teacherProfiles = await getTeacherProfiles();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Your Perfect Teacher</h1>

      {/* <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}

      {/* <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Teachers</h2>
        <FeaturedTeachers teachers={teachers} />
      </section> */}

      <div className="flex flex-col md:flex-row gap-8">
        {/* <Filters priceRange={priceRange} setPriceRange={setPriceRange} /> */}
        <main className="flex-1">
          <SortingOptions />
          <TeacherList teachers={teacherProfiles} />
          <Pagination />
        </main>
      </div>
    </div>
  )
}