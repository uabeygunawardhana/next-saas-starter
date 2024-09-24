import TeacherCard from "@/components/teachers-list/teacher-card"

export default function TeacherList({ teachers }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {teachers.map(teacher => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </div>
  )
}