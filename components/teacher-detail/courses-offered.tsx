import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function CoursesOffered() {
  const courses = ["Advanced Calculus", "SAT Math Prep", "Introduction to Linear Algebra"]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Courses Offered</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {courses.map((course, index) => (
            <li key={index} className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{course}</h3>
                <p className="text-sm text-muted-foreground">
                  <Calendar className="inline mr-1 h-4 w-4" />
                  Tuesdays and Thursdays, 4-6 PM
                </p>
              </div>
              <Button variant="outline">View Course</Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}