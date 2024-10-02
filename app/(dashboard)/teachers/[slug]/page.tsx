import TeacherHeader from "@/components/teacher-detail/teacher-header"
import Qualifications from "@/components/teacher-detail/qualifications"
import Bio from "@/components/teacher-detail/bio"
import CoursesOffered from "@/components/teacher-detail/courses-offered"
import RatingsAndReviews from "@/components/teacher-detail/ratings-and-reviews"
import CTA from "@/components/teacher-detail/cta"
import ContactInfo from "@/components/teacher-detail/contact-info"
import Accolades from "@/components/teacher-detail/accolades"
import RelatedItems from "@/components/teacher-detail/related-items"
import { getTeacherProfileById } from "@/lib/db/queries"

export default async function TeacherProfileComponent({ params }: { params: { slug: number } }) {

  const teacher = await getTeacherProfileById(params.slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <TeacherHeader teacher={teacher} />
          <Bio />
          <Qualifications />
          <Accolades />
          <CoursesOffered />
          {/* <RatingsAndReviews /> */}
          <pre>{JSON.stringify(params, null, 2)}</pre>
        </div>
        <div className="space-y-6">
          <CTA />
          {/* <ContactInfo /> */}
          {/* <Accolades /> */}
          <RelatedItems />
        </div>
      </div>
    </div>
  )
}