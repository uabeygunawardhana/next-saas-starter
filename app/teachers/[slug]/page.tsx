'use client'

import TeacherHeader from "@/components/teacher-detail/teacher-header"
import Qualifications from "@/components/teacher-detail/qualifications"
import Bio from "@/components/teacher-detail/bio"
import CoursesOffered from "@/components/teacher-detail/courses-offered"
import RatingsAndReviews from "@/components/teacher-detail/ratings-and-reviews"
import CTA from "@/components/teacher-detail/cta"
import ContactInfo from "@/components/teacher-detail/contact-info"
import Accolades from "@/components/teacher-detail/accolades"
import RelatedItems from "@/components/teacher-detail/related-items"

export default function TeacherProfileComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <TeacherHeader />
          <Bio />
          <Qualifications />
          <Accolades />
          <CoursesOffered />
          {/* <RatingsAndReviews /> */}
        </div>
        <div className="space-y-6">
          <CTA />
          <ContactInfo />
          {/* <Accolades /> */}
          <RelatedItems />
        </div>
      </div>
    </div>
  )
}